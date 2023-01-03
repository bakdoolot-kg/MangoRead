import CardManga from "../../components/cardManga/CardManga";
import {useGetMangaQuery} from "../../redux/services/mangaApiSlice";
import {Box, Button, Grid, Pagination, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Sort from "../../components/sort/Sort.jsx";

const MainPage = () => {
  const [page, setPage] = useState(1)
  const {data, isSuccess, isLoading, isError, error} = useGetMangaQuery({page});
  const navigate = useNavigate()

  const handlePage = (e, value) => {
    setPage(value)
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
                <Sort/>
            </Box>
            <Box sx={{ml: 3}}>
              <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 2}}>
                {data?.results.map((manga) => (
                  <Grid key={manga.id} item>
                    <CardManga data={manga}/>
                  </Grid>
                ))}
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
