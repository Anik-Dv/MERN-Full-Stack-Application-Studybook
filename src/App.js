import React,{ useState } from "react";
import './App.css';
import Home from './component/Home';
import Navber from './component/Navber';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userprofile from './component/Userprofile';
// import Alert from "./component/Alert";
import PostsState from "./Context/post/PostsState";
import Login from "./component/Login";
import Signup from "./component/Signup";

const App = () => {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
   <PostsState>
   <Router>
   <Navber/>
   {/* <Alert alert={alert} /> */}
   <div className='container'>
   <Routes>
   <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
   <Route exact path="/userprofile" element={<Userprofile showAlert={showAlert} />}></Route>
   <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
   <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
   </Routes>
   </div>
   </Router>
   </PostsState>
   </>
  );
};

export default App;
