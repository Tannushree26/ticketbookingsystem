import React from "react";
import "./Assets/Login.css";
import { Link } from "react-router-dom";


const Loginpage = () => {
  return (
    <div className="maincontainer">
      <div className="divmain">
        <div className="TicketBookingSystem">
          Ticket Booking System
        </div>
        <div className="IndianRailway">Indian Railway</div>
        <div className="Loginasauser">
          <span className="user"><Link to="/">Login as User</Link></span>
          <span className="user"><Link to="/registrationpage">New User Register</Link></span>
          <span className="user"><Link to="/adminpage">Login As Admin</Link></span>
        </div>
        <div className="userlogin"><b>User Login</b></div>
        <div className="username">
          <div className="top">
            <label>UserName:</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter Username"
              id="one"
            ></input>
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="first"
              placeholder="Enter Password"
              id="one"
            ></input>
            <div>
            <button className="Loginbutton"><Link to="/ticketbooking">Login</Link></button>
            
            <div>
              Already registered? <Link to="/registrationpage">Not registered yet!</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;