import "./header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchbar/SearchBar";
import RegisterDialog from "../registerDialog/RegisterDialog";

import {
  logOut,
} from "../../redux/features/authSlice";
import { useAuth } from "../../hooks/use-auth";

import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import logo from "../../assets/Logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [signModal, showSignModal] = useState(false);
  const [typeSign, setTypeSign] = useState("");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const auth = useAuth();

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

  const handleLogOut = () => {
    showSignModal(false)
    setAnchorElUser(false)
    dispatch(logOut())
  }

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

        {auth.isAuth ? (
          <Box
            sx={{
              flexGrow: 0,
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="body1" sx={{ mr: 2 }}>
              {auth.user}
            </Typography>
            <Tooltip title="open settings">
              <IconButton
                disableRipple={true}
                sx={{ p: 0 }}
                onClick={handleOpenUserMenu}
              >
                <Avatar />
                <IoMdArrowDropdown />
              </IconButton>
            </Tooltip>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogOut}>
                <Typography variant="subtitle1">Log out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
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
        )}
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
