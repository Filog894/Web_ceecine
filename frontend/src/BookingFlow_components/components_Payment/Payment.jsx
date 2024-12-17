import ProgressBar from "../component_ProgressBar/ProgressBar"
import MovieCard from "../components_ShowTime/MoviesCard"
import Promotion from "./Promotion"
import ConfirmPayment from "./ConfirmPayment"
import MethodPayment from "./MethodPayment"
function Payment() {
  return (
    <>
    <div style={{marginBottom:'100px'}}> 
      <div style={{display: 'flex',  justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
        <MovieCard></MovieCard>
        <ProgressBar Progress={3}></ProgressBar>
      </div>

      <div style={{display: 'flex', flexDirection:'row'}}>
        <div id='NhanhBentrai' style={{display: 'flex', flex: '3', alignItems:'flex-start', justifyContent:'flex-start', 
        padding:'10px',marginLeft:'20px' ,flexDirection:'column' }} >
          <Promotion></Promotion>
          <MethodPayment></MethodPayment>
        </div>
        
        <div id='NhanhBenPhai' style={{display: 'flex', flex:'2', justifyContent:'center', alignItems:'center', marginRight:'30px' }}>
          <ConfirmPayment></ConfirmPayment>
        </div>
      </div>-
    </div>
    </>
  )
}

export default Payment