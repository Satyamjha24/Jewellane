import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Bracelet from "../Pages/Bracelet";
import Mangalsutra from "../Pages/Mangalsutra";
import Rings from "../Pages/Rings";
import SingleuserPage from "../Pages/SingleuserPage";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AdminLogin from "../Admin/AdminLogin";
import Product from "../Pages/Product";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<SignUp />} />
        <Route path="/ring/:id" element={<SingleuserPage />}></Route>
        <Route path={"/bracelet"} element={<Bracelet />} />
        <Route path={"/ring"} element={<Product/>} />
        <Route path={"/Mangalsutra"} element={<Mangalsutra />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/adminlogin"} element={<AdminLogin />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
