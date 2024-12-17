import ContentFilmList from "../layouts/content-film-list";
import Navbar from "../components/nav-bar";
import Footer from "../components/footer";

function FilmList(){
    return(
        <>
            <Navbar/>
            <ContentFilmList/>
            <Footer/>
        </>
       
    )
}

export default FilmList;