import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import image_logistic from '../assets/images/logistica.jpg';


export const Home = () => {
  return (
    <Box sx={{display:'flex', backgroundColor:'#ffeddf', height:'100vh', width:'100%'}}>
      <Box sx={{display:'flex', width:'40%',flexDirection:'column', p:'7% 4% 4% 4%' }}>
        <Box sx={{width:'100%', border:'2px solid red'}}>
          <Box>
          
          <Typography sx={{fontFamily:'sans-serif', fontSize:45, fontWeight:'bolder'}}>Mejora los
            <span style={{color:'#fb7a8f'}}> procesos </span></Typography>
          <Typography sx={{fontFamily:'sans-serif', fontSize:45, fontWeight:'bolder'}}>en la 
          <span style={{color:'#fb7a8f'}}> cadena de </span></Typography>
          <Typography sx={{fontFamily:'sans-serif', fontSize:45, fontWeight:'bolder'}}><span style={{color:'#fb7a8f'}}> abastecimiento</span></Typography>
          <Typography sx={{fontFamily:'sans-serif', fontSize:45, fontWeight:'bolder'}}>de tu empresa</Typography>
          </Box>
        </Box>
        <Box sx={{width:'100%',border:'2px solid red'}}>
          <Typography> Recibe asistencia logística en los procesos de la</Typography>
          <Typography>cadena de suministros de tu empresa,</Typography>
          <Typography>microempresa o PYME</Typography>
        </Box>
        <Box sx={{width:'100%',border:'2px solid red'}}>
          <Button variant='contained' sx={{backgroundColor:'#fb5a73', borderRadius:'18px', '&:hover':{backgroundColor:'#fb7a8f'}}}>
              ¡Haz el diagnostico ahora!
          </Button>
        </Box>
      </Box>
      <Box sx={{display:'flex', width:'60%', justifyContent:'center', padding:'2%',alignItems:'center'}}>
        <img  src={image_logistic} width={700} height={600} style={{borderRadius:'2.5rem'}} alt='image_1'/>
      </Box>

    </Box>

  )
}
