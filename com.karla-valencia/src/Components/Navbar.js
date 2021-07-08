import React from 'react';
import {Divider, Grid, Link, Typography } from '@material-ui/core'


export default function NavBar() {

    const styles = {
        navbarLink: {
          fontFamily: "Roboto",
          color: "white",
          padding: "1em"
        },
        navbarGrid: {
            paddingBottom:"1em"
        },
        navbarName: {
            color:"#FFFFFF",
            margin: "2%",
            borderBottom: "3px solid #FFFFFF",
            justifyContent: "center"

        }
      };

    return(
        <Grid container justify="center" >
        <Grid container spacing={2}
              direction='row'
              justify="center"
              className="navbar-grid"
              style={styles.navbarGrid}
              >
            <Grid item>
                <Link style={styles.navbarLink} href="#">Home</Link>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
                <Link style={styles.navbarLink} className="navbar-link" href="#">Portfolio</Link>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
                <Link style={styles.navbarLink} className="navbar-link" href="#">Bio</Link>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
                <Link style={styles.navbarLink} className="navbar-link" href="#">Contact</Link>
            </Grid>
        </Grid>
        </Grid>
    );
}