import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SearchBar from "../searchbar/SearchBar";
import logo from "../../assets/Logo.svg";

const Header = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Box
          sx={{ display: "flex", alignItems: "center", mt: 1, pr: 1 }}
          className="nav__logo-container"
        >
          <NavLink to="/" className="nav__logo">
            <img src={logo} alt="logo" width="83px" />
          </NavLink>

          <Box sx={{ mt: 1, mr: 1, pl: 1 }}>
            <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 500 }}>
              MangoRead
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              Читай мангу с нами
            </Typography>
          </Box>
        </Box>

        <Box>
          <SearchBar />
        </Box>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}></div>
      </nav>
    </header>
  );
};

export default Header;
