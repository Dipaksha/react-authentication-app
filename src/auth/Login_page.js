import React, { useState } from "react";
import './login_page.css';
import { Container, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import {Link} from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");
    const [password, setPassword] =  useState("");
    const [passError, setPassErrors] = useState(false);
    const [passHelperText, setPassHelpertext] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const Regex = {
        validateEmail: function(val) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
        }    
    };
    const inputEvent = (event) => {
        let emailValue = event.target.value;
        setEmail(emailValue);
        if(emailValue === ""){
            setEmailError(true);
            setEmailHelperText("Please Enter Email");
        }
        if(!Regex.validateEmail(emailValue.trim())) {
            setEmailError(true);
            setEmailHelperText("Enter Valid Email");
        }
        else{
            setEmailError(false);
            setEmailHelperText(" ");
        }
    }

    const passEvent = (event) =>{
        let passValue = event.target.value.trim();
        setPassword(passValue); 
        if(passValue === ""){
            setPassErrors(true);
            setPassHelpertext("Please Enter Passoword");
        }
        if(passValue.length < 6){
            setPassErrors(true);
            setPassHelpertext("Password length is low");
        }
        else{
            setPassErrors(false);
            setPassHelpertext(" ");
        }
    }

    const onSubmits = ()=> {
        if(!Regex.validateEmail(email.trim())) {
            setEmailError(true)
            setEmailHelperText("Enter Valid Email"); 
        }
        if(email === ""){
            console.log(email);
            setEmailError(true)
            setEmailHelperText("Please Enter Email");
        }
        if(password.trim() === ""){
            setPassErrors(true)
            setPassHelpertext("Please Enter Password");
        }
        if(password.length < 6){
            setPassErrors(true)
            setPassHelpertext("Password length is low");
        }
		
		setIsLoggedIn(true);
		localStorage.setItem('emailName', email);
		localStorage.setItem('myData', isLoggedIn);
		
        
    }
    return(
        <Container maxWidth="xs">
                <div style={{marginTop:"64px", alignItems:"center", flexDirection:"column"}}>

                <form noValidate autoComplete="off">
                    <TextField 
                        id="email" 
                        name="email"
                        type="email"
                        label="Email Address" 
                        onChange={inputEvent}
                        variant="outlined"
                        error={emailError}
                        helperText={emailHelperText}
                        fullWidth autoFocus required
                    />
                    <TextField 
                        id="password" 
                        name="password"
                        type="password"
                        label="Password" 
                        onChange={passEvent} 
                        variant="outlined" 
                        style={{marginTop: '10px'}}
                        error={passError}
                        helperText={passHelperText}
                        fullWidth autoFocus required
                    />

                    <Grid item>
                        <FormControlLabel control={
                            <Checkbox
                                color="primary"
                            />
                        } label="Remember me" />
                    </Grid>

                    <Grid item>
						<Button
							onClick={onSubmits}
							style={{ marginTop:'10px',textTransform:"none"}}
                            variant="contained" 
                            color="primary"
							href="/home"
                            disabled={(!email || emailError) || (!password || passError)}
                            fullWidth required>
                            Sign In
						</Button>
                    </Grid>

                    <Grid item style={{ marginTop: '8px' }}>
                    <Link to="#" 
                    style={{ textTransform: "none" }} 
                    variant="text" color="primary">Forgot password ?</Link>

                    <Link to="#"
                    style={{ textTransform: "none", float:"right" }} 
                    variant="text" color="primary">Don't have an account? Sign Up</Link>

                    </Grid>
                </form>
                
                </div>
        </Container>
        
    )
}

export default Login;