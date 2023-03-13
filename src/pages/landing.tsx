import { Image } from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography, } from "@mui/material";
import * as React from 'react';
import CustomAppBar from "../components/CustomAppBar";
import gamingImage from '../assets/images/gaming.png';
import { styled } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${gamingImage})`
}));
const useStyles = makeStyles({
    landing: {
        display: 'flex',
        background: '#180E54',
        width: '100%',
        height: '100vh',
    },
    row: {
        display: "flex",
        // backgroundColor:"white",
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
    },

    container: {
        backgroundImage: `url(${gamingImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        //position: 'absolute',
        display: "grid",
        top: '0px',
        left: '0px',
        width: '70%',
        height: '100%',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
    containerText: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        color: 'red',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: "column",
        height: "80vh",
        width: "100%",
        fontSize: 35,
        fontFamily: "MochiyPopOne",
    },
    subText:{
       marginTop:35
    }
});

function Landing() {

    const classes = useStyles();
    /*return (

        <Box className="box" height={'100vh'} width={'100%'} bgcolor={'#180E54'} sx={{}}>
            {/*<Stack>
                <CustomAppBar />
                <Box display={"flex"}
                    component="img"
                    justifyContent={"flex-start"}
                    height={'100vh'}
                    width={'50%'}
                    src={gamingImage} />
    </Stack>}

            <Grid container >
               
               {/*  <Box display={"flex"}
                    component="img"
                    justifyContent={"flex-start"}
                    height={'100vh'}
                    width={'50%'}
                    src={gamingImage} >

                </Box> }
                <Box display={"flex"}
                    height={'100vh'}
                    width={'50%'}
                ></Box>
            </Grid>


        </Box>
    );*/
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    return (

        <div className={classes.landing}>
            <CustomAppBar />
            <div className={classes.row}>
                <Box display={"flex"}
                    className={classes.container} >
                    {/*<div className={classes.logo}>
                        {windowSize[0]}
    </div>*/}
                </Box>
                <div className={classes.containerText}>
                    <div>
                        <Typography variant="h3" sx={{
                            color: "white",
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: 35,
                            textAlign: "center"

                        }}>Sua vez!</Typography>
                        <Typography variant="h3" sx={{
                            color: "white",
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: 35,
                            textAlign: "center"
                        }}>Dê a sua melhor jogada</Typography>
                    </div>
            
                    <div className={classes.subText}>
                        <Typography variant="h2" sx={{
                            color: "white",
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            fontSize: 20,
                            textAlign: "center"

                        }}>{"E turbine seu alcance nas plataformas digitais."}</Typography>
                        <Typography variant="h2" sx={{
                            color: "white",
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            fontSize: 20,
                            textAlign: "center"

                        }}>{"Mostre para eles quem é o rei dos jogos!"}</Typography>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Landing;