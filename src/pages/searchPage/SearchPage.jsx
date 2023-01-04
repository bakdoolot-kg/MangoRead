import React, {useState} from 'react';
import {Box, Button, Grid, Pagination, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useGetMangaBySearchQuery} from "../../redux/services/mangaApiSlice.js";
import CardManga from "../../components/cardManga/CardManga.jsx";

const SearchPage = () => {
  const [page, setPage] = useState(1)
  const {searchTerm} = useParams()
  const {data, isLoading, isError, isSuccess} = useGetMangaBySearchQuery({page: page, searchTerm: searchTerm})

  const handlePage = (e, value) => {
    setPage(value)
  }

  if (isLoading) {
    return <Typography>Загрузка...</Typography>
  } else if (isError) {
    return (<Box>
      <Typography>Something went wrong...</Typography>
      <Button variant="text" onClick={() => navigate("/")}>Back to main page</Button>
    </Box>)
  } else if (isSuccess) {
    return (
      <Box sx={{height: "85vh", display: "flex", flexDirection: "column"}}>
        <div>
          <Typography sx={{mt: 2}}>{ data?.results.length > 0 ? `Результаты поиска "${searchTerm}"` : `Ничего не найдено по запросу "${searchTerm}"`}</Typography>
          <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 2}} sx={{mt: 2, mb: 4}}>
            {data?.results.map((item) => {
              return (
                <Grid item>
                  <CardManga data={item}/>
                </Grid>
              )
            })}
          </Grid>
        </div>

        { data?.results.length > 0 &&
          <Pagination
            color="secondary"
            count={Math.ceil(data?.count / 5)}
            page={page}
            onChange={handlePage}
            sx={{ alignSelf: "center" }}
          />
        }
      </Box>
    );
  }
};

export default SearchPage;
