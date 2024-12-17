// import { useEffect } from "react";
import Login from "../components/login";
import Register from "../components/register";
import $ from "jquery"

function AuthContent(){


    return(
        <section id="authpopup" className="wrap-auth-popup flex starthor cenver hide">

        <Login changetoRegis={
            ()=>{
                $("#regis-popup").removeClass("hide");
                $("#login-popup").addClass("hide")
            }
        }/>
        <Register changetoLogin={()=>{
            $("#login-popup").removeClass("hide");
            $("#regis-popup").addClass("hide")
        }}/>

        </section>
    )
    
}

export default AuthContent;