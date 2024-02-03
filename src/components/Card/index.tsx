import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeToCart } from "../../redux/slices/cart.slice";
import { setItem } from "../../utils/localStorage";


type CardProps ={ 
  id: any;
  name: string;
  description?: any;
  price: number;
  image: string;
  category: string
 
}

export const CardComponent: React.FC<CardProps> = ({name, description, price, image, id, category}) => {

  const [disableOptCartBtn, setDisableOptCartBtn] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productExist = useAppSelector((state) => (state.cartReducer));

  const handleAddToCart = () => { 
      dispatch(addToCart({
        id, 
        name, 
        price,
        image, 
        description,
      }))
  }

  const handleRemoveToCart = () => { 
    dispatch(removeToCart({id}))
  }

  useEffect(() => {     
    setDisableOptCartBtn( productExist.some((p) =>( p.id === id)) ) 
    setItem('cart', productExist)     
  }, [productExist, id])
  

  return (
    <Card sx={{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
      <NavLink to={`/product/${id}`}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="image"
        sx={{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
      />
      </NavLink>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1.5, height: "1.5em", overflow: "hidden" }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>
        {/* <Typography  sx={{ mt: 1.5, mb: 1.5, height: "3.5em", overflow: "hidden" }}> */}
          {category}
          </Typography>
        <Typography  sx={{ mt: 1.5, fontWeight:"bold", color:"#C8FA5F" }}>
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" size="small" fullWidth onClick={() => navigate(`/product/${id}`)}>
    Detail
  </Button>
  
  {disableOptCartBtn ? (
    <>
      <Button variant="outlined" size="small" fullWidth onClick={handleRemoveToCart}>
        Remove
      </Button>
    </>
  ) : (
    <Button disabled={disableOptCartBtn} variant="outlined" size="small" fullWidth onClick={handleAddToCart}>
      Add to Cart
    </Button>
  )}
 
      </CardActions>
    </Card>
  );
};
