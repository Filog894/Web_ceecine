import { useNavigate } from "react-router";
import $ from "jquery"
import { useEffect } from "react";

function MenuProfile(){

    useEffect(()=>{
        do_bind_event();
    },[])

    const navi = useNavigate();

    var do_bind_event   = ()=>{
        $(".menu_profile").on("click",function(){
            var $this = $(this);
            var {name} = $this.data();
            navi(`/profile/${name}`)
        })
    }

    return(
        <section>
            <div className="w-100" style={{"height":"40dvh"}}>
                <img className="w-100 h-100" style={{"objectFit":"cover"}} src="https://imgs.search.brave.com/9Ub654WB1GKvh5PKjOLNBUsu8cb_3IuqY1izfUuvSlk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltVTJOVE5p/TVRjdFkyTmxPUzAw/TVdReExUbGlOalF0/WldSa00yRXhNMkU0/TjJZMlhrRXlYa0Zx/Y0dkZVFWUm9hWEpr/VUdGeWRIbEpibWRs/YzNScGIyNVhiM0py/Wm14dmR3QEAuX1Yx/X1FMNzVfVVg1MDBf/Q1IwLDAsNTAwLDI4/MV8uanBn" />
            </div>
            <div className="flex f-col"  style={{"transform":"translateY(-120px)","position":"relative","padding":"0 5%"}}>
                <div className="flex cenhor gap20">
                    <img width="200" height="200" style={{"objectFit":"cover","borderRadius":"50%"}} src="https://icdn.24h.com.vn/upload/3-2018/images/2018-07-21/1532169492-532-10-su-that-ve-mr-bean-thang-ngo-ngo-ngan---ban-than-cua-cuu-thu-tuong-anh-mr-bean--1--1532060582-width1252height1252.jpeg"/>
                    <div className="flex f-col gap10">
                        <h1 className="product-name" style={{"fontSize":"30px"}}>
                            Nguyễn Huỳnh Minh Kha
                        </h1>
                        <p style={{"fontSize":"22px","color":"white"}}>
                            ID: 22520073
                        </p>
                    </div>
                    
                </div>
                <div className="w-100 flex f-col cenhor" style={{"padding":"3% 2%"}}>
                    <div className="flex spa-around-ver w-100">
                        <p data-name="info" className="menu_profile" style={{"fontSize":"18px","color":"white"}}>
                            Thông tin cá nhân
                        </p>
                        <p data-name="history" className="menu_profile" style={{"fontSize":"18px","color":"white"}}>
                            Lịch sử giao dịch
                        </p>
                        <p data-name="myorder" className="menu_profile" style={{"fontSize":"18px","color":"white"}}>
                            Vé của tôi
                        </p>
                        <p  className="menu_profile" style={{"fontSize":"18px","color":"white"}}>
                            Thông báo
                        </p>
                    </div>
                    <div className="line w-100 mt-10" style={{"height":"2px", "backgroundColor":"white"}}></div>
                </div>
            </div>
    </section>
        
    )
}

export default MenuProfile;