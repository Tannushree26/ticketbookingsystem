import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Addtrain from "./Addtrain";
import Adminpage from "./Adminpage";
import Demo from "./Demo";
import Loginpage from "./Loginpage";
import Passengerdetails from "./Passengerdetails";
import Payment from "./Payment";
import Registrationpage from "./Registrationpage";
import Ticketbooking from "./ticketbooking";

export const MainNavigator = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/registrationpage" element={<Registrationpage/>}></Route>
      <Route path="/ticketbooking" element={<Ticketbooking/>}></Route>
      <Route path="/adminpage" element={<Adminpage/>}></Route>
      <Route path="/addtrain" element={<Addtrain/>}></Route>
      <Route path="/passengerdetails" element={<Passengerdetails/>}></Route>
      <Route path="/" element={<Loginpage/>}></Route>
      <Route path="/" element={<Demo/>}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
