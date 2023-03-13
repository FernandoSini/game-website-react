import { makeStyles, withStyles } from "@material-ui/styles";
import { Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel } from "@mui/material";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import * as React from "react";
import AuthContext, { useAuth } from "../../context/auth";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, Redirect } from 'react-router-dom';

function Login() {
    const useStyles = makeStyles({
        containerBackground: {
            background: '#180E54',
            width: '100%',
            height: '100vh',
            display: "flex",
            alignItems: "center", justifyContent: "center",


        },
        textField: {
            color: "white",
            marginBottom: 20,

            "& label": {
                color: "white",

            },
            "& label.Mui-focused": {
                color: "white",
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: "white",

            },
            "& .MuiInput-underline:before": {
                borderBottomColor: "white",

            },
            "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white"
            },

            "& .MuiOutlinedInput-root": {
                color: "white",
                borderRadius: 25,
                "& fieldset": {
                    borderColor: "white"
                },
                "&:hover fieldset": {
                    borderColor: "yellow"
                },
                "&.Mui-focused fieldset": {
                    borderColor: "white"
                }
            },

            '& .MuiFilledInput-root': {
                //  backgroundColor: 'lightblue',
                //border: '1px solid red'
            }
        },
        columnTextFields: {
            display: 'flex',
            flexDirection: 'column',
            // backgroundColor: "white",
            justifyContent: "center",
            width: "50%",
            height: "40vh",
            paddingRight: 20,
            paddingLeft: 20
        },
        circularProgress: {
            display: 'flex',
            justifyContent: 'center'
        }


    });
    const classes = useStyles();
    const { signed, Login } = useAuth();
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const { register, handleSubmit, reset, watch, } = useForm();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    /* const makeLogin = async (username: string, password: string) => {
        /* await Login({
            username: username,
            password: password
        }).then((response) => { })
            .catch(error => { }); 
        console.log(username);
    } */

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setUsername(e.currentTarget.value);
    }


    React.useEffect(() => {
        const keyDownHandler = async (event: any) => {



            if (event.key === 'Enter') {
                event.preventDefault();
                console.log('User pressed: ', event.key);
                // 👇️ call submit function here
                //handleEnter(event);
                setLoading(true);
                handleSubmit(async () => await Login({ username, password })
                    .then((response: any) => {
                        setLoading(false);
                        setError("");
                    })
                    .catch((error: any) => {
                        setLoading(false)
                        setError(error);
                    }))();
           
            }
        };


        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [username, password, Login, handleSubmit]);

    const handleClick = async (event: any) => {
        event.preventDefault();



        console.log('teste: ', event.type);
        // 👇️ call submit function here
        //handleEnter(event);
        setLoading(true);

        handleSubmit(async (data) => await Login({ username, password })
            .then((response: any) => {
                 setLoading(false);
                setError("");
            })
            .catch((error: any) => {
             setLoading(false);
                setError(error);
            }))();
    
    }




    if (signed) {
        return <Redirect to="landing" />
    }

    return (

        <div className={classes.containerBackground} >
            <form method="post" className={classes.columnTextFields} onSubmit={(ev) => handleClick(ev)}>
                <TextField
                    className={classes.textField}
                    onChange={(e) => handleChangeUsername(e)}
                    value={username}
                    name="username"
                    variant="outlined"
                    label="Username"
                />

                <TextField
                    //sx={{ mt: 2, mb: 2 }}
                    className={classes.textField}
                    type={"password"}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    // helperText="Password"
                    variant="outlined"
                    label="Password"
                    value={password}
                    //  onKeyDown={(ev) => console.log(ev.key)}
                    InputProps={{
                        inputProps: { style: { color: 'white', } },

                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                    {showPassword ?
                                        <Visibility style={{ color: "white" }} />
                                        : <VisibilityOff style={{ color: "white", opacity: 0.5 }} />}
                                </IconButton>
                            </InputAdornment>)
                    }}

                />

                <Button disableRipple variant="text" sx={{
                    color: "white",
                    justifyContent: "end",
                    mb: 2,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: "white",
                        opacity:0.8
                    },
                    textTransform: "none"
                }}
                    href='/forgot-password'>
                    Forgot password?
                </Button>

                {isLoading ?
                    <div className={classes.circularProgress}>
                        <CircularProgress sx={{ color: "white" }} />
                    </div>
                    : <Button
                        sx={{
                            height: 50,
                            backgroundColor: '#766AAA',
                            borderRadius: 20,
                            '&:hover': {
                                backgroundColor: '#766AAA',
                                opacity: 0.8
                            }
                        }}

                        disableElevation
                        variant="contained"
                        onClick={async (ev) => handleClick(ev)}
                        onKeyDown={(ev) => console.log(ev.key)}>
                        Login
                    </Button>}
            </form >
        </div>
    );
}
export default Login;