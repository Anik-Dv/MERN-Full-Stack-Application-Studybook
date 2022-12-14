import React from 'react';
import "./css/signup.css";

function Signup() {
    return (
        <>
            <div className="blob"></div>
            <form className='signupForm'>
                <h3>Signup Here</h3>
                <small>Create Your Account Here</small>

                <label className='Loglabal' htmlFor="username">Username</label>
                <input className='Loginput' type="text" placeholder="User Name Hare" id="username" required maxLength={4}/>

                <label className='Loglabal' htmlFor="username">Email</label>
                <input className='Loginput' type="email" placeholder="Type Your Email Hare" id="email" required />

                <label className='Loglabal' htmlFor="password">Password</label>
                <input className='Loginput' type="current-password" placeholder="Give Your Password" id="password" required maxLength={6} />

                <label className='Loglabal' htmlFor="username">Confirm Password</label>
                <input className='Loginput' type="new-password" placeholder="Retype Your Password" id="cpassword" required maxLength={6} />
                <button className='Logbtn'>Sign In</button>
                <a className='text-reset text-decoration-none' href='/'>Don't Have a Account - Signup</a>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </>
    );
}

export default Signup;
