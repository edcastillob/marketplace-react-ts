import { Button, Container } from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {
  const { getError } = useNotification();
  const handleClick = () => { getError('Error 500') }
  return (
    <>
      <Container sx={{ mt: 7 }} maxWidth="xl">
        <Button onClick={handleClick} variant="contained">Start Site</Button>
      </Container>
    </>
  );
};
