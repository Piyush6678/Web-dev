import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'

import React, { lazy, Suspense, useState } from 'react'
import { orange } from '../../constants/color'
import { Add as AddIcon, Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from '@mui/icons-material'
import {  useNavigate } from 'react-router-dom'
import { isIncludeSpecialChar } from '6pp'

const Header = () => {

const [ismobile,setIsMobile]=useState(false)
const [isSearch,setIsSearch]=useState(false)
const [isNewGroup,setIsNewGroup]=useState(false)
const [isNotification,setIsNotification]=useState(false)

const SearchDialog=lazy(()=>import("../specific/Search"))
const GroupDialog=lazy(()=>import("../specific/NewGroups"))
const NotificationDialog=lazy(()=>import("../specific/Notification"))



const navigate= useNavigate()

const handleMobile =()=>{
  setIsMobile(prev=>!prev)
  
}
const openSearchDialog =()=>{
  setIsSearch(prev=>!prev)
  
}
const openNewGroup =()=>{
  setIsNewGroup(prev=>!prev)
  
}
const openNotification =()=>{
  setIsNotification(prev=>!prev)

}
const logoutHandler =()=>{
  setIsNotification(prev=>!prev)

}
const navigateToGroup =()=>navigate("/groups")

  return (
    <div>
      
      <Box  sx={{flexGrow:1}} height={"4rem"} >
        <AppBar position='static'sx={{
          bgcolor:orange
        }} >
<Toolbar>
  <Typography  
  variant="h6"
  sx={{
    display:{
      xs:"none",
      sm:"block"
    }
  }}>
Chatify
  </Typography>

<Box sx={{
  display:{xs:"block", sm:"none"}
}} >
<IconButton color='inherit' onCLick={handleMobile} > <MenuIcon/> </IconButton>

</Box>
<Box sx={{
  flexGrow:1,

}} />
<Box>



<IconBtn title={"Search"} onClick={openSearchDialog} icon={<SearchIcon/>} />

<IconBtn title={"manage Groups"} onClick={openNewGroup} icon={<AddIcon/>} />

<IconBtn title={"manage Groups"} onClick={navigateToGroup} icon={<GroupIcon/>} />

<IconBtn title={"Notification"} onClick={openNotification} icon={<NotificationsIcon/>} />
<IconBtn title={"Logout "} onClick={logoutHandler} icon={<LogoutIcon/>} />

</Box>

</Toolbar>

          </AppBar>
        </Box>
        
{
  isSearch&&(
<Suspense fllaback={<div>Loading..</div>}>
    <SearchDialog/></Suspense>
  )
}
{
  isNewGroup&&(
<Suspense fllaback={<div>Loading..</div>}>
    <GroupDialog/></Suspense>
  )
}
{
  isNotification&&(
<Suspense fllaback={<div>Loading..</div>}>
    <NotificationDialog/></Suspense>
  )
}









            </div>
  )
}

const IconBtn=({title,icon,onClick})=>{
  return(
    
<Tooltip title={title} > <IconButton color='inherit' size="large" onCLick={onClick} > {icon} </IconButton> </Tooltip>

  )

}

export default Header
