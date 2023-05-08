import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Bracelet from "../Pages/Bracelet";
import Mangalsutra from "../Pages/Mangalsutra";
import Rings from "../Pages/Rings";
import SingleuserPage from "../Pages/SingleuserPage";
import Payment from "../Pages/Payment/Payment";
import FinalPage from "../Pages/FinalPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/ring/:ring_id" element={<SingleuserPage />}></Route>
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/bracelet"} element={<Bracelet />} />
        <Route path={"/Rings"} element={<Rings />} />
        <Route path={"/Mangalsutra"} element={<Mangalsutra />} />
        <Route path={"/Payment"} element={<Payment />} />
        <Route path={"/final"} element={<FinalPage/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
