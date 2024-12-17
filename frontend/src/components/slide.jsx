/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import $ from "jquery"
import trailer from "../assets/videos/trailer.mp4"

function Slide(){

    var position = 0;

    useEffect(()=>{
        bind_event();
    },[])

    var bind_event = ()=>{
        $("#left_slide").on("click",()=>{
            if(position === 0){
                position-=200;
                $(".wrap_product").css("transform", `translateX(${position}%)`)
                console.log(position)
            }else if(position === -200){
                position+=100;
                $(".wrap_product").css("transform", `translateX(${position}%)`)
                console.log(position)
            }else if(position === -100){
                position+=100;
                $(".wrap_product").css("transform", `translateX(${position}%)`)
                console.log(position)
            }
            console.log(position)
        })

        $("#right_slide").on("click",()=>{
            if(position === -200){
                position+=200;
                $(".wrap_product").css("transform", `translateX(${position}%)`)
                console.log(position)

            }else if(position === 0){
                position-=100;
                $(".wrap_product").css("transform", `translateX(${position}%)`)
                console.log(position)
            }else if(position === -100){
                position-=100;
                $(".wrap_product").css("transform", `translateX(${position}%)`)
                console.log(position)
            }
            console.log(position)
        })
    }

    return(
    <section className="wrap_body" style={{"position":"relative"}}>
       <button id="left_slide" className="flex cenhor cenver border-circle p-0" style={{"backgroundColor":"transparent","left":"0","width":"45px","height":"45px","position":"absolute","zIndex":"10000"}}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="30" height="30" viewBox="0 0 24 24" stroke="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/>
                </g>
                </svg>
        </button>
        <div className="wrap_newest_product">
            <div className="newest_prod">
                <div className="wrap_product">   
                    <div className="slide">
                        <div className="product p-0" style={{"position":"relative"}}>
                            <div className="product-name" style={{"position":"absolute", "left":"10%","right":"30%"}}>
                                <h1 className="mb-10" style={{"fontSize":"60px"}}>Avartar</h1>
                                <span style={{"fontSize":"12px","textWrap":"wrap"}}>Trong phần này, khán giả sẽ được khám phá những nền văn hóa và bối cảnh mới trên hành tinh Pandora, với sự xuất hiện của các nhân vật và sinh vật mới. Đạo diễn Cameron tiết lộ rằng phim sẽ mang đến những cảm xúc sâu sắc hơn và đi vào những khía cạnh tối tăm hơn so với các phần trước.</span>
                                <div className="wrap-btn-action mt-20">
                                    <button className="btn_cus btn_film" style={{"backgroundColor":"red"}}><p>Đặt vé ngay</p></button>
                                    <button className="btn_cus btn_film" style={{"border":"1px solid white","backgroundColor":"transparent"}}><p>Xem thêm</p></button>
                                </div>
                            </div>
                           <video className="w-100 h-100" style={{"objectFit":"cover","aspectRatio":"9/16"}} controls autoPlay muted loop>
                                <source src={trailer} type="video/mp4" aria-controls="" />
                           </video>
                        </div>

                    </div>
        
        
                    <div className="slide">

                    <div className="product p-0" style={{"position":"relative"}}>
                            <div className="product-name" style={{"position":"absolute", "left":"10%","right":"30%"}}>
                                <h1 className="mb-10" style={{"fontSize":"60px"}}>Avartar</h1>
                                <span style={{"fontSize":"12px","textWrap":"wrap"}}>Trong phần này, khán giả sẽ được khám phá những nền văn hóa và bối cảnh mới trên hành tinh Pandora, với sự xuất hiện của các nhân vật và sinh vật mới. Đạo diễn Cameron tiết lộ rằng phim sẽ mang đến những cảm xúc sâu sắc hơn và đi vào những khía cạnh tối tăm hơn so với các phần trước.</span>
                                <div className="wrap-btn-action mt-20">
                                    <button className="btn_cus btn_film" style={{"backgroundColor":"red"}}><p>Đặt vé ngay</p></button>
                                    <button className="btn_cus btn_film" style={{"border":"1px solid white","backgroundColor":"transparent"}}><p>Xem thêm</p></button>
                                </div>
                            </div>
                           <video className="w-100 h-100" style={{"objectFit":"cover","aspectRatio":"9/16"}} controls muted autoPlay loop>
                                <source src={trailer} type="video/mp4" aria-controls="" />
                           </video>
                        </div>

                    </div>
                    <div className="slide ">
                    <div className="product p-0" style={{"position":"relative"}}>
                            <div className="product-name" style={{"position":"absolute", "left":"10%","right":"30%"}}>
                                <h1 className="mb-10" style={{"fontSize":"60px"}}>Avartar</h1>
                                <span style={{"fontSize":"12px","textWrap":"wrap"}}>Trong phần này, khán giả sẽ được khám phá những nền văn hóa và bối cảnh mới trên hành tinh Pandora, với sự xuất hiện của các nhân vật và sinh vật mới. Đạo diễn Cameron tiết lộ rằng phim sẽ mang đến những cảm xúc sâu sắc hơn và đi vào những khía cạnh tối tăm hơn so với các phần trước.</span>
                                <div className="wrap-btn-action mt-20">
                                    <button className="btn_cus btn_film" style={{"backgroundColor":"red"}}><p>Đặt vé ngay</p></button>
                                    <button className="btn_cus btn_film" style={{"border":"1px solid white","backgroundColor":"transparent"}}><p>Xem thêm</p></button>
                                </div>
                            </div>
                            <video className="w-100 h-100" style={{"objectFit":"cover","aspectRatio":"9/16"}} controls autoPlay muted loop>
                                <source src={trailer} type="video/mp4"/>
                           </video>
                        </div>
                    </div>
    
                </div>
                
            </div>
        </div>
        <button id="right_slide" className="flex cenhor cenver border-circle p-0" style={{"backgroundColor":"transparent","right":"0","width":"45px","height":"45px","position":"absolute","zIndex":"10000"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="30" height="30" viewBox="0 0 24 24" stroke="#ffffff" >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" fill="rgb(187, 151, 93)"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" fill="#ffffff"/>
                <g id="SVGRepo_iconCarrier" fill="#ffffff">
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" fill="#ffffff"/>
                </g>
            </svg>
        </button>
    </section>
    )
}

export default Slide;