
import React from 'react'
import { Box } from '@chakra-ui/react';
import { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Flex,
    Link,
    Text,
    useDisclosure,
    useColorMode,
  } from "@chakra-ui/react";
import { BiRupee } from 'react-icons/bi'
import "./sort.css"
const Drawerdata= () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
  return (
    <>
     <Box display={{ base: "block", lg: "none" }}  
       backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="30%" >
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
      <Button ref={btnRef} colorScheme="pink" onClick={onOpen} alignItems="left">
        <HamburgerIcon />
      </Button>
     
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
       <DrawerOverlay />
       <DrawerContent>
        
          <DrawerBody>
          <DrawerContent>
          <DrawerCloseButton colorScheme="black"/>
          <div className="w-25">
              <div className="filtering-section">
                <h2>Filter By</h2>
                <div className="filter">
                  <div className="filter-by-price">
                    <p className="price-title">Price</p>
                    <div className="radioBtn-section">
                      <div>
                        <input
                          name="radioBtn"
                        
                          type="radio"
                        />
                        <label htmlFor="">Under 5,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                         
                          
                          type="radio"
                        />
                        <label htmlFor="">5,001 - 10,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                        
                          
                          type="radio"
                        />
                        <label htmlFor="">10,001 - 15,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                          type="radio"
                        
                        />
                        <label htmlFor="">15,001 - 20,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                        
                          type="radio"
                        />
                        <label htmlFor="">20,001 - 30,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                        
                          type="radio"
                        />
                        <label htmlFor="">30,001 - 40,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                       
                          type="radio"
                        />
                        <label htmlFor="">40,001 - 50,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                       
                          type="radio"
                        />
                        <label htmlFor="">50,001 - 75,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                        
                          type="radio"
                        />
                        <label htmlFor="">75,001 - 1,00,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                       
                          type="radio"
                        />
                        <label htmlFor="">1,00,001 - 1,50,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                          
                          type="radio"
                        />
                        <label htmlFor="">1,50,001 - 2,00,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                         
                          type="radio"
                        />
                        <label htmlFor="">2,00,001 - 2,50,000</label>
                      </div>
                      <div>
                        <input
                          name="radioBtn"
                        
                          type="radio"
                        />
                        <label htmlFor="">Over 2,50,000</label>
                      </div>
                    </div>
                  </div>

                  <div className="underLine"></div>

                  <div className="filter-by-productType">
                    <p className="productType-title">Product Type</p>
                    <div className="radioBtn-section">
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Earrings</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Rings</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Necklaces</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Pendants</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Bracelets</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Bangles</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Chains</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Sets</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Mangalsutra</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Nose pin</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Nath</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Charms</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Adjustable Rings</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Charm Builders</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Tanmaniya</label>
                      </div>
                      <div>
                        <input name="productType" type="radio" />
                        <label htmlFor="">Baby Bangles</label>
                      </div>
                    </div>
                  </div>

                  <div className="underLine"></div>

                  <div className="filter-by-productType">
                    <p className="productType-title">Weight Ranges</p>
                    <div className="radioBtn-section">
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">0 - 2 g</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">2 - 5 g</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">5 - 10 g</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">10 - 20 g</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">20 - 30 g</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor=""> &gt; 30 g</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Chains</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Sets</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Mangalsutra</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Nose pin</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Nath</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Charms</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Adjustable Rings</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Charm Builders</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Tanmaniya</label>
                      </div>
                      <div>
                        <input name="weightRang" type="radio" />
                        <label htmlFor="">Baby Bangles</label>
                      </div>
                    </div>
                  </div>

                  <div className="underLine"></div>

                  <div className="filter-by-productType">
                    <p className="productType-title">Material</p>
                    <div className="radioBtn-section">
                      <div>
                        <input name="material" type="radio" />
                        <label htmlFor="">Platinum</label>
                      </div>
                      <div>
                        <input name="material" type="radio" />
                        <label htmlFor="">Gold</label>
                      </div>
                      <div>
                        <input name="material" type="radio" />
                        <label htmlFor="">Diamond</label>
                      </div>
                      <div>
                        <input name="material" type="radio" />
                        <label htmlFor="">Gemstone</label>
                      </div>
                      <div>
                        <input name="material" type="radio" />
                        <label htmlFor="">Solitaire</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DrawerContent>
 </DrawerBody>
</DrawerContent>
</Drawer>
  </Flex>
  </Box>
    </>
   
  )
}

export default Drawerdata