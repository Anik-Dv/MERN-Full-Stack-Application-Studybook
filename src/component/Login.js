import React from 'react';
import "./css/Login.css";
function Login() {

  return (
    <>
      
    {/* <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div> */}
	<div className="blob"></div>
    <form className='loginForm'>
        <h3>Login Here</h3>

        <label className='Loglabal' for="username">Username</label>
        <input className='Loginput' type="text" placeholder="Email or Phone" id="username"/>

        <label className='Loglabal' for="password">Password</label>
        <input className='Loginput' type="password" placeholder="Password" id="password"/>

        <button className='Logbtn'>Log In</button>
		<a className='text-reset text-decoration-none' href='/'>Don't Have a Account - Signup</a>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
	
    </>
  );
}

export default Login;
