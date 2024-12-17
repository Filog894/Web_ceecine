/* eslint-disable react-hooks/rules-of-hooks */
import ContentHomePage from "../layouts/content-home-page";
import Navbar from "../components/nav-bar"
import Footer from "../components/footer";
import AuthContent from "../layouts/auth-content";

function index() {

  return (
    <>        
    {/* header  */}
        <Navbar />
        <AuthContent/>
        <ContentHomePage />
        <Footer/>
    </>
  )
}

export default index
