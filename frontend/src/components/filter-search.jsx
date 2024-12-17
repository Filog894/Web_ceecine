// import filter from "../assets/icon/filter.png"
// import $ from "jquery";
import { useEffect } from "react";
import search from "../assets/icon/search.png"

function FilterSearch(prop){

    useEffect(()=>{
        prop.event();
    }, [])

    return(
        <section className="center_ul" id="filter-search">  
            <div className="select_option">
                <div className="wrap_search_at_filter" style={{"display" : "none"}}>
                    <div className="center_ul" id="search_center">
                        <input className="inp_search input_data" data-name="searchKey" type="text" id="search_post_filter"/>
                        <button className="search_btn" id="search_post_btn"><img className="icon" src={search} alt=""/></button>
                    </div>
                </div>
                <div>
                    <h3 className="text_upper" style={{"color":"white"}}>Đặt vé nhanh</h3>
                </div>
                <select className="input_data text_upper" data-name="id01" >
                   <option value="">1. Chọn phim</option>
                </select>
            
                <select className="input_data text_upper" data-name="id02" >
                    <option value="">2. Chọn rạp</option>
                </select>

                <select className="input_data text_upper" data-name="id03" >
                   <option value="">3. Chọn ngày</option>
                </select>

                <select className="input_data text_upper" data-name="id03">
                   <option value="">3. Chọn suất</option>
                </select>

                    <button className="btn-save-filter btn_cus" ><p style={{"color":"red"}} className="text_upper">Đặt ngay</p></button>

            </div>             
            
        </section>
    );
}

export default FilterSearch;
