import Header from "./Header";
import Body from "./Body";
import { Grid } from "@material-ui/core";

export default function HomePage() {
    const styles = {
        homeStyle: {
            alignItems:'center'
            }
          };
    return (
        <>
        <Header />
        <Grid container
              justify="center"
              direction="row"
              style={styles.homeStyle}>
            <Grid item>
                <Body/>
            </Grid>
        </Grid> 
        </>
    );
}