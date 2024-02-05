    import { AppBar, Avatar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material";
    import React from "react";
    import logo from '../assets/favicon.png'
    import { useNavigate } from "react-router-dom";
    import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
    import { useAppDispatch, useAppSelector } from "../redux/hooks";
    import { CartComponent } from "./Cart";
import { logout } from "../redux/slices/auth.slice";
    


        export const Navbar: React.FC<{}> = () => {  
        const { isAuth } = useAppSelector((state) => state.authReducer);
            const navigate = useNavigate();
            const [open, setOpen] = React.useState<boolean>(false);
            const items = useAppSelector((state) => state.cartReducer);
            const handleStateViewDrawer = () => setOpen((state) => !state);   
            
            const dispactch = useAppDispatch()
            const handleLogOut = () => { 
                dispactch(logout())
                navigate('/login')
             }
              
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
                                    {isAuth ? 
                                    <Button variant="contained" onClick={handleLogOut}>LogOut</Button>
                                    : 
                                    <Stack spacing={2} direction="row">
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleStateViewDrawer()}
                                        >
                                            <Badge color="error" badgeContent={items.length}>
                                            <ShoppingCartOutlinedIcon />
                                            </Badge>
                                        </IconButton>
                                    <Button variant="contained" onClick={() => navigate('login')}>Login</Button>
                                    <Button variant="outlined" onClick={() => navigate('register')}>Register</Button>
                                    </Stack>
                                    }
                                </Grid>
                                </Grid>
                            </Container>
                        </Toolbar>
                        </AppBar>
                        <CartComponent
                            open={open}
                            handleStateViewDrawer={handleStateViewDrawer}
                        />                
                </Box>
            )
        }