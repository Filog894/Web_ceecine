/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import $ from "jquery";
import CryptoJS from 'crypto-js';
import moment from 'moment';

export default class comm{

    scrool_to_top       =()=>{
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }

    scroll_to_el= (el)=>{
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 500);    
    }

    do_hide_loader      = () =>{
        $(".wrap-loading").hide()
    }
    
    do_show_loader      = ()=>{
        $(".wrap-loading").show()
    }

    do_hide_pagi        = ()=>{
        $(".wrap-pagination").hide()
    }
    
    do_show_pagi        = ()=>{
        $(".wrap-pagination").show()
    }

    do_grabb_scroll = (scroll, Grap_func, noGrap_func) =>{

        let isDown = false; // Xác định có đang giữ chuột hay không
        let startX; // Lưu trữ vị trí ban đầu của con trỏ chuột
        let scrollLeft; // Lưu trữ vị trí cuộn ban đầu của container
        $(scroll).mousedown((e) => {
            isDown = true;
            $(scroll).addClass("active"); // Sửa lại để thêm class "active"
            // Lấy tọa độ bắt đầu của chuột
            startX = e.pageX - $(scroll).offset().left; // Lấy vị trí chính xác của phần tử
            // Lưu vị trí cuộn hiện tại
            scrollLeft = $(scroll).scrollLeft(); // Lấy giá trị scrollLeft
            if(Grap_func !== undefined){
                Grap_func();
            }
        });
    
        $(scroll).mouseleave(() => {
            
            isDown = false; // Nếu chuột ra khỏi vùng cuộn thì dừng kéo
            $(scroll).removeClass("active"); // Sửa lại để xóa class "active"
            if(noGrap_func !== undefined){
                noGrap_func();
            }
        });
    
        $(scroll).mouseup(() => {
            
            isDown = false; // Khi thả chuột thì dừng kéo
            $(scroll).removeClass("active"); // Sửa lại để xóa class "active"
            if(noGrap_func !== undefined){
                noGrap_func();
            }
        });
    
        $(scroll).mousemove((e) => {
            if (!isDown) return; // Nếu không giữ chuột thì không cuộn
            e.preventDefault(); // Ngăn chặn hành động mặc định
            const x = e.pageX - $(scroll).offset().left; // Lấy vị trí hiện tại của con trỏ chuột
            const walkX = (x - startX); // Tính toán khoảng cách kéo theo hướng ngang
            $(scroll).scrollLeft(scrollLeft - walkX); // Cập nhật vị trí cuộn ngang
        });
    };
    

    do_init_user_data = ()=>{
        return new Promise((resolve, reject)=>{
            resolve({
                "name"      : localStorage.getItem("%UN%"),
                "post"      : "0",
                "phone"     : localStorage.getItem("%UP%"),
                "img"       : this.URL_BE_BASE_IMG + localStorage.getItem("%UAVA%")
            })   
        })
    }

    UID = localStorage.getItem("%UI%");

    UNAME = localStorage.getItem("%UN%");

    UIMG =  localStorage.getItem("%UAVA%");

    UPHONE = localStorage.getItem("%UP%");

    check_login       = (para)=>{
        var {suc, err}             = para
        if(suc === undefined)
            suc = null;
        if(err === undefined)
            err = null;
        $.ajax({
            url    : this.URL_BE_BASE + this.URL_BE_ISLOGIN,
            crossDomain:true,
            type   : "POST",
            timeout: 10000,
            headers :{
                tokenizer : localStorage.getItem("%UT%") ? localStorage.getItem("%UT%") : ""
            },
            data   : {
                ID      : localStorage.getItem("%UI%") ? localStorage.getItem("%UI%") : "",
                name    : localStorage.getItem("%UN%") ? localStorage.getItem("%UN%") : "",
            },
            success: (d)=>{
                suc(this.check_status_ajax(d));
            },
            error  : (e)=>{
                localStorage.clear();
                console.log(e);
                err();
            },
        })
    }

    do_logout         = ()=>{
        $.ajax({
            url    : this.URL_BE_BASE + this.URL_BE_LOGOUT,
            crossDomain:true,
            type   : "POST",
            timeout: 10000,
            headers :{
                tokenizer : localStorage.getItem("%UT%")
            },
            data   : {
                ID      : localStorage.getItem("%UI%"),
            },
            success: (d)=>{
                localStorage.clear();
            },
            error  : (e)=>{
                console.log(e);
                new comm().PopUpErr("Lỗi!");
            },
        })
    }

    Hash = (p, e)=>{
        const hash = CryptoJS.SHA256(p+e).toString();
        return hash;
    }

    do_save_user_data = async (u)=>{
        if(u.userdata.ID){
            localStorage.setItem("%UI%",u.userdata.ID);
        }
        if(u.userdata.name){
            localStorage.setItem("%UN%",u.userdata.name);
        }
        if(u.userdata.phone){
            localStorage.setItem("%UP%",u.userdata.phone);
        }
        if(u.tokenizer){
            localStorage.setItem("%UT%",u.tokenizer);
        }
        if(u.userdata.img){
            localStorage.setItem("%UAVA%",u.userdata.img);
        }
    }

    bind_data_inp      = (el, value)=>{
        $(el).val(value);
    }

    bind_data_el      = (el, value)=>{
        $(el).text(value);
    }

    bind_data_img      = (el, value)=>{
        $(el).attr("src",value);
    }

    do_error_input           = (elinp) =>{
        $(elinp).css("border-color" , "red");
    }

    do_remove_error_input           = (elinp) =>{
        $(elinp).css("border-color" , "black");
    }

    do_check_email_format    = (email)=>{
        if(email.includes('.') && email.includes('@') ){
            return true;
        }
        return false;
    }

    ajax               = (param)=>{
        var {url, type, data, suc, err}  = param;
        if(url){
            if(!type){
                type = "POST"
            }
            $.ajax({
                url    : this.URL_BE_BASE + url,
                crossDomain: true,
                type   : type,
                data   : data,
                timeout: 10000,
                success: (d)=>{
                    suc(d);
                },
                error  : (e)=>{
                    err(e);
                },
            })
        }else{
            console.log("=== CANNOT CALL BE WITH NULL URL ===")
        }
    }

    ajax_secu_header              = (param)=>{
        var {url, type, data, suc, err}  = param;
        if(url){
            if(!type){
                type = "POST"
            }
            $.ajax({
                url    : this.URL_BE_BASE + url,
                crossDomain: true,
                type   : type,
                headers : {
                    tokenizer : localStorage.getItem("%UT%")
                },
                data   : data ? data : null,
                timeout: 10000,
                success: (d)=>{
                    suc(d);
                },
                error  : (e)=>{
                    err(e);
                },
            })
        }else{
            console.log("=== CANNOT CALL BE WITH NULL URL ===")
        }
    }

    check_status_ajax           = (res)=>{
        console.log(res)
        if(res.status){
            if(res.status === this.CODE_OK){
                return true;
            }else if(res.status === this.CODE_DATA_ERR){
                return false;
            }else if(res.status === this.CODE_NOT_AUTH){
                return false;
            }else if(res.status === this.CODE_ERR_NOT_EXT){
                return false;
            }
        }else{
            return false;
        }
    }

    async convertToBase64(file){
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };
      

    get_data_input              = async (option)=>{
        var {div, file}    = option;
        if(!div){
            return null;
        }
        
        var $this               = $(div);
        var child               = $this.find(".input_data");
        if(!child){
            return null;
        }
        var data = {
            data : {}
        };

        for(var i of child){
            var $i      = $(i);
            var {name}  = $i.data();
            var val     = $i.val();
            if(val === null || val.length <= 0 || val === undefined){
                continue;
            }
            data.data[name]  = val;
        }

        if(file){
           data.data.files = [];
           var $file = $(file.inp);
           if(!file.isMulti){
                const file_val = $file.prop('files')[0];
                if(file_val){
                    if(file_val.size <= this.VAR_FILE_SIZE_LIM){
                        await this.convertToBase64(file_val)
                        .then((d)=>{
                            data.data.files.push({
                                name : file_val.name,
                                size : file_val.size,
                                data : d
                            });
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
                    }else{
                        delete data.data.files;
                        new comm().PopUpErr("Kích thước file phải nhỏ hơn hoặc bằng 2MB !")
                        data.err = true;
                    }
                }
           }else{
                const file_val = $file[0].files;
                const filesArray = Array.from(file_val);
                if(filesArray.length !== 0){
                    for(var f of filesArray){
                        if(f.size <= this.VAR_FILE_SIZE_LIM){
                            await this.convertToBase64(f)
                            .then((d)=>{
                                data.data.files.push({
                                    name : f.name,
                                    size : f.size,
                                    data : d
                                });
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                        }else{
                            new comm().PopUpErr("Kích thước file phải nhỏ hơn hoặc bằng 2MB !")
                            delete data.data.files;
                            data.err = true;
                            break;
                        }
                    }
                }
           }
        }

        return data;
    }

    PopUpSuc  = (content) => {
        $(".success_popup_noti").removeClass("hide");
        setTimeout(()=>{
            $(".success_popup_noti").css("opacity", "1")
        }, 100);
        $(".success__title").text(content);
        setTimeout(()=>{
            $(".success_popup_noti").css("opacity", "0")
        }, 5000);
        setTimeout(()=>{
            $(".success_popup_noti").addClass("hide");
        }, 6000);
    }

    PopUpErr  = (content) => {
        $(".error_popup_noti").removeClass("hide");
        setTimeout(()=>{
            $(".error_popup_noti").css("opacity", "1")
        }, 100);
        $(".error__title").text(content);
        setTimeout(()=>{
            $(".error_popup_noti").css("opacity", "0")
        }, 5000);
        setTimeout(()=>{
            $(".error_popup_noti").addClass("hide");
        }, 6000);
    }

    DateTimeDisplay = (dateString) => {
        const formattedDate = moment(dateString).format('HH:mm DD-MM-YYYY');
        return formattedDate;
    };

    AmountFormat    = (amount)=>{
        var a = amount*1;
        var af = a.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        var aspli = af.split(".");
        if(aspli.length <= 3){            
            return  af.replace("₫", "") + "VNĐ";
        }

        if(aspli.length >= 4){
            return aspli[0] + " Tỷ VNĐ";
        }

    }

    SaveLocal       = (key, value)=>{
        localStorage.setItem(key, value);
    }

    GetLocal        = (key)=>{
        return  localStorage.setItem(key);
    }

    RemoveLocal     = (key)=>{
        localStorage.removeItem()
    }

    VAR_FILE_SIZE_LIM  = 2097152;

    // base
    URL_BE_BASE_IMG    = import.meta.env.VITE_BASE_URL_IMG;
    URL_BE_BASE        = import.meta.env.VITE_BASE_URL;

    // auth
    URL_BE_REGISTER    = "account/register";
    URL_BE_LOGIN       = "account/login";
    URL_BE_ISLOGIN     = "account/islogin";
    URL_BE_LOGOUT      = "account/logout";

    //user
    URL_BE_USER        = "accSetting";

    // post
    URL_BE_POST        = "postSetting";
    URL_BE_POST_PUBL   = "postSetting/postPubl";

    //location
    URL_BE_LOCATION    = "location";

    //service
    SV_MOD             = "SvMod";
    SV_NEW             = "SvNew";
    SV_GET             = "SvGet";
    SV_GET_LST         = "SvGetLst";
    SV_PAGI            = "SvPage";
    SV_DEL             = "SvDel";
    SV_GET_DET         = "SvGetDet";

    //location typ
    TYP_PROV           = 1;
    TYP_DIST           = 2;
    TYP_WARD           = 3;

    CODE_OK            = 2000;
    CODE_DATA_ERR      = 2001;
    CODE_SERVER_ERR    = 2002;
    CODE_NOT_AUTH      = 2003;
    CODE_ERR_NOT_EXT   = 2004;
}
    