import React from "react";
import { useState } from "react";
import "./Assets/Registration.css";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registrationpage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);
    console.log(selectedFile);
  };
  const navigate = useNavigate();
  const btnHandler = async() =>{
    toast.success("Register",
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   
    setTimeout(()=>navigate("/"),4000);

  };
  return (
    <div className="maincontainer">
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>

      <div className="divmain">
        <div className="TicketBookingSystem">
        Ticket Booking System
        </div>
        <div className="IndianRailway">Indian Railway</div>
        <div className="Loginasauser">
        <span className="user"><Link to="/">Login as User</Link></span>
          <span className="user"><Link to="/registrationpage">New User Register</Link></span>
          <span className="user"><Link to="/Adminpage">Login As Admin</Link></span>
        </div>
        <div className="userlogin">New User Registration</div>
        <div className="usernames">
          <div className="top">

            <label>FirstName</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter first name"
              id="one"
            ></input>
            <br />
            <label>LastName</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter last name"
              id="one"
            ></input>
            <br />
            <label>UserName</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter Username"
              id="one"
            ></input>
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              name="first"
              placeholder="Enter Password"
              id="one"
            ></input>
            <br />
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              name="first"
              placeholder="Enter Password again"
              id="one"
            ></input>
            <br />
            <br />
            <div>
              <div className="beckparent">
                <span>
                  <input type="checkbox" />
                </span>
                <span>Are you agree all terms and conditions!!</span>
              </div>
            
              <button className="Loginbutton"onClick={btnHandler} >Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrationpage;