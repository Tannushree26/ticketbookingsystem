import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Assets/passengerdetails.css";


const Passengerdetails= () => {
  return (
    <div className="maincontainer">
      <div className="divmain">
      <div className="TicketBookingSystem">Ticket Booking System</div>
        <div className="IndianRailway">Indian Railway</div>
        <div className="userlogins">Passenger Details</div>
        <div className="Addtrain">
          <div className="top">

            <label>First Name</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter your first name"
              id="one"
            ></input>
            <br />

            <label>Last Name</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter your last name"
              id="one"
            ></input>
            <br/>

            <label>Email</label>
            <br />
            <input
              type="email"
              name="first"
              placeholder="Enter your email"
              id="one"
            ></input>
            <br/>

             <label>Phone Number</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter your phone number"
              id="one"
            ></input>
            <br/>
           
            <div>
            <button className="Loginbutton"><Link to="/payment">Pay now</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passengerdetails;