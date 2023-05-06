import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/admin"} element={<Admin/>} />    
        </Routes>
    </div>
  )
}

export default AllRoutes