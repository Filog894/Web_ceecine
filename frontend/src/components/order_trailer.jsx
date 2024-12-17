import trailer from "../assets/videos/trailer.mp4"

function OrderTrailer(){
    return(
        <section>
            <video className="w-100 h-100" autoPlay loop>
                <source src={trailer} type="video/mp4"/>
            </video>
        </section>
    )
}

export default OrderTrailer;