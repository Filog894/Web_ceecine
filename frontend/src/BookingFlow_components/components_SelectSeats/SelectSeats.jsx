import MovieCard from "../components_ShowTime/MoviesCard"
import ProgressBar from "../component_ProgressBar/ProgressBar"
import ConfirmSelectSeat from "./ConfirmSelectSeat"
import CinemaSeat from "./CinemaSeat"
import { useState } from "react"
function SelectSeats() {
  const [selectedSeats, setSelectedSeats] = useState([]); // State lưu ghế đã chọn

  const handleSelectSeat = (seats) => {
    setSelectedSeats(seats); // Cập nhật state khi có ghế được chọn
  };

  const seatPrice = 80000; // Giá mỗi ghế

  return (
    <>
    <div style={{marginBottom:'100px'}}> 
      <div style={{display: 'flex',  justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
        <MovieCard></MovieCard>
        <ProgressBar Progress={1}></ProgressBar>
      </div>

      <div style={{display: 'flex', flexDirection:'row'}}>
        <div id='NhanhBentrai' style={{display: 'flex', flex: '3', alignItems:'flex-start', justifyContent:'flex-start', 
        padding:'10px',marginLeft:'50px' }} >
          <CinemaSeat onSeatChange={handleSelectSeat}/>
        </div>
        <div id='NhanhBenPhai' style={{display: 'flex', flex:'2', justifyContent:'center', alignItems:'center' }}>
          <ConfirmSelectSeat selectedSeats={selectedSeats} seatPrice={seatPrice}/>
        </div>
      </div>

    </div>
    </>
  )
}

export default SelectSeats