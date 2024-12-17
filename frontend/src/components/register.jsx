import logoicon from "../assets/img/icon-logo.png"
import facecol from '../assets/img/face-color.png';
import xcol from '../assets/img/x-color.png';
import ggcol from '../assets/img/google-color.png';
import { useEffect } from "react";
import $ from "jquery";

function Register(prop){

    useEffect(()=>{
        $(".close_auth").on("click", function(){
            $("#authpopup").addClass("hide");
        })
    },[])

    return(
            <div id="regis-popup" className="auth_box hide" style={{"position":"absolute"}}>
                <button className="close_auth" style={{"backgroundColor":"transparent","position":"absolute","top":"1%","right":"1%"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 18" fill="none">
                    <g opacity="0.7">
                    <path d="M14.1668 3L2.8335 15M14.1668 15L2.8335 3" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                    </svg>
                </button>

                <img width="150px" src={logoicon}/>
                <h3 className="header-auth mb-30">Đăng ký tài khoản</h3>
                <div className="w-100 flex f-col mb-30">
                    <label className=" lable_auth">Họ và tên</label>
                    <input className="inp_cus inp_auth" placeholder="Nhập họ và tên"/>
                </div>
                <div className="w-100 flex f-col mb-30">
                    <label className=" lable_auth">Email</label>
                    <input className="inp_cus inp_auth" placeholder="Nhập email"/>
                </div>
                <div className="w-100 flex f-col mb-30">
                    <label className=" lable_auth">Số điện thoại</label>
                    <input className="inp_cus inp_auth" placeholder="Nhập số điện thoại"/>
                </div>
                <div className="w-100 flex mb-30 gap20">
                    <div className="flex cenhor">
                        <input className="m-0 inp_auth" type="radio"/>
                        <label className="">Nam</label>
                    </div>
                    <div className="flex cenhor">
                        <input className="m-0 inp_auth" type="radio"/>
                        <label className="">Nữ</label>
                    </div>
                </div>
                <div className="w-100 flex f-col mb-30">
                    <label className=" lable_auth">Ngày sinh</label>
                    <input className="inp_cus inp_auth" type="date"/>
                </div>
                <div className="w-100 flex f-col mb-30">
                    <label className=" lable_auth">Nhập mật khẩu</label>
                    <input className="inp_cus inp_auth" type="password" placeholder="Nhập mật khẩu"/>
                </div>
                <div className="w-100 flex f-col mb-10">
                    <label className=" lable_auth">Nhập lại mật khẩu</label>
                    <input className="inp_cus inp_auth" type="password" placeholder="Nhập lại mật khẩu"/>
                </div>
                <div className="w-100 flex cenhor cenver gap10">
                    <input className=" inp_auth" type="checkbox" placeholder="Nhập lại mật khẩu"/>
                    <label className=" lable_auth">Tôi đồng ý với <a className="nav-auth" style={{"color":"#3D70B7"}}>Điều khoản dịch vụ</a> và <a className="nav-auth" style={{"color":"#3D70B7"}}>Chính sách bảo mật</a> của Ceecine</label>
                </div>
                <div className="w-100 flex f-col">
                    <button className="w-100 btn_cus auth_btn" ><p className="">Đăng ký</p></button>
                </div>
                
                
                <div className="w-100 flex cenhor cenver text-center mt-10 gap10">
                    <div className="line"></div><span><b>hoặc</b></span><div className="line"></div>
                </div>
                <div className=" flex f-col text-center mt-10">
                    <span>Đăng nhập bằng</span>
                    <div className="flex gap20 mt-10">
                        <img src={facecol}/>
                        <img src={xcol}/>
                        <img src={ggcol}/>
                    </div>
                </div>
                <div className="line flex f-col text-center mt-10 w-100">
                </div> 
                <div className="w-100 flex cenhor cenver text-center mt-30">
                    <p>Bạn đã có tài khoản? <a onClick={prop.changetoLogin} className="nav-auth" style={{"color":"#3D70B7"}}>Đăng nhập ngay</a></p>
                </div>
            </div>
    )
}

export default Register;