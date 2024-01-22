import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const LoginPage: React.FC<{}> = () => {

  type UserData ={
    username: string,
    password: string,
  }

   const [loginData, setLoginData] = useState<UserData>({
      username:"",
      password:""
   });

const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => { 
  setLoginData({
    ...loginData,
    [e.target.name]: [e.target.value],
  })
}

const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {  
  e.preventDefault();
  console.log(loginData)
}
   return (
    <>
      <Container maxWidth="sm">
        <Grid container direction="column" alignItems="center" justifyContent="center" sx={{minHeight: "90vh"}}>
          <Grid item>
            <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
              <Typography variant="h4" sx={{mt: 1, mb: 1}} >Iniciar Sesión</Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                 name="username" 
                 margin="normal" 
                 fullWidth 
                 label="Usuario | Contraseña" 
                 type="text" 
                 sx={{mt: 2, mb: 1.5}} 
                 required 
                 onChange={dataLogin}
                 />
                <TextField
                 name="password" 
                 margin="normal" 
                 fullWidth 
                 label="Contraseña" type="
                 password" sx={{
                  mt: 1.5, mb: 1.5}} 
                 required 
                 onChange={dataLogin}
                />                
                <Button type="submit" fullWidth variant="contained"  sx={{mt: 1.5, mb: 3}}>Enviar</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
