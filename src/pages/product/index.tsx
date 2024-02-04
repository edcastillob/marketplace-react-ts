import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { IProduct } from "../../Interface/Product.interface";
import { Box, Chip, Container, Divider, Grid, Typography } from "@mui/material";
import imgLoading from '../../assets/loading.gif';
import km from '../../assets/kmedina.png'
import back from '../../assets/back.png'



const ProductPage: React.FC = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<IProduct | null>();


    useEffect(() => {
        setLoading(true);
        const productDetail = async () => {
          try {
            const response = await fetch("/products.json");
            const data = await response.json();
            console.log(data)
            const result = data.products.find((p: {id: string}) => p.id == id);
            setProduct(result);
            setTimeout(() => setLoading(false), 300);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        productDetail();
      }, [id]);
  return (
    <Box sx={{width: "100%"}}>  
    <Container maxWidth="xl">
    {loading ? (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <img src={imgLoading} alt="..." style={{width: "3%"}} />
      </Box>
    ) : (
   
        <div>
          {product && (
            <Grid container spacing={2} direction="row" sx={{ my: 2 }} columnSpacing={2}>             
                <Grid item xs={6}>
                  <NavLink  to={'/'}>
                  <img src={km} alt="logo" style={{width:"30%"}} />
                  </NavLink>               
                  <Typography sx={{my:2}} variant="h4">{product!.name}</Typography>
                  <Divider />
                  <Typography sx={{my : 2}}>{product!.description}</Typography>
                  <Divider />
                  <Typography sx={{my : 2}} variant="h5">${product!.price}</Typography>
                  <Divider />
                  <Chip sx={{mt: 2}} color="primary" variant="outlined" label={product!.category}/>  
                  <NavLink style={{ display: "flex", alignItems: "flex-start" }} to={'/'}>
                     <img src={back} alt="back" style={{ width: "5%" }} />
                  </NavLink>               
                </Grid>
                <Grid item xs={6}>
                 <img src={product!.image} alt="img" style={{width: "60%", borderRadius: "0.5em"}} />
                </Grid>
              
            </Grid>
          )}
        </div>
       
     
    )}
    </Container> 
  </Box>
);
};


export default ProductPage;