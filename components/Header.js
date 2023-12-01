'use client'
import ImageIcon from '@mui/icons-material/Image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Grid, Icon, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/navigation'
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';



const roboto4 = Roboto({
    weight: '700',
    subsets: ['latin-ext'],
    display: "swap"
})

const Header = ({ list }) => {
    const router = useRouter()
    const [arrow, setArrow] = useState(false)

    // const handleNavigate = () => {
    //     if (list == 'home') {
    //         router.push('/')
    //     }
    //     else {
    //         router.push('/profile')
    //     }
    // }

    const handleNavigateLog = async () => {
        await localStorage.removeItem('tid')
        router.push('/login')
    }

    return (
        <>
            <Grid container sx={{ borderBottom: "1px solid #e0e0e0" }}>
                <Grid item xs={4} sx={{ display: "flex", alignItems: "Center", p: "8px" }}>
                    <Box sx={{ position: "relative", height: "60px", width: "100px" }}>
                        <Image src={logo} style={{ height: "100%", width: "100%", position: "absolute" }} />
                    </Box>
                    <Box>
                        <Typography className={roboto4.className} sx={{ textTransform: "uppercase", color: "#5d54c2", whiteSpace: "nowrap", fontSize: { lg: "20px", md: "20px", sm: "17px", xs: "14px" }, marginLeft: "12px" }}>
                            Master chat
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8} sx={{ display: "flex", justifyContent: "right", p: "8px 15px" }}>
                    <Box sx={{ height: "100%", display: "flex", alignItems: "center", zIndex: 99 }}>
                        <Box sx={{ display: "flex", alignItems: "center", position: "relative"}}>
                            <Icon sx={{ cursor: "pointer", ml: "3px", color: "#bdbdbd", mr: "10px" }} onClick={() => { setArrow(!arrow) }}>
                                <KeyboardArrowUpIcon sx={{ display: !arrow ? "none" : "block" }} />
                                <KeyboardArrowDownIcon sx={{ display: arrow ? "none" : "block" }} />
                            </Icon>
                            <Paper elevation={3} sx={{ display: arrow ? "flex" : "none",p:"20px 20px 8px 20px",bgcolor:"#fff", alignItems: "space-between", right: "-50px", flexDirection: "column", position: "absolute", width: "250px", top: "45px" }}>

                                <Box sx={{display:"flex",alignItems:"center",pb:"10px",borderBottom:"1px solid #e0e0e0"}}>
                                    <Box sx={{ height: "60px", display: "flex",mr:"15px", justifyContent: "center", alignItems: "center", bgcolor: "#e0e0e0", zIndex: 99, width: "60px", borderRadius: "50px" }}>
                                        <PersonIcon sx={{ color: "#bdbdbd",fontSize:"35px" }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{fontSize:"18px",fontWeight:"800"}}>dsfsd</Typography>
                                        <Typography sx={{fontSize:"13px",mt:"-5px"}}>dsfsd</Typography>

                                    </Box>
                                </Box>
                        
                        <Typography  sx={{ fontSize: "13px",mt:"10px",display:"flex",alignItems:"center",color:"#757575", userSelect: "none", cursor: "pointer", fontWeight: "bold", '&:hover': { bgcolor: "#eeeeee" },borderRadius:"8px",p: "12px 10px" }} onClick={()=>{router.push('/profilesetting')}}>
                           <SettingsIcon sx={{mr:"5px"}} /> Settings
                        </Typography>

                        <Typography  sx={{ fontSize: "13px",mt:"10px",display:"flex",alignItems:"center",color:"#757575", userSelect: "none", cursor: "pointer", fontWeight: "bold", '&:hover': { bgcolor: "#eeeeee" },borderRadius:"8px",p: "12px 10px" }} onClick={()=>{router.push('/login')}}>
                           <LogoutIcon sx={{mr:"5px"}} /> Logout
                        </Typography>

                        <Typography  sx={{ fontSize: "9px",mt:"20px",display:"flex",alignItems:"center",color:"#757575", userSelect: "none", cursor: "pointer",pl:"12px" }} onClick={handleNavigateLog}>
                            MASTER CHAT @ 2023
                        </Typography>
                    </Paper>
                </Box>
                <Box sx={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#e0e0e0", zIndex: 99, width: "50px", borderRadius: "50px" }}>
                    <PersonIcon sx={{ color: "#bdbdbd",fontSize:"30px" }} />
                </Box>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default Header