import {Route, Routes} from "react-router-dom";
import ContentTransacPage from "../layouts/content-transacHistory_page";
import ContentMyOrderPage from "../layouts/content-myorder-page";
import ContentProfilePage from "../layouts/content_profile_page";
import Navbar from "../components/nav-bar"
import Footer from "../components/footer";

function Profile(){
    return(
        <>
        <Navbar/>
            <Routes>
                <Route path="/myorder" element={<ContentMyOrderPage />}/>
                <Route path="/history" element={<ContentTransacPage />}/>
                <Route path="/info" element={<ContentProfilePage />}/>
            </Routes>
        <Footer/>
        </>
    )
}

export default Profile;