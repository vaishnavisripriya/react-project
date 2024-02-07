import React from 'react'
import {Avatar, Grid, TextField,Card,Button, Alert, LinearProgress,Container} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import"./Style/Login.css";
import{Link} from 'react-router-dom'

export default function Login() {
  return (
    <body className='k1' >

    <div>
      <br/>
      <br/>
      <br/>
    <Container className="light1" component="main" maxWidth="sm" sx={{ mb: 4 ,mt:9}} style={{backgroundColor:"white",opacity:"0.8",borderRadius:"40px"}}>
    <div>
      
      <form  >
     <div className='ava1'>
      <Avatar sx={{  bgcolor: '#663300' }}>
        <FaceIcon />
      </Avatar></div>
      <h1 style={{color:"#663300" ,fontFamily:"cinzel", textAlign:'center'}}>Login</h1>
      <TextField fullwidth label="Email" placeholder="Enter your email address" name="email"
      style={{width:"300px",fontStyle:"italic"}}/>
      <br/>
      <br/>
      <TextField fullwidth label="Password" placeholder="Enter your password" name="password" type="password"
      style={{width:"300px",fontStyle:"italic"}}/>
      <br/>
      <br/>
      <Link to="Home">
      <div className="login">
      <button type="submit" style={{background:'#ffd9b3',borderRadius:"90px",width:"100px",height:"40px",borderColor:'white ',color:"#663300",align:"center",fontStyle:"italic"}}><b>Login</b></button>
      </div >
      </Link>
      <p style={{fontFamaily:"Faustina",color:"#663300",fontStyle:"italic"}}><b>or</b></p>
      <div>
      <p style={{fontFamaily:"Faustina",color:"#663300", fontStyle:"italic"}}><b>Don't have account?</b><Link to="Sign"><span><b>Sign up</b></span></Link></p>
      </div>
      <dr/>
      <dr/>
      </form>
      </div>
      
      </Container>
      </div>
      </body>
  )
}
