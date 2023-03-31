import { Box } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'

export const Layout = (props:{children?:React.ReactNode}) => {
  return (

    <React.Fragment>
    <Box sx={{display:'flex'}}>
    <Box><ResponsiveAppBar/></Box>
    <Box component='main' sx={{flexGrow:1, pt:'4%', pb:3}}>{props.children}</Box>
    </Box>
    </React.Fragment>
  )
}
