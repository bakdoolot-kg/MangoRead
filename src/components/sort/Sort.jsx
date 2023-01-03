import React, {useRef, useState} from 'react';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import {MdKeyboardArrowRight} from "react-icons/md"

const deepSort = (
  <Paper sx={{width: "300px", height: "75vh"}}></Paper>
)
const Sort = () => {
  const [type, setType] = useState({type: "",})
  const [deepSort, setDeepSort] = useState(false)
  const containerRef = useRef(null)

  const handleDeepSort = () => {
    setDeepSort(true)
  }

  return (
    <Paper sx={{width: "300px", height: "75vh", px: 2}}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', pt: 4, mb: 3 }}>
        <Typography variant="body1">Жанры</Typography>
        <Button endIcon={<MdKeyboardArrowRight/>} variant="text" sx={{ color: "#878787", fontSize: "16px" }} >все</Button>
      </Box>


      <Typography>Тип</Typography>
      <FormGroup>
        <MenuList disablePadding>
          <MenuItem disableGutters>
            <FormControlLabel control={<Checkbox color="secondary"/>} label="Манга"/>
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
    </Paper>
  );
};

export default Sort;
