import tiket from "../assets/img/ticket.png"
import popcorn from "../assets/img/popcorn.png"
import logo from "../assets/img/logo.png";

function Ticket(){
    return(
        <div style={{"position":"relative"}}>
            <img src={popcorn} style={{"position":"absolute","top":"16%","left":"5%"}}/>
            <img src={logo} width="100" style={{"position":"absolute","bottom":"25%","left":"4%"}}/>
            <div className="flex f-col" style={{"position":"absolute","top":"20%","left":"25%"}}>
                <h1>Combo CeeCine vui vẻ</h1>
                <div className="flex f-col gap10" style={{"padding":"3%"}}>
                    <div className="flex cenhor gap10">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 33 33" fill="none">
                            <path d="M16.5001 29.7C16.5001 29.7 26.8306 20.5174 26.8306 13.6304C26.8306 7.92508 22.2055 3.29999 16.5001 3.29999C10.7948 3.29999 6.16968 7.92508 6.16968 13.6304C6.16968 20.5174 16.5001 29.7 16.5001 29.7Z" stroke="black" strokeWidth="2"/>
                            <path d="M19.8005 13.2002C19.8005 15.0227 18.3231 16.5002 16.5005 16.5002C14.678 16.5002 13.2005 15.0227 13.2005 13.2002C13.2005 11.3777 14.678 9.9002 16.5005 9.9002C18.3231 9.9002 19.8005 11.3777 19.8005 13.2002Z" stroke="black" strokeWidth="2"/>
                        </svg>
                        <p style={{"fontSize":"16px","color":"black"}}><b>CGV Vincom Thủ Đức</b></p>
                    </div>
                    <div className="flex cenhor gap10">
                        <img src={popcorn} width="25" />
                        <p className="w-100" style={{"textWrap":"nowrap","fontSize":"16px","color":"black"}}><b>2 nước Pepsi + 1 bắp rang bơ</b></p>
                    </div>
                    <div className="flex cenhor gap10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 21 21" fill="none">
                            <mask id="mask0_13_2158"  maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                            <path d="M0.129883 0.434753H20.1299V20.405H0.129883V0.434753Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_13_2158)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1299 2.25023C5.61115 2.25023 1.94806 5.90786 1.94806 10.4199C1.94806 14.9319 5.61115 18.5895 10.1299 18.5895C14.6486 18.5895 18.3117 14.9319 18.3117 10.4199C18.3117 5.90786 14.6486 2.25023 10.1299 2.25023ZM0.129883 10.4199C0.129883 4.90523 4.60702 0.434753 10.1299 0.434753C15.6527 0.434753 20.1299 4.90523 20.1299 10.4199C20.1299 15.9345 15.6527 20.405 10.1299 20.405C4.60702 20.405 0.129883 15.9345 0.129883 10.4199Z" fill="black"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.85742 8.15223C6.85742 6.64811 8.07867 5.42902 9.58469 5.42902H12.4029V7.24449H9.58469C9.0828 7.24449 8.6756 7.65075 8.6756 8.15223V8.6061C8.6756 9.10759 9.0828 9.51384 9.58469 9.51384H10.6757C12.1818 9.51384 13.403 10.7329 13.403 12.2371V12.6909C13.403 14.195 12.1818 15.4141 10.6757 15.4141H7.85749V13.5987H10.6757C11.1776 13.5987 11.5848 13.1924 11.5848 12.6909V12.2371C11.5848 11.7356 11.1776 11.3293 10.6757 11.3293H9.58469C8.07867 11.3293 6.85742 10.1102 6.85742 8.6061V8.15223Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.22107 4.33673H11.0393V6.33389H9.22107V4.33673Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.22119 14.5028H11.0394V16.5H9.22119V14.5028Z" fill="black"/>
                        </svg>
                        <p style={{"fontSize":"16px","color":"black"}}><b>150.000 VND</b></p>
                    </div>
                </div>
            </div>
            <img src={tiket}/>
        </div>
    )
}

export default Ticket;