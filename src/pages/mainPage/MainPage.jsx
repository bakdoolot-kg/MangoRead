import CardManga from "../../components/cardManga/CardManga";
import {useGetMangaQuery} from "../../redux/services/mangaApiSlice";
import {Box, Button, Grid, Pagination, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Sort from "../../components/sort/Sort.jsx";
import {getDateRange} from "../../hooks/getDateRange.js";

const MainPage = () => {
  const [page, setPage] = useState(1)
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)
  const [sorting, setSorting] = useState(false)
  const [sortData, setSortData] = useState("")
  const navigate = useNavigate()
  const [dates, setDates] = useState(null)
  const {data, isSuccess, isLoading, isError} = useGetMangaQuery({page: page, genre: sortData});


  const handleShowSort = (e) => {
    setSortData(e.target.value)
  }

  const handlePage = (e, value) => {
    setPage(value)
  }

  const applySorting = () => {
    if (dateFrom && dateTo) {
      setDates(getDateRange(dateFrom, dateTo, "YYYY"))
      setSorting(true)
    }
  }

  const resetSorting = () => {
    setDateFrom(null)
    setDateTo(null)
    setDates(null)
    setSorting(false)
    setSortData("")
  }

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return (
      <Box>
        <Typography>Something went wrong...</Typography>
        <Button variant="text" onClick={() => navigate("/")}>Back to main page</Button>
      </Box>)
  }

  if (isSuccess) {
    return (
      <>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 3}}>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Box sx={{width: "300px"}}>
              <Sort onApply={applySorting} onReset={resetSorting} dateFrom={dateFrom} setDateFrom={setDateFrom}
                    dateTo={dateTo}
                    setDateTo={setDateTo}
                    sortData={sortData}
                    handleShowSort={(e) => handleShowSort(e)}
              />
            </Box>
            <Box sx={{ml: 3}}>
              <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 2}}>
                {/* если sorting, true делаем фильтрацию сравнивая дату выпуска с значением введеные в инпуты в Sort.jsx */}
                {/* разницу между введенными годами вытаскиваем через кастомный хук getDateRange, затем сравниваем с датой выпуска манги */}
                {!sorting ? data?.results.map((manga) => (
                  <Grid key={manga.id} item>
                    <CardManga data={manga}/>
                  </Grid>
                )) : data?.results?.filter(o1 => dates.some(o2 => o1.issue_year === o2)).map((item) => (
                  <Grid key={item.id} item>
                    <CardManga data={item}/>
                  </Grid>))}
              </Grid>
            </Box>
          </Box>

          <Pagination sx={{mt: 3}} color="secondary" count={Math.ceil(data?.count / 5)} page={page}
                      onChange={handlePage}/>
        </Box>
      </>
    );
  }
};

export default MainPage;
