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
    width:{ lg:550, md:550,sm:450, xs:400},
    borderRadius:'20px',display:'flex', justifyContent:'center', alignItems:'center'
};

const NickNameModal = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
    const crossHandler=()=>{
        setOpen(false)
    }

    return (
        <>

            <Modal
                open={open}
                disableAutoFocus
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{bgcolor:'#635ac053',border:'2px solid white' }}
                
            >
                <Grid container sx={style}>
                    <Grid item lg={12} md={12} sm={10} xs={10}>
                        <Paper elevation={5} sx={{borderRadius:'20px'}}>
                            <Grid container >
                                <Grid item xs={12} sx={{  p: '10px', textAlign: 'right' }}>
                                    <ClearIcon sx={{ color: '#635ac0', fontWeight: 'bold', fontSize: '29px' , cursor:'pointer'}} onClick={crossHandler} />
                                </Grid>


                            </Grid>
                            <Grid contaier sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                                <Grid item xs={12} sx={{ textAlign: 'center', mt: '40px' }}>
                                    <Typography sx={{ fontSize: '27px', color: '#635ac0', fontWeight: '800', fontFamily:'poppins,sans-serif' }}>Change nickname</Typography>
                                </Grid>
                            </Grid>

                            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px', pb:'70px' }}>

                                <Grid item xs={6.1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                                    <Box sx={{ width: '100%', p: '9px', borderRadius: '8px', display: 'flex', alignItems: 'center', border: '1px solid black' }}>

                                        <InputBase placeholder='Nick Name' sx={{ fontSize: '15px', color: '#5d54c2', }} fullWidth size='small' />
                                    </Box>
                                </Grid>
                                <Grid item xs={6.1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                                    <Button variant='contained' sx={{ bgcolor: '#635ac0', width: '100%', fontSize:'13px', pt:'10px', pb:'10px', borderRadius:'10px', textTransform:'lowercase','&:hover':{bgcolor: '#635ac0',} }}>Change</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>



                </Grid>

             
            </Modal>
        </>
    )
}

export default NickNameModal