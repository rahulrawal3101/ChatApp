'use client'
import { Box, Button, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import img1 from '../../assets/wave-img1.svg';
import img2 from '../../assets/img2.svg';
import ImageIcon from '@mui/icons-material/Image';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import whitelogo from '../../assets/whitelogo.svg'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <Container disableGutters maxWidth='xl'>


                <Grid container sx={{ height: '120vh', overflow: 'hidden' , display:{lg:'block', md:'none', sm:'none', xs:'none'}}} >


                    <Grid container sx={{ bgcolor: '#eceafc', height: '100vh', position: 'relative' }}>
                        <Grid item xs={12} sx={{ m: '35px', display: 'flex', alignItems: 'center', position: 'absolute' }}>
                            <Box sx={{ width: '70px', height: '50px' }}>
                                <Image src={logo} alt='logo' style={{ width: '70px', height: '50px' }} />
                            </Box>
                            <Typography sx={{ color: '#5d54c2', fontSize: '20px', fontWeight: 'bold', ml: '3px' }}>MASTER CHAT</Typography>


                        </Grid>

                        <Grid item xs={6} sx={{ position: 'absolute', top: '0px', right: '0px' }}>
                            <Box sx={{ height: '100vh' }}>
                                <Image src={img1} alt='logo' objectFit='contain' />
                            </Box>
                        </Grid>

                        <Grid item xs={6} sx={{ position: 'absolute', bottom: '-110px', left: '-75px' }}>
                            <Box sx={{ width: '400px', height: '400px', }}>
                                <Image src={img2} alt='logo' objectFit='cover' fill />
                            </Box>
                        </Grid>

                        <Grid item sx={{ width: '420px', bgcolor: '#625ac0', borderRadius: '25px', position: 'absolute', top: '23%', left: '35%' }}>
                            <Grid container>
                                <Grid item xs={12} sx={{ mt: '40px' }}>
                                    <Typography sx={{ fontSize: '25px', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Sign In To Account</Typography>
                                </Grid>
                                <Grid container sx={{ mt: '34px' }}>
                                    <Grid item xs={12} sx={{ ml: '22px' }} >
                                        <Box sx={{ width: '350px', bgcolor: '#eceafc', p: '11px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                                            <EmailIcon sx={{ fontSize: '19px', color: '#5d54c2' }} fontSize='small' />
                                            <InputBase placeholder='Email' sx={{ fontSize: '15px', color: '#5d54c2', ml: '10px', }} fullWidth />
                                        </Box>
                                    </Grid>

                                    <Grid item lg={10} sx={{ mt: '20px', ml: '22px' }}>
                                        <Box sx={{ width: '350px', bgcolor: '#eceafc', p: '3px 10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                            <LockIcon sx={{ fontSize: '19px', color: '#3f51b5', mb: '8px' }} fontSize='small' />
                                            <Box sx={{ width: '93%' }}>
                                                <FormControl fullWidth size='small' variant="standard" sx={{ borderBottom: '#3f51b5' }} >
                                                    <InputLabel htmlFor="standard-adornment-password" sx={{ fontSize: '15px', color: '#c5cae9', ml: '10px' }}>Password</InputLabel>
                                                    <Input
                                                        id="standard-adornment-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton

                                                                    sx={{ color: '#3f51b5', fontSize: '17px' }}
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                    />
                                                </FormControl>
                                            </Box>

                                        </Box>


                                    </Grid>

                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
                                        <Button variant='contained' sx={{ bgcolor: '#eceafc', color: '#625ac0', fontSize: '15px', fontWeight: 'bold', p: '10px 30px', width: '150px', borderRadius: '10px', '&:hover':{ bgcolor: '#eceafc', color: '#625ac0', fontSize: '15px',}}}>login</Button>

                                    </Grid>

                                    <Grid item xs={12} sx={{ mt: '25px', pb: '20px' }}>
                                        <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>Don't have any account ?<a href='' style={{ color: 'white' }}> Sign Up</a></Typography>
                                        <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>Do you forgot password ? <a href='' style={{ color: 'white' }}> Forgot Password</a></Typography>

                                    </Grid>


                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item sx={{position:'absolute', bottom:'10px', right:'10px'}}>
                        <Typography sx={{fontSize:'17px'}}>© MasterChat by Fistrba 2023. All rights reserved.</Typography>
                        </Grid>


                    </Grid>
                    <Grid item xs={12} sx={{ bgcolor: 'white', mb: '10px', height: '130px', zIndex: 99999, position:'relative' }}>

                    </Grid>
                </Grid>

                {/* show on medium screen */}
                <Grid container sx={{ height: '100vh', display:{lg:'none', md:'flex', sm:'flex', xs:'flex'}, justifyContent: 'center', alignItems: 'center', bgcolor: '#625ac0', }}>
                    <Grid item lg={5} md={6} sm={8} xs={11}>

                        <Grid container >
                        <Grid item xs={12} sx={{ display:'flex', justifyContent:'center', alignItems:'center'  }}>
                            <Box sx={{ width: '50px', height: '40px' }}>
                                <Image src={whitelogo} alt='logo' style={{ width: '50px', height: '40px' }} />
                            </Box>

                        </Grid>

                            <Grid item xs={12} sx={{ mt: '10px' }}>
                                <Typography sx={{ fontSize: '17px', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Sign In To Account</Typography>
                            </Grid>
                            <Grid item xs={11.3} sx={{ mt: '22px' }} >
                                <Box sx={{ width: '100%', bgcolor: '#eceafc', p: '11px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon sx={{ fontSize: '19px', color: '#5d54c2' }} fontSize='small' />
                                    <InputBase placeholder='Email' sx={{ fontSize: '15px', color: '#5d54c2', ml: '10px', }} fullWidth />
                                </Box>
                            </Grid>

                            <Grid item xs={11.3} sx={{ mt: '20px' }}>
                                <Box sx={{ width: '100%', bgcolor: '#eceafc', p: '3px 10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <LockIcon sx={{ fontSize: '19px', color: '#3f51b5', mb: '8px' }} fontSize='small' />
                                    <Box sx={{ width: '93%' }}>
                                        <FormControl fullWidth size='small' variant="standard" sx={{ borderBottom: '#3f51b5' }} >
                                            <InputLabel htmlFor="standard-adornment-password" sx={{ fontSize: '15px', color: '#c5cae9', ml: '10px' }}>Password</InputLabel>
                                            <Input
                                                id="standard-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton

                                                            sx={{ color: '#3f51b5', fontSize: '17px' }}
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Box>

                                </Box>


                            </Grid>

                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
                                <Button variant='contained' sx={{ bgcolor: '#eceafc', color: '#625ac0', fontSize: '15px', fontWeight: 'bold', p: '10px 30px', width: '150px', borderRadius: '10px','&:hover':{ bgcolor: '#eceafc', color: '#625ac0', fontSize: '15px',} }}>login</Button>

                            </Grid>

                            <Grid item xs={12} sx={{ mt: '25px', pb: '20px' }}>
                                <Typography sx={{ color: 'white', fontSize: '12px', textAlign: 'center' }}>Don't have any account ?<a href='' style={{ color: 'white' }}> Sign Up</a></Typography>
                                <Typography sx={{ color: 'white', fontSize: '12px', textAlign: 'center' }}>Do you forgot password ? <a href='' style={{ color: 'white' }}> Forgot Password</a></Typography>

                            </Grid>


                        </Grid>

                    </Grid>



                </Grid>
            </Container>
        </>
    )
}

export default Login