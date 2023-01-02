import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/features/userSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Tabs,
  Tab,
  DialogContent,
  Box,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Avatar,
} from "@mui/material";
import PlaceholderImage from "../../assets/Ellipse.png";
import { a11yProps } from "../../hooks/setTabProps";
import RegisterForm from "../registerForm/RegisterForm";
import LoginForm from "../loginForm/LoginForm";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const RegisterDialog = ({ open, handleClickOpen, handleClose, type }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    if (type === "register") {
      setValue(1);
    } else if (type === "login") {
      setValue(0);
    }
    setValue(newValue);
  };


  return (
    <Dialog open={open} onClose={handleClose} sx={{ width: "100%" }}>
      <DialogTitle>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Вход" {...a11yProps(0)} />
            <Tab label="Регистрация" {...a11yProps(1)} />
          </Tabs>
        </DialogActions>
      </DialogTitle>

      <DialogContent sx={{ maxWidth: "500px" }}>
        {/* {value === 1 && (
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar src={image} sx={{ width: 150, height: 150 }}/>
            <Button variant="text" component="label" sx={{ color: "#000", mt: 1.5 }}>
              Добавить фото
              <input
                type="file"
                {...register("image_file", { required: true })}
                onChange={(e) => handlerImageUpload(e)}
                hidden
                accept="image/*"
              />
            </Button>
          </Box>
        )} */}
        {/* ==== ЛОГИН ==== */}
        <TabPanel value={value} index={0}>
          <LoginForm value={value} onClose={handleClose}/>
        </TabPanel>
        {/* ==== РЕГИСТРАЦИЯ ==== */}
        <TabPanel value={value} index={1}>
          <RegisterForm value={value} />
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
