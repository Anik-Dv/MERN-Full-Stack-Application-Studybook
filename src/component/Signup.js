import React,{ useState } from 'react';
import "./css/signup.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Signup(props) {

    const [createUser, setCreateUser] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();

    const handleSingup = async (e)=> {
        e.preventDefault();
        //make destuckcer component
        const {name, email, password} = createUser
        
         //API CALL SignUp Application
         const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
            method: "POST",
            headers: { "Content-Type": "application/json"
          },
            body: JSON.stringify({name, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          localStorage.setItem('token', json.authtoken);
          setCreateUser({name, email, password})
          props.showAlert("Account Logged in Successfuly", "success")
          navigate("/")
      }
      else{
        //when signup is false then show alert message
        props.showAlert("Invalid Credentials", "danger");
      }
    }

    const OnChange = (e)=> {
        setCreateUser({...createUser, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className="blob"></div>
            <form className='signupForm' onSubmit={handleSingup}>
                <h3>Signup Here</h3>
                <small>Create Your Account Here</small>

                <label className='Loglabal' htmlFor="name">Username</label>
                <input className='Loginput' type="text" placeholder="User Name Hare" id="name" name='name' onChange={OnChange} value={createUser.name} required />

                <label className='Loglabal' htmlFor="email">Email</label>
                <input className='Loginput' type="email" placeholder="Type Your Email Hare" id="email" name='email' onChange={OnChange} value={createUser.email} required />

                <label className='Loglabal' htmlFor="current-password">Password</label>
                <input className='Loginput' type="current-password" placeholder="Give Your Password" id="password" name='password' onChange={OnChange} value={createUser.password} required maxLength={6} />

                <label className='Loglabal' htmlFor="new-password">Confirm Password</label>
                <input className='Loginput' type="new-password" placeholder="Retype Your Password" id="cpassword" name='cpassword' onChange={OnChange} value={createUser.cpassword} required maxLength={6} />
                <button className='Logbtn'>Sign In</button>
                <Link className='text-reset text-decoration-none' to='/login'>I'm Have a Account - Login</Link>
                <div className="social">
                    <div className="go" href='/' ><i className="fab fa-google"></i>  Google</div>
                    <div className="fb" href='/' ><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </>
    );
}

export default Signup;
