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
    borderRadius: '20px',


};

const DeleteModal = ({ delChat, setDelChat }) => {
    // const [open, setOpen] = useState(false);

    const handleClose = () => setDelChat(false);
    const crossHandler = () => {
        setDelChat(false)
    }

    return (
        <>

            <Modal
                open={delChat}
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
                            <Grid contaier sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px', flexDirection: 'column' }}>
                                <Grid item xs={12} sx={{ textAlign: 'center', mt: '40px' }}>
                                    <Typography sx={{ fontSize: '27px', color: '#635ac0', fontWeight: '800', fontFamily: 'poppins,sans-serif' }}>Delete Chat</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '10px' }}>
                                    <Typography sx={{ fontSize: '16px', color: '#6b6b6b' }}>Are you sure you want to delete the chat ?</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '40px', pb:'70px' }}>

                                <Button variant='contained' color='error' sx={{ fontSize: '14px', borderRadius: '10px', p: '7px 20px', mr: '10px' }}>Delete</Button>
                                <Button variant='contained' sx={{ bgcolor: '#635ac0', fontSize: '13px', borderRadius: '10px', p: '7px 20px', '&:hover': { bgcolor: '#635ac0', }, ml: '10px' }}>Close</Button>

                            </Grid>

                          
                        </Paper>
                    </Grid>



                </Grid>


            </Modal>
        </>
    )
}

export default DeleteModal