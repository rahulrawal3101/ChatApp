'use client'
import { Box, Button, FilledInput, FormControl, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import '../../master.css'


const Setting = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }


    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <Grid container sx={{  height: '97vh', bgcolor: '#eceafc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item className='hideScroll' lg={5.5}  md={7} sm={10} xs={11} sx={{  bgcolor: 'white', p:{ lg:'20px 30px', md:'20px 30px', sm:'20px', xs:'15px'}, borderRadius: '10px',height:'490px',overflow:'scroll' }}>
                    <Grid container sx={{mt:'10px'}}>
                        <Grid item xs={12} >
                            <Typography sx={{ fontSize: '23px', color: '#6a6a6a', }}>Profile Settings</Typography>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sx={{ mt: '10px' }}>
                        <Box sx={{ width: '100px', height: '100px', borderRadius: '50px', bgcolor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <PersonIcon sx={{ fontSize: '60px', color: '#bdbdbd' }} />
                        </Box>

                    </Grid>
                    <Grid item xs={12} sx={{ mt: '15px' }}>
                        <Typography sx={{ color: '#635ac0', fontSize: '20px' ,  fontStyle: 'italic',}}>rahul@gmail.com</Typography>
                    </Grid>

                    <Grid item lg={8} md={8} sm={11} xs={11} sx={{ mt: '15px' }}>
                        <Box sx={{ bgcolor: '', width: '100%', bgcolor: '#eceafc', p: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                            <PersonIcon sx={{ fontSize: '19px', color: '#3f51b5' }} fontSize='small' />
                            <InputBase placeholder='Rahul' sx={{ fontSize: '15px', color: '#303f9f', ml: '10px' }} />
                        </Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={11} xs={11} sx={{ mt: '6px' }}>
                        <Box sx={{ width: '100%', bgcolor: '#eceafc', p: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                            <PersonIcon sx={{ fontSize: '19px', color: '#3f51b5' }} fontSize='small' />
                            <InputBase placeholder='Rawal' sx={{ fontSize: '15px', color: '#303f9f', ml: '10px' }} />
                        </Box>
                    </Grid>

                    <Grid item lg={8} md={8} sm={11} xs={11} sx={{ mt: '15px' }}>
                        <Typography sx={{ color: '#303f9f', fontSize: '14px',  fontStyle: 'italic', }}>Change password</Typography>
                    </Grid>

                    <Grid item lg={8} md={8} sm={11} xs={11} sx={{ mt: '6px' }}>
                        <Box sx={{ width: '100%', bgcolor: '#eceafc', p: '3px 10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-end', justifyContent:'center' }}>
                            <LockIcon sx={{ fontSize: '19px', color: '#3f51b5', mb:'8px' }} fontSize='small' />
                            <Box sx={{ width: '93%' }}>
                                <FormControl fullWidth size='small' variant="standard" sx={{ml:'10px',  borderBottom:'#3f51b5'}} >
                                    <InputLabel htmlFor="standard-adornment-password" sx={{fontSize:'14px'}}>Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword2 ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                sx={{color:'#3f51b5'}}
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword2}
                                                    onMouseDown={handleMouseDownPassword2}
                                                >
                                                    {showPassword2 ?   <Visibility />: <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>

                        </Box>


                    </Grid>

                    <Grid item lg={8} md={8} sm={11} xs={11} sx={{ mt: '6px' }}>
                        <Box sx={{ width: '100%', bgcolor: '#eceafc', p: '3px 10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-end', justifyContent:'center' }}>
                            <LockIcon sx={{ fontSize: '19px', color: '#3f51b5',mb:'8px' }} fontSize='small' />
                            <Box sx={{ width: '93%' }}>
                                <FormControl fullWidth size='small' variant="standard" sx={{ml:'10px',  borderBottom:'#3f51b5'}}>
                                    <InputLabel htmlFor="standard-adornment-password" sx={{fontSize:'14px'}}>Confirm Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                sx={{color:'#3f51b5'}}
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ?  <Visibility />: <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>

                        </Box>


                    </Grid>

                    <Grid item xs={12} sx={{mt:'15px'}}>
                        <Button variant='contained' sx={{bgcolor:'#635ac0', fontSize:'12px', p:'11px 17px', borderRadius:'10px', '&:hover':{bgcolor:'#635ac0'}}}>Save Changes</Button>
                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default Setting