import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const pages = ['Inicio', 'Diagnostico'];

function ResponsiveAppBar() {
const navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{display:'flex', height:'100%'}}>
            <Box sx={{alignItems:'center'}}>
            <img src={logo} width={190} height={50} alt='Logo'/>
            </Box>
          </Box>
          <Box sx={{display:'flex', width:'100%', justifyContent:'center', gap:'4rem'}}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: '#6F6F6F', display: 'block', fontWeight:'bold', '&:hover':{backgroundColor:'transparent', color:'#fb7a8f'}}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={() => navigate('/login')} variant='contained' sx={{backgroundColor:'#fb5a73', borderRadius:'18px', '&:hover':{backgroundColor:'#fb7a8f'}}}>
              Ingresar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
