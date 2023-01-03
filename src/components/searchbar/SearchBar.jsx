import { styled, alpha, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyleSearch = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  transition: "all 0.3s ease-in-out",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyleIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  width: "10px",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease-in-out",
}));

const StyleInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "16px",
  color: "inherit",
  width: "95%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    // transition: theme.transitions.create("width"),
    transition: "all 0.3s ease-in-out",
    width: "100%",
    border: "2px solid #878787",
    borderRadius: theme.shape.borderRadius,
    "&:focus": {
      border: "2px solid #AD02E0",
    },
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //     border: "2px solid #AD02E0",
    //   },
    // },
  },
}));

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [stateInput, setStateInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <StyleSearch>
        <StyleIconWrapper sx={{ display: stateInput ? "none" : "flex" }}>
          <Search />
        </StyleIconWrapper>
        <StyleInputBase
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Placeholder"
          inputProps={{ "aria-label": "search" }}
          onFocus={() => setStateInput(true)}
          onBlur={() => setStateInput(false)}
        />
      </StyleSearch>
    </form>
  );
};

export default SearchBar;
