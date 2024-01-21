import { Button, Container } from "@mui/material";
import React from "react";

export const LoginPage: React.FC<{}> = () => {
  return (
    <>
      <Container sx={{ mt: 7 }} maxWidth="xl">
        <Button variant="contained">Login</Button>
      </Container>
    </>
  );
};
