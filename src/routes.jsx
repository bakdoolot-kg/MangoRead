import MainPage from "./pages/mainPage/MainPage";
import InfoPage from "./pages/infoPage/InfoPage";

export const routes = [
  {
    path: '/',
    name: 'Main',
    element: <MainPage />
  },
  {
    path: 'manga/:id',
    name: "Info page",
    element: <InfoPage />
  }
]