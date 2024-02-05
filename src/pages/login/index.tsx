import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { ILoginType } from "../../Interface/Login.interface";
import { LoginValidate } from "../../utils/validateForm";
import { useNotification } from "../../context/notification.context";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/slices/auth.slice";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage: React.FC<{}> = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { getSuccess } = useNotification();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
    const formik = useFormik<ILoginType>({
      initialValues:{
        username: '',
        password: '',
      },
      validationSchema: LoginValidate,
      onSubmit: (values: ILoginType) => { 
        dispatch(login())
        navigate('/')
        getSuccess(JSON.stringify(values)) 
      },
    });

  return ( isAuth ?
    <Navigate to='/' replace/>
    : 
      <>
      <Container maxWidth="sm">
      <Grid
      container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "90vh" }}
        >
          <Grid item>
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
                Iniciar Sesión
              </Typography>
              <Box component="form" onSubmit={formik.handleSubmit}>
                <TextField
                  name="username"
                  margin="normal"
                  fullWidth
                  label="Usuario | Contraseña"
                  type="text"
                  sx={{ mt: 2, mb: 1.5 }}   
                  value={formik.values.username}               
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                  />
                <TextField
                  name="password"
                  margin="normal"
                  fullWidth
                  label="Contraseña"
                  type="password"
                  sx={{
                    mt: 1.5,
                    mb: 1.5,
                  }}
                  value={formik.values.password}               
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1.5, mb: 3 }}
                >
                  Enviar
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>  
  );
};

export default LoginPage;