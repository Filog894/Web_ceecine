import FilmOrder from "./film-order";

function MyOrder(){
    return(
        <section className="flex f-col w-100" style={{"transform":"translateY(-100px)","padding":"0 7%"}}>
            <h1 className="product-name" style={{"fontSize":"30px"}}>Phim chưa xem</h1>
            <div>
                <FilmOrder/>
                <FilmOrder/>
                <FilmOrder/> 
                <FilmOrder/>
            </div>

            <h1 className="product-nam e mt-50" style={{"fontSize":"30px"}}>Phim đã xem</h1>
            <div>
                <FilmOrder/>
                <FilmOrder/>
                <FilmOrder/>
                <FilmOrder/>
            </div>
        </section>
    )
}

export default MyOrder;