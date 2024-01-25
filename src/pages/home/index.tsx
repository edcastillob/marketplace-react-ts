import { Grid, Container, Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { IProduct } from "../../Interface/Product.interface";
import imgLoading from '../../assets/loading.gif';
import km from '../../assets/kmedina.png';


export const HomePage: React.FC<{}> = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const productsPerPage: number = 8;

  useEffect(() => {
    setLoading(true);
    const allProducts = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        setProducts(data.products);
        setTimeout(() => setLoading(false), 500);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    allProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    setPage(value);
  };

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        element={<img src={km} alt="logo" style={{width:"35%"}}/>}
        // title="Store-kM"
        description="Tienda de ventas online"
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <img src={imgLoading} alt="..." style={{width: "3%"}} />
        </Box>
      ) : (
        <>
          <div>
            {products.length !== 0 && (
              <Grid container spacing={2} direction="row" sx={{ my: 2 }}>
                {productsToShow!.map((p) => (
                  <Grid item xs={3}>
                    <CardComponent
                      key={p.id}
                      image={p.image}
                      name={p.name}
                      category={p.category}
                      price={p.price}
                      id= {p.id}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              variant="outlined"
              color="primary"
              sx={{mb: 3}}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};
