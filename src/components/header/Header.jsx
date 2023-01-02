import "./header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import SearchBar from "../searchbar/SearchBar";
import logo from "../../assets/Logo.svg";
import RegisterDialog from "../registerDialog/RegisterDialog";
import { useSelector } from "react-redux";
import {
  selectCurrentAccess,
  selectCurrentUser,
} from "../../redux/features/authSlice";

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [signModal, showSignModal] = useState(false);
  const [typeSign, setTypeSign] = useState("");
  const user = useSelector(selectCurrentUser);
  const access = useSelector(selectCurrentAccess);

  const handleOpenModal = (type) => {
    if (type === "register") {
      setTypeSign("register");
    } else {
      setTypeSign("login");
    }
    showSignModal(true);
  };

  const handleCloseModal = () => {
    showSignModal(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Box
          sx={{
            width: "24%",
            display: "flex",
            alignItems: "center",
            mt: 1,
            pr: 1,
          }}
          className="nav__logo-container"
        >
          <NavLink to="/" className="nav__logo">
            <img src={logo} alt="logo" width="83px" />
          </NavLink>

          <Box>
            <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 500 }}>
              MangoRead
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              Читай мангу с нами
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "30%" }}>
          <SearchBar />
        </Box>

        <Box sx={{ flexGrow: 0, width: "30%" }}>
          <Button
            onClick={() => handleOpenModal("login")}
            variant="outlined"
            sx={{ mr: 1.5, px: 4, py: 0.7 }}
          >
            Войти
          </Button>
          <Button
            onClick={() => handleOpenModal("register")}
            variant="contained"
            sx={{ px: 3 }}
          >
            Регистрация
          </Button>
        </Box>
      </nav>

      {
        <Box sx={{ maxWidth: "400px" }}>
          <RegisterDialog
            open={signModal}
            handleClose={handleCloseModal}
            type={typeSign}
          />
        </Box>
      }
    </header>
  );
};

export default Header;
