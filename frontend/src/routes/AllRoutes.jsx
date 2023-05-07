import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bracelet from '../Pages/Bracelet'
import Mangalsutra from '../Pages/Mangalsutra'
import Rings from '../Pages/Rings'
import SingleuserPage from '../Pages/SingleuserPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          
            <Route path="/ring/:ring_id" element={<SingleuserPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes