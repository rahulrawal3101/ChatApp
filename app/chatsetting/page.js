'use client'
import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Grid, Icon, Paper, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import NickNameModal from '@/components/NickNameModal';
import ColorModal from '@/components/ColorModal';
import DeleteModal from '@/components/DeleteModal';


const ChatSetting = ({chatSetting , setChatSetting}) => {
    const [ open , setOpen]=useState(false)
    const [colors, setColors]=useState(false)
    const [delChat, setDelChat]=useState(false)
    
  return (
    <>
         <Grid xs={8.8} sx={{}}>
                <Paper sx={{ height: "100%", width: "100%", borderRadius: "10px" }}>
                    <Box sx={{  display: "flex", alignItems: "center",width:"100%",borderBottom:"1px solid #e0e0e0",height:"12%" }}>
                    <Box sx={{ display:"flex",alignItems:"center",width:"fit-content",ml:"20px"}}>
                            <Box sx={{ height: "40px", display: "flex", justifyContent: "center", alignItems: "center",zIndex: 99, width: "40px", borderRadius: "50px" }}>
                                <KeyboardBackspaceIcon sx={{ color: "#616161", fontSize: "24px",cursor:"pointer" }} onClick={()=>{setChatSetting('chat')}} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: "200", color: '#616161' }}>Setting</Typography>
                               

                            </Box>
                       
                    </Box>
                    </Box>
                    <Box sx={{display:chatSetting == 'setting'?"flex":'none',m:"35px 35px",}}>
                        <Paper elevation={1} sx={{height:"80px",mr:"20px",width:"120px",'&:hover':{bgcolor:"#eeeeee"},color:"#757575",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} onClick={()=>{setOpen(true)}}>
                            <Icon>
                               <CreateIcon sx={{fontSize:"19px"}}/>
                            </Icon>
                            <Typography sx={{userSelect:"none",fontSize:"13px"}}>
                                Nick Name
                            </Typography>
                        </Paper>

                        <NickNameModal open={open} setOpen={setOpen}/>

                        <Paper elevation={1} sx={{height:"80px",mr:"20px",width:"120px",'&:hover':{bgcolor:"#eeeeee"},color:"#757575",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} onClick={()=>{setColors(true)}}>
                            <Icon>
                               <CircleIcon sx={{ color: "#5d54c2",fontSize:"19px"}}/>
                            </Icon>
                            <Typography sx={{userSelect:"none",fontSize:"13px"}}>
                                Chat Theme
                            </Typography>
                        </Paper>

                          <ColorModal colors={colors} setColors={setColors}/>

                        <Paper elevation={1} sx={{height:"80px",mr:"20px",width:"120px",'&:hover':{bgcolor:"#eeeeee"},color:"#757575",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} onClick={()=>{setDelChat(true)}}>
                            <Icon>
                               <DeleteIcon sx={{fontSize:"19px"}}/>
                            </Icon>
                            <Typography sx={{userSelect:"none",fontSize:"13px"}}>
                                Delete Chat
                            </Typography>
                        </Paper>

                        <DeleteModal delChat={delChat} setDelChat={setDelChat}/>
                    </Box>

                    <Box sx={{display:chatSetting == 'info'?"flex":'none',m:"35px 35px"}}>
                        <Box>
                            <Typography sx={{color:"#757575",mt:"7px"}}>
                                Nickname: rupert samuel
                            </Typography>

                            <Typography sx={{color:"#757575",mt:"15px"}}>
                            Name: rupert samuel
                            </Typography>

                            <Box sx={{ height: "40px", display: "flex",mt:"15px", mr: "10px", justifyContent: "center", alignItems: "center", bgcolor: "#e0e0e0", zIndex: 99, width: "40px", borderRadius: "10px" }}>
                                <PersonIcon sx={{ color: "#bdbdbd", fontSize: "27px" }} />
                            </Box>

                            <Typography sx={{color:"#757575",mt:"15px"}}>
                            Email: rupert@fixmyonline.com
                            </Typography>

                            <Typography sx={{color:"#757575",mt:"15px"}}>
                            Created: 11/30/2023
                            </Typography>

                            <Typography sx={{color:"#757575",mt:"15px"}}>
                                Nickname: rupert samuel
                            </Typography>


                            <Typography sx={{color:"#757575",mt:"15px"}}>
                            Chat Theme
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
    </>
  )
}

export default ChatSetting