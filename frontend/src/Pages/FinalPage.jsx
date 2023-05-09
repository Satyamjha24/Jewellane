import { Box, Button, Center, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";

const FinalPage = () => {
  
  return (
    <>
      <Navbar />
      <Box style={{ paddingBottom: "30px" }} bg="white">
        <Center>
          <Image
            src="https://buy-digital.netlify.app/Images/order/Checkmark2.gif"
            alt="checkmark"
            width="200px"
          />
        </Center>
        <Center>
          <Image
            src="https://buy-digital.netlify.app/Images/order/ordergifimage.gif"
            alt="ordergif"
          />
        </Center>
        <Center>
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            <NavLink to="/">Go Back To Home</NavLink>
          </Button>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default FinalPage;
