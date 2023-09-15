import React, { useState } from 'react';
import '../assets/css/Login.css';
import {GoogleCircleFilled, AppleFilled, FacebookFilled,GithubFilled} from '@ant-design/icons'
import { useStates } from '../services/States';
import { Link } from 'react-router-dom';
// import { useStates } from '../services/States';
const Login=() => {
  const [signUpMode, setSignUpMode] = useState(false);
 const toggleSignUpMode = () => {
    setSignUpMode(!signUpMode);
  };

  // const{setEmail}=useStates();
  const{gotoHomePage}=useStates

  return (
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className={`sign-in-form ${signUpMode ? '' : 'active'}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <input type="text" placeholder="Email" 
              // name="email" onChange={(e)=>setEmail(e.target.value)}
              />
            </div>  
            <div className="input-field">
              <input type="password" placeholder="Password" />
            </div>
            <Link to='/home'><input type="submit" value="Login" className="btn solid" /></Link>
            <p className="social-text">Or Sign in with social platforms</p>
            {/* Social media icons */}
            <div className='social-icons'>
            <GoogleCircleFilled className='google'/>
            <AppleFilled className='apple'/>
            <FacebookFilled className='facebook'/>
            <GithubFilled className='github'/>
            </div>
          </form>

          <form action="#" className={`sign-up-form ${signUpMode ? 'active' : ''}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-field">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Age" />
            </div>
            <Link to='/home'><input type="submit" className="btn" value="Sign up" /></Link> 
            <p className="social-text">Or Sign up with social platforms</p>
            {/* Social media icons */}
            <div className='social-icons'>
            <GoogleCircleFilled className='google'/>
            <AppleFilled className='apple'/>
            <FacebookFilled className='facebook'/>
            <GithubFilled className='github'/>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Welcome! Make admission procedure easy with our website, proceed to create an account
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Sign In to view our webApp
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={toggleSignUpMode}>
              Sign in
            </button>
          </div>
          <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;