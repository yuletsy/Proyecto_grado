import { Box } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import Footer from './Footer'
export const Layout = (props:{children?:React.ReactNode}) => {
  return (

    <React.Fragment>
    <Box sx={{display:'flex'}}>
    <Box><ResponsiveAppBar/></Box>
    <Box component='main' sx={{flexGrow:1, pt:"2%"}}>{props.children}</Box>
    </Box>
    <Box >
    <Footer/>
    </Box>
    </React.Fragment>
  )
  }