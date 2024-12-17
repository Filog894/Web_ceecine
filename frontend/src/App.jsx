import {Route, Routes, Navigate} from "react-router-dom";
import "./stylesheets/index.css";
import Index from "./pages";
import SearchPage from "./pages/searchPage";
import Loading from "./components/loading";
import PopErr from "./components/PopErr";
import PopSuc from "./components/PopSuc";
import OrderFilm from "./pages/order_film";
import Profile from "./pages/profile";
import FilmList from "./pages/fiml_list";
import ShowtimePage from "./pages/ShowtimePage";
import SelectSeatsPage from "./pages/SelectSeatsPage";
import CornPage from "./pages/CornPage";
import PaymentPage from "./pages/PaymentPage";
function App() {

  return (
    <>
    <Loading/>
    <PopErr/>
    <PopSuc/>
    
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/search" element={<SearchPage />} />
      {/* <Route path="/showtime" element={<ShowtimePage/>} /> */}
      <Route path="/booking/:movieId" element={<ShowtimePage />} />
      <Route path='/selectseats/:roomId' element={<SelectSeatsPage/>} />
      <Route path='/cornpage' element={<CornPage/>} />
      <Route path='/payment' element={<PaymentPage/>} />
      <Route path="/order" element={<OrderFilm />}/>
      <Route path="/profile/*" element={<Profile />}/>
      <Route path="/filmlist/*" element={<FilmList />}/>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    </>
  )
}

export default App
