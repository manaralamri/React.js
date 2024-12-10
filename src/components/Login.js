// src/components/Login.js
import React, { useState } from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import usericon from '../assets/img/user-icon.svg';


export const Login = () => {

  const [action, setAction] = useState("Sign Up");


  return (
    <section className="login" id="login">

    <div className="login-container">
    <div className='login-header'>
    <div className='login-text' >{action}</div>
    <div className='login-underline'></div>
    </div>
    <div className='login-inputs'>
    {action === 'Login'?<div></div>:<div className='login-input'>
      <img src=''/>
      <input type='login-text' placeholder="name"/>
      </div>
  }


    <div className='login-input'>
    <img src=''/>
    <input type='email'  placeholder="email"/>
    </div>


    <div className='login-input'>
    <img src=''/>
    <input type='password'  placeholder="password"/>
    </div>




    </div>
    {action === 'Sign Up' ?<div></div>:<div className='login-forgot-password'>lost password? <span>click here!</span></div>}
    
    <div className='login-submit-container'>
    <div
  className={`login-submit ${action === "Sign Up" ? "" : "gray"}`}
  onClick={() => setAction("Sign Up")}
>
  Sign Up
</div>
<div
  className={`login-submit ${action === "Login" ? "" : "gray"}`}
  onClick={() => setAction("Login")}
>
Login
</div>



    </div>

    </div>
    </section>
  );
};
