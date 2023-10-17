import React from "react";
import { Rooms } from "./Pages/room/Rooms";
import { Home } from "./Pages/home/Home";
import Layout from "./Component/Layout/Layout";
import Error from "./Pages/pageNotFound/Error";
import SingleRoom from "./Pages/SingleRoom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Pages/RegisterForm";
import ShowBookings from "./Pages/ShowBookings";
import FeatureRoom from "./Component/FeatureRoom";
import ChangePassword from "./Pages/ChangePassword";
import ForgetPassword from "./Pages/ForgetPassword";
import ShowDetails from "./Pages/ShowDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/details" element={<ShowDetails />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/all" element={<FeatureRoom />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<SingleRoom />} />
          <Route path="/profile" element={<Profile />}>            
            <Route index element={<ShowDetails/>} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="edit" element={<RegisterForm />} />
            <Route path="showbooking" element={<ShowBookings />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 