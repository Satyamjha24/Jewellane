import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";

const Payment = () => {
  // const { cart } = useSelector((store) => store.cartReducer);
  //   const [cartTotal, setCartTotal] = useState(0);
  const [complete, setComplete] = useState(false);

  const totalPrice = localStorage.getItem("totalPrice");

  const onToken = (token) => {
    setComplete(true);
    console.log(token);
  };
  if (complete) {
    return <Navigate to="/final" />;
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Box
        py={8}
        px={3}
        boxShadow="dark-lg"
        height={"420px"}
        margin="auto"
        marginBottom={"50px"}
        width="38%"
        borderRadius="20px"
      >
        <Heading textAlign={"center"}>Select Payment Method</Heading>
        <br />
        <Flex
          borderRadius="10px"
          boxShadow="rgba(136, 99, 251, 0.3) 0px 0px 0px 3px"
        >
          <Box padding={"10px"}>
            <Tabs
              variant="solid-rounded"
              colorScheme="pink"
              orientation="vertical"
            >
              <TabList width="250px">
                <Tab marginTop="10px">Credit / Debit</Tab>
                <Tab marginTop="10px">NetBanking</Tab>
                <Tab marginTop="10px">Wallet</Tab>
                <Tab marginTop="10px">UPI</Tab>
                <Tab marginTop="10px">C.O.D</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Center>
                    <Text fontWeight="bold" fontSize="20px" marginBottom="10px">
                      Select Card Type
                    </Text>
                  </Center>
                  <RadioGroup>
                    <Stack direction="row">
                      <Radio value="credit">Credit Card</Radio>
                      <Radio value="debit">Debit Card</Radio>
                    </Stack>
                  </RadioGroup>
                  <br />
                  <br />
                  <StripeCheckout
                    token={onToken}
                    name="JEWELLANE"
                    currency="INR"
                    amount={totalPrice}
                    stripeKey="pk_test_51MqsBeSA2J3QKzPs2NMhYINDPKsCBIyn87ejtUMBb0AUgVIaZIdtD2xjJ4NtpSG9YCsbGw53lRytTyvAdEPaEk5w00q7rFJ6jG"
                  />
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem>
                      <Button colorScheme="teal" variant="outline">
                        {" "}
                        <Image
                          src="https://www.gurpreetsaluja.com/wp-content/uploads/2020/09/HDFC-LOGO.png"
                          alt="hdfclogo"
                          width="50px"
                          height="40px"
                        />
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button colorScheme="teal" variant="outline">
                        {" "}
                        <Image
                          src="https://www.freepnglogos.com/uploads/sbi-logo-png/image-sbi-logo-logopedia-fandom-powered-wikia-0.png"
                          alt="sbi"
                          width="50px"
                        />
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button colorScheme="teal" bg="#861F41" variant="outline">
                        {" "}
                        <Image
                          src="https://www.axisbank.com/assets/images/logo-white.png"
                          alt="axis"
                          width="50px"
                        />
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button colorScheme="teal" variant="outline">
                        {" "}
                        <Image
                          src="https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/logo.png"
                          alt="icici"
                          width="50px"
                        />
                      </Button>
                    </GridItem>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem>
                      <Button colorScheme="teal" variant="outline">
                        {" "}
                        <Image
                          src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
                          alt="paytmlogo"
                          width="50px"
                        />
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button colorScheme="teal" variant="outline">
                        {" "}
                        <Image
                          src="https://cdn3.freelogovectors.net/wp-content/uploads/2019/02/freecharge_logo.png"
                          alt="freecharge"
                          width="50px"
                        />
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button colorScheme="teal" variant="outline">
                        {" "}
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA4sYgTMysShyVl_qwaCJ2aCT-PvNiMZzOA&usqp=CAU"
                          alt="mobikwik"
                          width="50px"
                        />
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button colorScheme="teal" variant="outline">
                        {" "}
                        <Image
                          src="https://images.fonearena.com/blog/wp-content/uploads/2018/09/Amazon-Pay.jpg"
                          alt="amazonpay"
                          width="50px"
                        />
                      </Button>
                    </GridItem>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Center>
                    <Text fontWeight="bold" fontSize="20px" marginBottom="20px">
                      Enter Your UPI ID Below
                    </Text>
                  </Center>
                  <Input
                    marginBottom="20px"
                    border="1px solid black"
                    placeholder="1234567890@upi"
                  />
                  <Center>
                    <NavLink to="/final">
                      <Button bg="#d1b080" color="white" size="md">
                        PLACE ORDER
                      </Button>
                    </NavLink>
                  </Center>
                </TabPanel>
                <TabPanel>
                  <Center>
                    <Text fontWeight="bold" fontSize="20px" marginBottom="20px">
                      Cash on Delivery
                    </Text>
                  </Center>
                  <Center>
                    <NavLink to="/final">
                      <Button bg="#d1b080" color="white" size="md">
                        PLACE ORDER
                      </Button>
                    </NavLink>
                  </Center>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </div>
  );
};

export default Payment;
