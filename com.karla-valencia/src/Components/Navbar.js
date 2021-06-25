import React from 'react';
import {Divider, Grid, Link } from '@material-ui/core'

import './css/NavBar.css'

export default function NavBar() {
    return(
        <Grid container spacing={2} 
              direction='row' 
              justify="center" >
            <Grid item>
                <Link href="#">Home</Link>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
                <Link href="#">Portfolio</Link>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
                <Link href="#">Bio</Link>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
                <Link href="#">Contact</Link>
            </Grid>
        </Grid>
    );
}