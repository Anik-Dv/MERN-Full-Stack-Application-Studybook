import React, { useState } from 'react';
import "./css/Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(props) {

  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    //API CALL Login Application.
    const res = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      cors: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: Credentials.email, password: Credentials.password })
    });
    const json = await res.json();
    console.log(json);
    if(json.success){
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account Logged in Successfuly", "success")
      navigate("/");
    }
    else{
      props.showAlert("Invalid Credentials", "danger");
    }
  }

  const OnChange = (e)=> {
    setCredentials({...Credentials, [e.target.name]: e.target.value})
  };

  return (
    <>

      <div className="blob"></div>
      <form className='loginForm' onSubmit={HandleLogin}>
        <h3>Login Here</h3>

        <label className='Loglabal' htmlFor="email">Username</label>
        <input className='Loginput' type="email" placeholder="Enter Your Email" id="email" name="email" onChange={OnChange} value={Credentials.email} />

        <label className='Loglabal' htmlFor="current-password">Password</label>
        <input className='Loginput' type="current-password" placeholder="Enter Your Password" id="password" name='password' onChange={OnChange} value={Credentials.password} />

        <button className='Logbtn'>Log In</button>
        <Link className='text-reset text-decoration-none' to='/signup'>Don't Have a Account - Signup</Link>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>

    </>
  );
}

export default Login;
