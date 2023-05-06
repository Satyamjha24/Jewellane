import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Bracelet from '../Pages/Bracelet'
import Mangalsutra from '../Pages/Mangalsutra'
import Rings from '../Pages/Rings'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/admin"} element={<Admin/>} />    
            <Route path="/bracelet"><Bracelet/></Route>
            <Route path="/Rings"><Rings/></Route>
            <Route path="/Mangalsutra"><Mangalsutra/></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes