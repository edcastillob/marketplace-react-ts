import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
  const [products, setProducts] = useState([]);
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
    <>
      <Container sx={{ mt: 7 }} maxWidth="xl">
        <HeaderComponent 
        title="Zapatos Nike" 
        description="Colección 2024 Verano" 
        element={<Button variant="contained" fullWidth>Element</Button>}
        />        
      </Container>
    </>
  );
};
