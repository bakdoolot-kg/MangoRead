import "@fontsource/montserrat";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";
import MainPage from "./pages/mainPage/MainPage";
import InfoPage from './pages/infoPage/InfoPage';
import Header from "./components/header/Header";

const App = () => {
  return (
    <Box>
      <Header/>

      <Container maxWidth="968" sx={{ maxWidth: "968px" }} disableGutters={true}>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/manga/:id" element={<InfoPage />}/>
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
