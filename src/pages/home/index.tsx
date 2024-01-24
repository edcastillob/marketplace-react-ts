import { Grid, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { IProduct } from "../../Interface/Product.interface";

export const HomePage: React.FC<{}> = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    allProducts();
  }, []);
  console.log(products)

  return (
    
      <Container maxWidth="xl">
        <HeaderComponent 
        title="Zapatos Nike" 
        description="Colección 2024 Verano" 
        element={<Button variant="contained" fullWidth>Element</Button>}
        />       
        <div>
          {
            products.length !== 0 && 
            <Grid container spacing={2} direction="row">
              {
                products!.map((p) => (
                  <Grid item xs={3}>
                    <CardComponent 
                    key={p.id}
                    image={p.image} 
                    name={p.name}
                    category={p.category}
                    price={p.price}
                    />
                  </Grid>
                ))
              }
            </Grid>
          }
        </div>
      </Container>
    
  );
};
