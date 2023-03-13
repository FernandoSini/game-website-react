import { makeStyles } from "@mui/styles";
import *as React from "react";
import { Redirect } from "react-router-dom";
import gamingImage from "../assets/images/gaming.png";
import { useAuth } from "../context/auth";



const useStyles = makeStyles({
        container: {
            height:"100vh",
            backgroundColor:"#220F5A"
        }

    });
function Home() {

    const {signed}= useAuth();
    const classes = useStyles();

    if(!signed){
        return <Redirect to={"/landing"}/>
    }
    return (<div className={classes.container}>

    </div>);
}

export default Home;