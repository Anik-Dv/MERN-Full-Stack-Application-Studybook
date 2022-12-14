import React from 'react';
import "./css/Userprofile.css";
import { Link } from 'react-router-dom';
function Userprofile(props) {
    const hendlePost = () => {
        console.log("profile")
        props.showAlert("test save profile btn", "success")
    }
  return (
    <>
     <div className="container rounded bg-white mt-5">
        <div className="row">
            <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://st.depositphotos.com/1137241/3726/i/600/depositphotos_37263133-stock-photo-bright-fashion-girl.jpg" width="90" height="" alt='User_img'/><span className="font-weight-bold">John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
            </div>
            <div className="col-md-8">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                          <Link to="/"><h6 style={{"color": "black"}}>Back to home</h6></Link>
                        </div>
                        <h6 className="text-right">Your Profile</h6>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="first name" value="John" text/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="Doe" placeholder="Doe"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" value="john_doe12@bbb.com"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="+19685969668" placeholder="Phone number"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="address" value="D-113, right avenue block, CA,USA"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="USA" placeholder="Country"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" value="Bank of America"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="043958409584095" placeholder="Account Number"/></div>
                    </div>
                    <div className="mt-5 text-right"><button className="btn btn-primary profile-button" onClick={hendlePost} type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
    </div> 
    </>
  );
}

export default Userprofile;
