import React from 'react'
import'./Style/SignUp.css'
import { TextField ,Container,Avatar} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FaUser } from "react-icons/fa";
import{Link} from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='k2' >
    <Container className="light2" component="main" maxWidth="sm" sx={{ mb: 4 ,mt:9}} style={{backgroundColor:"white",opacity:"0.8",borderRadius:"40px"}}>

    <div>
      
        <form >
            <div className='ava2'>
            <Avatar sx={{  bgcolor: '#333399' }}>
              <LockOutlinedIcon />
            </Avatar></div>
            <h1 style={{color:"#333399" ,fontFamily:"cinzel", textAlign:'center'}}>SIGN UP</h1>
              <TextField fullwidth label="Email" placeholder="Enter your email address " name="email"
            style={{width:"300px",fontStyle:"italic"}}/>
            <br/>
            <br/>
            <TextField fullwidth label="Mobile Number" placeholder="Enter your mobilenumber" name="mobilenumber"
            style={{width:"300px",fontStyle:"italic"}}/>
                <br/>
                <br/>

            <TextField fullwidth label="UserName" placeholder="Enter your username" name="username" 
                style={{width:"300px",fontStyle:"italic"}}/>
            <br/>
            <br/>

            <TextField fullwidth label="Password" placeholder="Enter your password" name="password"
            style={{width:"300px"}}/>
            <div className="login">
            <br/>
            <Link to="/">
            <button type="submit" className="login-btn" style={{background:'#5353c6',borderRadius:"90px",width:"100px",height:"40px",borderColor:'#ececf9 ',color:"white",fontStyle:"italic"}}>SIGN UP</button>
            </Link>
            <br/>
            <br/>
            <br/>
            </div>
            <dr/>
            <dr/>
        </form>
            
        </div>
            
            </Container>
    </div>
    
  )
}
