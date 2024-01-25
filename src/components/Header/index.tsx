import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";


type HeaderProps ={
    title?: string;
    description?: string;
    element?: React.ReactNode | null;
}

    export const HeaderComponent: React.FC<HeaderProps> = ({description, title, element}) => { 
        return (
           <div>
             <Box sx={{width: "100%", height:"350px"}}>
                <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{height:"100%"}}
                >
                    <Grid item xs={5}>
                        <Grid
                        container 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{height:"100%"}}
                        >
                            {element !== undefined && <Grid item sx={{mt: 4, width: "100%"}}>{element}</Grid>}
                            <Grid item>
                                <Typography variant="h2">{title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" sx={{mt: 2}}>{description}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider/>
           </div>
        )
    }