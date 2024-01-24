import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

type CardProps ={ 
  
  name: string;
  category:string;
  price: number;
  image: string;
 
}

export const CardComponent: React.FC<CardProps> = ({name, category, price, image}) => {
  return (
    <Card sx={{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="image"
        sx={{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
      />
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
        <Button variant="contained" size="small" fullWidth>
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};
