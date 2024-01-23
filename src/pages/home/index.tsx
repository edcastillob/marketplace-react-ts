import { Button, Container } from "@mui/material";
import React from "react";

export const HomePage: React.FC<{}> = () => {

  return (
    <>
      <Container sx={{ mt: 7 }} maxWidth="xl">
        <Button variant="contained">Error Site</Button>
        <Button variant="contained">Success Site</Button>
        
      </Container>
    </>
  );
};
