import React, { useState } from 'react'
import "./sort.css"
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Drawerdata from './drawer'
import { Box, Image } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
// import { useSearchParams } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
const Sort = () => {
  const[searchParams,setSearchParams]=useSearchParams()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialSort = searchParams.get("sort");
const[sort,setsort]=useState(initialSort || "")
   


    const handlechange = (event) => {
      const selectedOrder = event.target.value;
      setsort(selectedOrder);
     
    };
    useEffect(()=>{
let params={
}
sort&&(params.sort=sort)
setSearchParams(params)
    },[sort])
  return (
   <>
    <div className="Ring-container">
    

<Box height="30%" width="100%">
{/* <Box
  backgroundImage="url('https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundSize="cover"
  height={{base: "60vh", sm: "60vh", md: "60vh", lg: "60vh" }}
  width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
  sx={{
    "@media screen and (max-width: 768px)": {
      height: "50vh",
      width: "100%",
    },
  }}
>
      
</Box> */}

</Box>

   
 
  
     
      
        
        <div >
          <div className="Ring-subNavbar">
            <div className="fetcher-secion">
              <div>All</div>
              <div>Try at Home</div>
              <div>Designs in Store</div>
              <div>Fast Delivery</div>
              <div>New In</div>
            </div>
            <div className="accending-decending">
              <select
              onChange={handlechange}
              >
                <option value="">Sort by Price</option>
                <option value="desc" >High to Low</option>
                <option value="asc">Low to High</option>
              </select>
            </div>
          </div>
  </div>
 </div>
 </>
  )
}

export default Sort