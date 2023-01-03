import "@fontsource/montserrat";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Box, Container} from "@mui/material";
import MainPage from "./pages/mainPage/MainPage";
import InfoPage from "./pages/infoPage/InfoPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.jsx";
import SearchPage from "./pages/searchPage/SearchPage.jsx";

const App = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Header/>
      </div>
      <Box>
        <Container
          maxWidth="990"
          sx={{maxWidth: "990px"}}
          disableGutters={true}
        >
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/manga/:id" element={<InfoPage/>}/>
            <Route path="/search/:searchTerm" element={<SearchPage />} />
          </Routes>
        </Container>

        <Footer/>
      </Box>
    </>
  );
};

export default App;
