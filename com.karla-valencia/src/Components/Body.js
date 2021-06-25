import { Grid, Typography, Paper, List } from "@material-ui/core"
import myImage from "../static/myImage.jpg"

export default function Body() {
   
    const styles = {
        imageStyle: {
            width: "100%",
            height: "auto",
            overflow: "auto",
            maxWidth: "550px",
            padding:"2%",
            margin:"2%",
            backgroundColor:"#FFFFFF"
        },
        imageDiv: {
            backgroundColor: "#FFFFFF"            
        },
        bioStyle: {
            backgroundColor: "#FFFFFF",
            border: "solid #F3C677 10px ",
            padding:"10%",
            margin: "2%",
            maxWidth: "60%",
            lineHeight: "2em"
        },

        bodyStyle: {
            margin:"1%"
        },
        bodyTitle: {
            color:"#565676",
            margin: "1%"
        },
        bioGrid: {
            alignItems:"center"
        },
        listStyle: {
            fontFamily: "Roboto",
            maxHeight: "300px", 
            overflow: 'auto'
        }
          };

    return(
        <Grid container style={styles.bodyStyle}>
        <Grid item align="center" xs={12} style={styles.bodyTitle}>
            <Typography variant="h6">Software Developer</Typography>
        </Grid>
        
        <Grid container
        direction="row"
        style={styles.bioGrid}
        >
      <Grid item md={6} sm={6} xs={12} align="center">
                <img style={styles.imageStyle} src={myImage}/>
      </Grid>
      <Grid item md={6} sm={6} xs={12} align="center">
          <Paper style={styles.bioStyle} alignSelf="center">
            <List style={styles.listStyle}>
                Hello! A bit about me: <br/> I was born and raised in Los Angeles, California and I have been programming since 2017. <br/>
                I have been working for Apple retail since 2015 and my current role is a Genius/Mac Technician. <br/>In January 2021, I started a 6 month internship as a Jr. Software Developer in Apple's Special Projects Group (SPG).
                <br/> I am currently looking for an opporunity to be part of a software development team where I can share ideas, grow as a developer, and create beautiful and exciting things with like minded people.<br/>
                If you would like to know more about me or my programming experience, please feel free to contact me. 
            </List>
          </Paper>
      </Grid>
  </Grid>  
  </Grid>
    )
}