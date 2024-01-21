import { AppBar, Avatar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/favicon.png'


    export const Navbar: React.FC<{}> = () => {  
        return(
            <Box sx={{flexGrow:1}}>
                <AppBar position="fixed">
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
                                <Button variant="contained">Login</Button>
                                <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }