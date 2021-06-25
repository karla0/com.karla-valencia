import NavBar from "./Navbar";
import './css/Header.css'

import { Grid, Typography } from "@material-ui/core";

export default function Header() {

    const styles = {
    headerText: {
          fontFamily: "Roboto",
          color: "white",
          paddingBottom: "1em",
          paddingTop: '.5em'
        }
      };

    return (
        <Grid container 
              direction="column"
              className="header-grid"
              justify="center">
            <Grid item>
                <Typography style={styles.headerText} variant="h4">Karla Valencia</Typography>
            </Grid>
            <Grid item>
                <NavBar />
            </Grid>
        </Grid>
    );
}