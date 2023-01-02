import {Avatar, Box, Button, Divider, Pagination, Typography} from "@mui/material";
import {BsArrowLeftShort} from "react-icons/bs";
import {useNavigate, useParams} from "react-router-dom";
import {
  useGetMangaCommentsQuery,
  useGetMangaDetailsQuery,
  useGetMangaGenreQuery
} from "../../redux/services/mangaApiSlice.js";
import CommentDetails from "../../components/commentDetail/CommentDetails.jsx";
import {useState} from "react";
import usePagination from "../../hooks/usePagination.js";

const InfoPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data, isLoading, isError, isSuccess} = useGetMangaDetailsQuery(id)
  const {data: genres, isLoading: isLoadingGenre, isError: isErrorGenre} = useGetMangaGenreQuery()
  const {data: comments, isLoading: isLoadingCom, isError: isErrorCom} = useGetMangaCommentsQuery(data?.id)

  let [page, setPage] = useState(1)

  const count = Math.ceil(comments?.length ? comments.length / 3 : 3)
  const _Data = usePagination(comments, 3)

  const handleChange = (e, p) => {
    setPage(p)
    _Data.jump(p)
  }

  if (isLoading) {
    return <Typography>Loading details...</Typography>
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
      <Box>
        <Button
          variant="text"
          color="inherit"
          startIcon={<BsArrowLeftShort/>}
          onClick={() => navigate(-1)}
          sx={{my: 2}}
        >
          Назад
        </Button>

        <Box>

          <Box sx={{mb: 2, display: "flex"}}>
            <Avatar src={data.image} variant="rounded" sx={{width: 300, height: 300}}/>
            <Box sx={{ml: 3}}>
              <Typography variant="h3" sx={{fontWeight: 500}}>{data.ru_name}</Typography>
              <Typography sx={{mt: 4}} variant="body1">Информация:</Typography>
              <Typography sx={{mt: 2}}><b>Тип:</b> {data.type}</Typography>
              <Typography sx={{mt: 2}}><b>Год:</b> {data.issue_year}</Typography>
              <Typography
                sx={{mt: 2}}><b>Жанр:</b> {genres?.map((item) => data.genre.includes(item.id) && item.title + ",")}
              </Typography>
            </Box>
          </Box>
          <Divider/>
          <Box sx={{mt: 3, mb: 3}}>
            <Typography variant="h3" sx={{mb: 1, fontWeight: 500}}>Синопсис</Typography>
            <Typography>{data.description.length ? data.description : "Описание еще не добавлено"}</Typography>
          </Box>
          <Divider/>
          <Box sx={{mt: 3, display: "flex", flexDirection: "column"}}>
            <Typography variant="h3" sx={{fontWeight: 500, mb: 3}}>Топ рецензий</Typography>
            {comments ? _Data.currentData().map(item => <CommentDetails data={item}/>) : "Рецензий пока нету"}
            <Pagination  sx={{ alignSelf: "center", mt: 2 }} color="secondary" count={count} page={page} onChange={handleChange}/>
          </Box>
        </Box>
      </Box>
    )

  }
}

export default InfoPage
