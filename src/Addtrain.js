import React from "react";
import { Link } from "react-router-dom";
import "./Assets/Addtrain.css";


const Addtrain= () => {
  return (
    <div className="maincontainer">
      <div className="divmain">
      <div className="TicketBookingSystem">Ticket Booking System</div>
        <div className="IndianRailway">Indian Railway</div>
        
      
        <div className="userlogins">Add train</div>
        <div className="Addtrain">
          <div className="top">

            <label>Train Number</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter train number"
              id="one"
            ></input>
            <br />

            <label>Name of Train</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter train name"
              id="one"
            ></input>
            <br/>

            <label>Departure City</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter departure city"
              id="one"
            ></input>
            <br/>

             <label>Arrival City</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Station name"
              id="one"
            ></input>
            <br/>

            <label>Date of Departure</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter date"
              id="one"
            ></input>
            <br/>

            <label>Estimated Departure Time</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter the time"
              id="one"
            ></input>
            <br/>


            <label>Fare</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter the fare amount"
              id="one"
            ></input>
            <br/>


            <div>
            <button className="Loginbutton">Add Train</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtrain;