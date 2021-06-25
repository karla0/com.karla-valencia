import NavBar from "./Navbar";
import './css/Header.css'

import { Grid, Typography } from "@material-ui/core";

export default function Header() {
    return (
        <Grid container 
              direction="column"
              className="header-grid"
              justify="center">
            <Grid item>
                <Typography className="header-title" variant='h4'>Karla Valencia</Typography>
            </Grid>
            <Grid item>
                <NavBar />
            </Grid>
        </Grid>
            
      
        
    );
}