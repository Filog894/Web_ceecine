import OrderFilmComment from "./order_film_comment";
import OrderFilmDescript from "./order_film_description";
import OrderSchedule from "./order_schedule";
import OrderTrailer from "./order_trailer";

function OrderPreview(){
    return(
        <>
            <OrderTrailer/>
            <OrderFilmDescript/>
            <OrderSchedule/>
            <OrderFilmComment/>
        </>
    )
}

export default OrderPreview;