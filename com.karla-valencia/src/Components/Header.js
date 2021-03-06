import NavBar from "./Navbar";

import { Grid, Typography } from "@material-ui/core";


/**
 * Function creates Header that contains the header text and navbar links
 * style is handled by styles b
 * @returns 
 */

export default function Header() {

    const styles = {
    headerText: {
          fontFamily: "Roboto",
          color: "white",
          paddingTop: '.5em',
          borderBottom: "3px solid #FFFFFF",
          marginBottom: "10%"
        },
    headerGrid: {
        alignItems:"center",
        backgroundColor: "#AEADF0"
    }
      };

    return (
        <Grid container
              direction="column"
              justify="center"
              style={styles.headerGrid}>
            <Grid item>
                <Typography style={styles.headerText} variant="h4">Karla Valencia</Typography>
            </Grid>
            <Grid item>
                <NavBar />
            </Grid>
        </Grid>
    );
}