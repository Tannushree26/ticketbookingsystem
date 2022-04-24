import React from "react";
import { Link , Navigate, useNavigate} from "react-router-dom";
import "./Assets/passengerdetails.css";
import { ToastContainer, toast} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import {Button} from "reactstrap";


const Payment= () => {
  const navigate = useNavigate();
  const btnHandler = async() =>{
    toast.success("Payment done",
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
      <div className="TicketBookingSystem">Ticket Booking System</div>
        <div className="IndianRailway">Indian Railway</div>
        <div className="userlogins">Payment Details</div>
        <div className="Addtrain">
          <div className="top">

            <label>Name</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter your name on card"
              id="one"
            ></input>
            <br />

            <label>Card Number</label>
            <br />
            <input
              type="text"
              name="first"
              placeholder="Enter your card number"
              id="one"
            ></input>
            <br/>

            <label>Expiry Date</label>
            <br />
            <input
              type="date"
              name="first"
              id="one"
            ></input>
            <br/>

             <label>CVV</label>
            <br />
            <input
              type="number"
              name="first"
              placeholder="Enter three digit code"
              id="one"
            ></input>
            <br/>
           
            <div>
            <Button className="Loginbutton" onClick={btnHandler}>Payment</Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;