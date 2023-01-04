import React, {useRef, useState} from 'react';
import moment from "moment";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  MenuList,
  Paper,
  Radio, RadioGroup,
  TextField,
  Typography
} from "@mui/material";
import {MdKeyboardArrowRight} from "react-icons/md"
import {useGetMangaGenreQuery} from "../../redux/services/mangaApiSlice.js";

const Sort = ({onApply, dateFrom, dateTo, setDateFrom, setDateTo, onReset, sortData, handleShowSort}) => {
  const [deepSortShow, setDeepSortShow] = useState(false)
  const containerRef = useRef(null)
  const { data: genres } = useGetMangaGenreQuery()

  const handleDeepSort = () => {
    setDeepSortShow(true)
  }

  const closeDeepSort = () => {
    setDeepSortShow(false)
  }
  const handleCheckbox = (e) => {
  }

  const deepSort = (
    <Paper sx={{width: "300px", height: "75vh", overflowY: "auto"}}>
      <Button onClick={closeDeepSort}>Назад</Button>

      <FormControl>
        <RadioGroup
          sx={{ px: 2 }}
          value={sortData}
          onChange={handleShowSort}
        >
          {
            genres?.map((item) => (
              <FormControlLabel sx={{ fontSize: "14px" }} key={item.id} value={item?.title} control={<Radio color="secondary"/>} label={item?.title}/>
            ))
          }
        </RadioGroup>
      </FormControl>


      <Box sx={{display: "flex", justifyContent: "space-between", mb: 1}}>
        <Button variant="contained" fullWidth sx={{mr: 1}} onClick={onReset}>Сбросить</Button>
        <Button variant="contained" fullWidth onClick={onApply}>Применить</Button>
      </Box>
    </Paper>
  )

  return (
    <Box ref={containerRef}>
      <Paper sx={{
        width: "300px",
        height: "75vh",
        px: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <Box>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: 'space-between', pt: 4, mb: 3}}>
            <Typography variant="body1">Жанры</Typography>
            <Button endIcon={<MdKeyboardArrowRight/>} variant="text" sx={{color: "#878787", fontSize: "16px"}}
                    onClick={handleDeepSort}>все</Button>
          </Box>


          <Typography>Тип</Typography>
          <FormGroup>
            <MenuList disablePadding>
              <MenuItem disableGutters>
                <FormControlLabel control={<Checkbox color="secondary" onChange={handleCheckbox}/>} label="Манга"/>
              </MenuItem>
              <MenuItem disableGutters>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="Манхва"/>
              </MenuItem>
              <MenuItem disableGutters>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="Комиксы"/>
              </MenuItem>
              <MenuItem disableGutters>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="Маньхуа"/>
              </MenuItem>
            </MenuList>
          </FormGroup>

          <Box sx={{mt: 2, display: "flex", alignItems: "center"}}>
            <TextField
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              color="secondary"
              size="small"
              sx={{mr: 1}}
              placeholder="От 0"
            />
            -
            <TextField
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              color="secondary"
              size="small"
              sx={{ml: 1}}
              placeholder={`До ${moment().format("YYYY")}`}
            />
          </Box>
        </Box>

        <Box sx={{display: "flex", justifyContent: "space-between", mb: 1}}>
          <Button variant="contained" fullWidth sx={{mr: 1}} onClick={onReset}>Сбросить</Button>
          <Button variant="contained" fullWidth onClick={onApply}>Применить</Button>
        </Box>
      </Paper>
      <Collapse
        orientation="horizontal"
        direction='right'
        in={deepSortShow}
        container={containerRef.current}
        sx={{position: "absolute", top: 105, width: "300px", height: "75vh"}}
      >
        {deepSort}
      </Collapse>
    </Box>
  );
};

export default Sort;
