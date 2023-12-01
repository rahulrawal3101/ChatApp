'use client'
import { Box, Grid, Icon, InputBase, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ChatSetting from '@/app/chatsetting/page';


const HomeMid = () => {
    const [ userChat , setuserChat]=useState({})
    const [picker , setPicker] = useState(false)
    const [arrow , setArrow] = useState(false)
    const [chatSetting , setChatSetting] = useState("chat")

    const [user, setUser] = useState(
        [
            {
                name: "Kapil",
                chat: ['hi','how are you']
            },
            {
                name:'Rahul',
                chat: ['hello','what are you doing']
            },
            {
                name:'Nagu Bhai',
                chat: ['kese ho','mittha bhai','office ana h aaj?']
            },
            {
                name:'Shivam Sir',
                chat: ['no comments','do new project']
            }
        ]
    )

    const chatHandler =(item)=>{
        console.log(item)
        setuserChat(item)
        setPicker(false)
    }
    return (
        <Grid container justifyContent={"space-between"} sx={{ p: "30px 35px", height: "100%" }}>
            <Grid item xs={3} sx={{ height: "100%" }}>

                <Paper sx={{ height: "100%", width: "100%", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ width: "90%", height: "90%" }}>
                        <InputBase placeholder='Search Friends' fullWidth sx={{ bgcolor: "#eceafc", color: '#311b92', borderRadius: "10px", p: "10px" }} />
                      { 
                        user.map((ele)=>{
                            console.log(ele.chat.slice(-1))
                            return  <Paper elevation={0} sx={{ cursor: "pointer",bgcolor:userChat.name==ele.name?'#b39ddb':'#f5f5f5' ,"&:hover": { bgcolor:userChat.name==ele.name?'#b39ddb':'#f5f5f5'}, display: "flex", mt: "20px", alignItems: "center", borderRadius: "15px", p: "15px 10px", borderBottom: "1px solid #e0e0e0" }} onClick={()=>{chatHandler(ele)}}>
                            <Box sx={{ height: "40px", display: "flex", mr: "10px", justifyContent: "center", alignItems: "center", bgcolor: "#e0e0e0", zIndex: 99, width: "40px", borderRadius: "50px" }}>
                                <PersonIcon sx={{ color: "#bdbdbd", fontSize: "27px" }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: "200", color: userChat.name==ele.name?'white':'#757575' }}>{ele.name}</Typography>
                                <Typography sx={{ fontSize: "11px", mt: "-3px", color: userChat.name==ele.name?'white':'#757575' }}>You : {ele.chat.slice(-1)}</Typography>

                            </Box>
                        </Paper>
                        })
                        
                        
                        }
                    </Box>

                </Paper>


            </Grid>
            {
                Object.keys(userChat) == 0 ? <Grid xs={8.8} sx={{}}>
                <Paper sx={{ height: "100%", width: "100%", borderRadius: "10px" }}>
                    <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Box>
                            <Typography align='center' sx={{ fontSize: "30px", fontWeight: "800", textTransform: "uppercase", color: "#757575" }}>
                                Kal AJ
                            </Typography>
                        </Box>
                        <Box sx={{ height: "150px", mt: "20px", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#e0e0e0", zIndex: 99, width: "150px", borderRadius: "100px" }}>
                            <PersonIcon sx={{ color: "#bdbdbd", fontSize: "100px" }} />
                        </Box>
                        <Box>
                            <Typography align='center' sx={{ fontSize: "15px", mt: "15px", color: "#757575" }}>sodihosndlakhia  caih acosa c chc09d sc w9dcwc</Typography>
                            <Typography align='center' sx={{ fontSize: "15px", mt: "3px", color: "#757575" }}>kjdsabs us ds fiusag  asi saf saf sfs f wfsdsdf</Typography>

                        </Box>
                    </Box>

                </Paper>
            </Grid>
            :<><Grid xs={8.8} sx={{display:chatSetting == 'chat' ? 'flex':'none'}}>
                <Paper sx={{ height: "100%", width: "100%", borderRadius: "10px" }}>
                    <Box sx={{  display: "flex", justifyContent:'space-between', alignItems: "center",width:"100%",borderBottom:"1px solid #e0e0e0",height:"12%" }}>
                    <Box sx={{ display:"flex",alignItems:"center",width:"fit-content",ml:"20px"}}>
                            <Box sx={{ height: "40px", display: "flex", mr: "10px", justifyContent: "center", alignItems: "center", bgcolor: "#e0e0e0", zIndex: 99, width: "40px", borderRadius: "50px" }}>
                                <PersonIcon sx={{ color: "#bdbdbd", fontSize: "27px" }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: "200", color: '#757575' }}>{userChat.name}</Typography>
                               

                            </Box>
                       
                    </Box>
                    <Box sx={{width:"fit-content",mr:"20px",position:"relative"}}>
                        <Icon>
                            <MoreVertIcon sx={{fontSize:"12px",cursor:"pointer"}} onClick={()=>{setArrow(!arrow)}}/>
                        </Icon>

                        <Paper elevation={3} sx={{display:arrow ?"flex":"none",alignItems:"space-between",flexDirection:"column",position:"absolute",width:"fit-content",p:"8px",right:"20px",top:"26px"}}>
                       <Typography onClick={()=>{setChatSetting('setting');setArrow(false)}} align='center' sx={{fontSize:"13px",display:"flex",alignItems:"center",userSelect:"none",cursor:"pointer",textTransform:"capitalize",fontWeight:"bold",color:"#bdbdbd",borderRadius:"10px",'&:hover':{bgcolor:"#eeeeee"},p:"8px 15px"}} >
                          <SettingsIcon sx={{mr:"6px",color:"#616161"}}/> Setting
                       </Typography>
                       <Typography onClick={()=>{setChatSetting('info');setArrow(false)}} align='center' sx={{fontSize:"13px",display:"flex",alignItems:"center",userSelect:"none",cursor:"pointer",fontWeight:"bold",'&:hover':{bgcolor:"#eeeeee"},color:"#bdbdbd",borderRadius:"10px",p:"8px 15px"}} >
                         <InfoIcon sx={{mr:"6px",color:"#616161"}}/> Information
                       </Typography>
                   </Paper>
                    </Box>
                       
                    </Box>


                    <Box sx={{height:"72%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}>
                       <Box sx={{mr:"20px",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                       {
                        userChat.chat.map((ele)=>{
                            return  <Typography sx={{color:"white",bgcolor:"#5d54c2",width:"fit-content",borderRadius:"17px",p:"13px",mt:"10px"}}>
                             {ele}
                        </Typography>
                        })
                       
                       }
                       </Box>
                    </Box>

                    <Box sx={{height:"15%",ml:"20px",display:"flex",alignItems:"center",position:"relative"}}>
                       <Box sx={{width:"100%",display:"flex"}}>
                          <InputBase placeholder='Write a message' sx={{bgcolor:"#eeeeee",fontSize:"12px",borderRadius:"15px 0px 0px 15px",pl:"20px",color:"#757575"}} fullWidth/>
                          <Box sx={{display:"flex",bgcolor:"#eeeeee",alignItems:"center",borderRadius:"0px 15px 15px 0px",pr:"20px"}}>
                               <NoteAddIcon sx={{color:"#5d54c2",fontSize:"15px",mr:"7px",cursor:"pointer"}}/>  
                               <ImageIcon sx={{color:"#5d54c2",fontSize:"15px",mr:"7px",cursor:"pointer"}}/>
                               <EmojiEmotionsIcon sx={{color:"#5d54c2",fontSize:"15px",cursor:"pointer"}} onClick={()=>{setPicker(!picker)}}/>
                          </Box>
                       </Box>
                       <Box sx={{mr:"20px",ml:"15px"}}>
                        <Icon sx={{cursor:"pointer"}}>
                            <SendIcon sx={{fontSize:"17px",color:"#5d54c2"}}/>
                        </Icon>
                       </Box>
                       
                       {
                        picker && <Box sx={{position:"absolute",right:"20px",bottom:"70px"}}>
                              <EmojiPicker height={350} width={270}/>
                       </Box>
                       }
                        
                    </Box>
                </Paper> 
             </Grid>
                 {
                  chatSetting != 'chat' && <ChatSetting chatSetting={chatSetting}  setChatSetting={setChatSetting}/>
                }
           
            </>

            }
            

            
        </Grid>
    )
}

export default HomeMid