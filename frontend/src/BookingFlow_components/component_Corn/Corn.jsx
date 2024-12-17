import React from 'react'
import MovieCard from '../components_ShowTime/MoviesCard';
import ProgressBar from '../component_ProgressBar/ProgressBar';
import Menu from './Menu';
import ConfirmCorn from './ConfirmCorn';
function Corn() {
  return (
    <>
    <div style={{marginBottom:'100px'}}> 
      <div style={{display: 'flex',  justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
        <MovieCard></MovieCard>
        <ProgressBar Progress={2}></ProgressBar>
      </div>

      <div style={{display: 'flex', flexDirection:'row'}}>
        <div id='NhanhBentrai' style={{display: 'flex', flex: '3', alignItems:'flex-start', justifyContent:'flex-start', 
        padding:'10px',marginLeft:'20px' }} >
          <Menu/>
        </div>
        
        <div id='NhanhBenPhai' style={{display: 'flex', flex:'2', justifyContent:'center', alignItems:'center' }}>
          <ConfirmCorn/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Corn;