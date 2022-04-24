import React from "react";
import "./Assets/Login.css";
import { Link } from "react-router-dom";


const Ticketbooking = () => {
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
        <div className="userlogin">Book trains</div>
        <div className="username">
          <div className="top">
            <label>TrainNumber:</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter train number"
              id="one"
            ></input>
            <br />
            <label>No of Seats:</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="No of seats"
              id="one"
            ></input>
            <div>
            <button className="Loginbutton"><Link to="/passengerdetails">Book Now</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketbooking;