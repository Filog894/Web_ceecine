import Ticket from "./ticket";

function OrderHistory(){
    return(
        <section className="gap20 flex f-col" style={{"transform":"translateY(-100px)","padding":"0 7%"}}>
            <div className="flex cenhor cenver w-100 gap20 mb-30 endver">
                <div className="flex f-col gap10 " style={{"width":"30%"}}>
                    <input style={{"padding":"3% 10%","border":"1px solid transparent","borderRadius":"7px"}} type="date" className="w-100"/>
                </div>
                <div className="flex f-col gap10" style={{"width":"30%"}}>
                    <input style={{"padding":"3%","border":"1px solid transparent","borderRadius":"30px"}} type="text" className="w-100"/>
                </div>
            </div>
            <div className="flex f-col cenhor w-100 mb-30" style={{"border":"1px solid white","borderRadius":"5px"}}>
                <div className="flex w-100" style={{"border":"1px solid white","borderRadius":"5px","fontSize":"14px","color":"white","backgroundColor":"#ffffff3d", "padding":"1%"}}>
                    <p style={{"fontSize":"20px"}}>11/11/2024</p>
                </div>
                <div className="flex f-col gap20 " style={{"padding":"2%"}}>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                </div>
            </div>

            <div className="flex f-col cenhor w-100 mb-30" style={{"border":"1px solid white","borderRadius":"5px"}}>
                <div className="flex w-100" style={{"border":"1px solid white","borderRadius":"5px","fontSize":"14px","color":"white","backgroundColor":"#ffffff3d", "padding":"1%"}}>
                    <p style={{"fontSize":"20px"}}>11/11/2024</p>
                </div>
                <div className="flex f-col gap20 " style={{"padding":"2%"}}>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                </div>
            </div>

            <div className="flex f-col cenhor w-100 mb-30" style={{"border":"1px solid white","borderRadius":"5px"}}>
                <div className="flex w-100" style={{"border":"1px solid white","borderRadius":"5px","fontSize":"14px","color":"white","backgroundColor":"#ffffff3d", "padding":"1%"}}>
                    <p style={{"fontSize":"20px"}}>11/11/2024</p>
                </div>
                <div className="flex f-col gap20 " style={{"padding":"2%"}}>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                </div>
            </div>
        </section>
    )
}

export default OrderHistory;