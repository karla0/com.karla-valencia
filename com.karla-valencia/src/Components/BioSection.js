import { Link } from "@material-ui/core";
import myImage from "../static/images/myImage.jpg"
export default function BioSection() {

    const styles ={
        linkStyle : {
            color: "palevioletred",
        }
    }
    
    return (
        <div className="homepage-container">
            <div className="homepage-item image-div"><img className="img" src={myImage}/></div>
            <div className="homepage-item bio">
                <h1 className="bio-hello">Hello! A bit about me: </h1><br/><p className="bio-text">I was born and raised in Los Angeles, California and I have been programming since 2017. <br/>
                I have been working for Apple retail since 2015 and my current role is a Genius/Mac Technician. <br/>
                In January 2021, I started a 6 month internship as a developer in Apple's Special Projects Group (SPG) 
                which I completed in June 2021.
                <br/> I am currently looking for an opportunity to be part of a software development team where I can share ideas, grow as a developer, and create beautiful and exciting things with like minded people.<br/>
                If you would like to know more about me or my programming experience, please feel free to contact me. <br/> <Link style={ styles.linkStyle } to="#">Click here for contact info</Link></p>
            </div>
        </div>
    )
}