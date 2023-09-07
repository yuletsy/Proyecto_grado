import { Box } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import Footer from './Footer'
import { useAppDispatch } from '../../app/store/hooks'
import { RECIVE_AUTH_STATE } from '../../app/reducers/AuthReducer'
import { RECIVE_COMPANY_STATE } from '../../app/reducers/CompanyReducer'
import jwt_decode from "jwt-decode";

export const Layout = (props:{children?:React.ReactNode}) => {
  
  const token = localStorage.getItem("token")
  
  const dispatch = useAppDispatch();
  
  
 React.useEffect(() => {
   if(!token)return;
   const tokenInfo: any = jwt_decode(token);
   
   dispatch(RECIVE_AUTH_STATE({message:"ok",token }))
   
   dispatch(RECIVE_COMPANY_STATE(tokenInfo));
   
 }, [token, dispatch])
 
  return (

    <React.Fragment>
    <Box sx={{display:'flex'}}>
    <Box><ResponsiveAppBar/></Box>
    <Box component='main' sx={{flexGrow:1, pt:"2%"}}>{props.children}</Box>
    </Box>
    <Box sx={{display: "flex"}} >
    <Footer/>
    </Box>
    </React.Fragment>
  )
  }