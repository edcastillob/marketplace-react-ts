import { AppBar, Avatar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/favicon.png'
import { useNavigate } from "react-router-dom";


    export const Navbar: React.FC<{}> = () => {  
        const navigate = useNavigate();
        return(
            <Box sx={{flexGrow:1}}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Container maxWidth="xl">
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar alt="Logo" src={logo}/>
                                <Typography>MarketPlace</Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={() => navigate('login')}>Login</Button>
                                <Button variant="outlined" onClick={() => navigate('register')}>Register</Button>
                                </Stack>
                            </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }