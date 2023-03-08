import React,{useEffect} from 'react';
import "./css/Navber.css";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navber(props) {
    let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
    console.log(location.pathname);
    // eslint-disable-next-line
    }, [location]);

    const handleLogout = ()=> {
        localStorage.removeItem('token');
        navigate("/login")
    }
    
    return (
        <>
            <div className='section'>
            <nav className="navbar fixed-top navbar-expand-lg mx-2">
                <div className="container-fluid">
                {/* <!-- Underlined search bars with buttons --> */}
        <div className='Navform'>
          
          <div className="row">
            <div className="form-group col-md-3">
              <button type="submit" className="btn btn-primary rounded-pill btn-block shadow-sm">Search</button>
            </div>
            <div className="form-group col-md-9">
              <input id="exampleFormControlInput6" type="email" placeholder="What're you searching for?" className="form-control form-control-underlined"/>
            </div>
          </div>
        </div>
        {/* <!-- End --> */}
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} aria-current="page" to="/">Feed</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/groups"? "active": ""}`} to="/groups">Groups</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/videos"? "active": ""}`} to="/videos">Videos</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Account
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className={` nav-link ${location.pathname === "/Settings"? "active": ""}`} to="/Settings">Settings</Link></li>
                                <li><Link className={` nav-link ${location.pathname === "/HelpCenter"? "active": ""}`} to="/HelpCenter">Help Center</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className={` nav-link ${location.pathname === "/Privacy&Terms"? "active": ""}`} to="/Privacy&Terms">Privacy & Terms</Link></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                    {/* <button className='login-btn bg-primary my-20 mx-2' href="/">Login</button>
                    <button className='Signup-btn bg-info my-20 mx-3' href="/">Signup</button> */}
                    <ul className="wrapper">
                    <Link to="user:id/chat"><li className="icon facebook">
                        <span className="tooltip">Chat</span>
                        <span><i className="far fa-comment-alt"></i></span>
                    </li></Link>
                    <Link to="/Settings"><li className="icon twitter">
                        <span className="tooltip">Settings</span>
                        <span><i className="fas fa-cog"></i></span>
                    </li></Link>
                    <Link to="/Notifications"><li className="icon instagram">
                    <span className="tooltip">Notifications</span>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <span><i className="far fa-bell"></i></span>
                    </li></Link>
                    <Link to="/userprofile">
                        <li className="icon github">
                    <span className="tooltip">Profile</span>
                        <span><i className="far fa-user"></i></span>
                    </li></Link>
                    
                    
                    {!localStorage.getItem('token') ?<section className='wrapperSL'>
                    <Link to="/signup"><li className="icon youtube">
                    <span className="tooltip">SignUp</span>
                    <span><i className="fas fa-sign-in-alt"></i></span>
                    </li></Link>
                    <Link to="/login"><li className="icon youtube">
                    <span className="tooltip">Login</span>
                    <span><i className="fas fa-sign-in-alt"></i></span>
                    </li></Link></section>:
                    <Link><li className="icon youtube" onClick={handleLogout}>
                        <span className="tooltip">Logout</span>
                        <span><i className="fas fa-sign-out-alt"></i></span>
                    </li></Link>}
                    </ul>
                    
                </div>
            </nav>
            </div>
        </>
    );
}

export default Navber;
