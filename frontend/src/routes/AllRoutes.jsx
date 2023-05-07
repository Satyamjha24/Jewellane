import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Bracelet from '../Pages/Bracelet'
import Mangalsutra from '../Pages/Mangalsutra'
import Rings from '../Pages/Rings'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/admin"} element={<Admin/>} />    
            <Route path={"/bracelet"} element={<Bracelet/>} />
            <Route path={"/Rings"} element={<Rings/>} />
            <Route path={"/Mangalsutra"} element={<Mangalsutra/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes