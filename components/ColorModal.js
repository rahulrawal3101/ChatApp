'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, InputBase, Paper } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{ lg:550, md:550,sm:450, xs:380},

    borderRadius: '20px',


};
const arrData = [
    { colorlist: '#b71c1c' },
    { colorlist: '#c62828' },
    { colorlist: '#d32f2f' },
    { colorlist: '#e53935' },
    { colorlist: '#6a1b9a' },
    { colorlist: '#7b1fa2' },
    { colorlist: '#8e24aa' },
    { colorlist: '#9c27b0' },
    { colorlist: '#4527a0' },
    { colorlist: '#5e35b1' },
    { colorlist: '#673ab7' },
    { colorlist: '#7e57c2' },
    { colorlist: '#1976d2' },
    { colorlist: '#1e88e5' },
    { colorlist: '#2196f3' },
    { colorlist: '#42a5f5' },
    { colorlist: '#ef6c00' },
    { colorlist: '#f57c00' },
    { colorlist: '#fb8c00' },
    { colorlist: '#ffb74d' },
    { colorlist: '#388e3c' },
    { colorlist: '#4caf50'},
    { colorlist: '#66bb6a' },
    { colorlist: '#66bb6a' },
   


]

const ColorModal = ({ colors, setColors }) => {
    const handleClose = () => setColors(false);
    const [changeColor, setChangeColor] = useState(arrData)
    const crossHandler = () => {
        setColors(false)
    };
    console.log(changeColor)

    return (
        <>

            <Modal
                open={colors}
                disableAutoFocus
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ bgcolor: '#635ac053', border: '2px solid white' }}

            >
                <Grid container sx={style}>
                    <Grid item xs={12}>
                        <Paper elevation={5} sx={{ borderRadius: '20px' }}>
                            <Grid container >
                                <Grid item xs={12} sx={{ p: '10px', textAlign: 'right' }}>
                                    <ClearIcon sx={{ color: '#635ac0', fontWeight: 'bold', fontSize: '29px', cursor: 'pointer' }} onClick={crossHandler} />
                                </Grid>


                            </Grid>
                            <Grid contaier sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                                <Grid item xs={12} sx={{ textAlign: 'center', }}>
                                    <Typography sx={{ fontSize: '29px', color: '#635ac0', fontWeight: 'bold', fontFamily: 'poppins,sans-serif' }}>Change Theme</Typography>
                                </Grid>
                            </Grid>

                            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '10px', pb: '50px' }}>

                                <Grid item lg={4} md={4} sm={5} xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        {
                                            arrData.map((ele) => {
                                                return (
                                                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: '4px',cursor:'pointer', p: '4px','&:hover':{bgcolor:'#eeeeee', borderRadius:'10px'} }} >
                                                        <Box sx={{  borderRadius: '100%', bgcolor: ele.colorlist, width: '25px', height: {lg:'23px', md:'20px', sm:'18px', xs:'18px'} }}>

                                                        </Box>

                                                    </Grid>
                                                )
                                            })
                                        }

                                        

                                    </Grid>



                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>



                </Grid>


            </Modal>
        </>
    )
}

export default ColorModal