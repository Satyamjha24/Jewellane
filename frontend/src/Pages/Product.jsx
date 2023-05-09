import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/Product/action";
import "./product.css";
import Sort from "./sort";
import { Spinner } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useBreakpointValue, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { useLocation } from "react-router-dom";
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuItemOption,
//   MenuGroup,
//   MenuOptionGroup,
//   MenuDivider,
// } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link, useSearchParams } from "react-router-dom";
import { AccordionIcon } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading, Text, Divider } from "@chakra-ui/react";

import { Center } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Drawerdata from "./drawer";
// useEffect
const Product = ({ endpoint }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const { products, isLoading } = useSelector((state) => state.productReducer);
  console.log(isLoading);
  const location = useLocation();
  const obj = {
    params: {
      // _sort: searchParams.get("order") === "price" && "price",
      sort: searchParams.get("sort"),
    },
  };

  console.log(searchParams.get("sort"));

  useEffect(() => {
    console.log(obj);
    dispatch(getProduct(obj, endpoint));
  }, [location.search]);

  console.log(products);
  // console.log(res);

  return (
    <div>
      <Sort />
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        <b>Jwellery </b>7302 design
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
          {isLargeScreen ? (
            <Sidebar />
          ) : (
            <Box width="20%" marginTop="10px">
              <Flex
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height="30%"
                justifyContent="space-between"
                direction="column"
                fontSize="18px"
                alignItems="center"
              >
                <Drawerdata />
              </Flex>
            </Box>
          )}
        </Box>

        <div
          style={{
            display: "grid",
            height: "auto",
            width: "80%",
            marginTop: "10px",
            marginLeft: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 2fr))",
            // border:"8px solid brown",
          }}
        >
          {isLoading ? (
            <Spinner
              style={{
                textAlign: "center",
                marginTop: "300px",
                paddingLeft: "50%",
                marginLeft: "100%",
              }}
              thickness="20px"
              speed="0.98s"
              emptyColor="pink.200"
              color="purple.500"
              size="xl"
            />
          ) : (
            <>
              {products?.map((el,i) => {
                return (
                  <div key={i}>
                    <Link to={`/${endpoint}/${el._id}`}>
                      <Box
                        w={"40%"}
                        style={{ width: "95%" }}
                        pos={"relative"}
                        p={2}
                        _hover={{ boxShadow: "2xl" }}
                        cursor="pointer"
                        alignItems="stretch"
                        // border="2px solid black"
                      >
                        <Box
                          rounded={"lg"}
                          width="100%"
                          pos={"relative"}
                          height="100%"
                          _after={{
                            transition: "all .3s ease",
                            content: '""',
                            w: "full",
                            h: "full",
                            pos: "absolute",
                            top: 5,
                            left: 0,
                            filter: "blur(15px)",
                          }}
                          _groupHover={{
                            _after: {
                              filter: "blur(20px)",
                            },
                          }}
                        >
                          {}
                          <Image
                            transition={"transform 0.5s ease"}
                            hover={"transform: rotate(180deg)"}
                            rounded={"lg"}
                            textAlign={"center"}
                            display={"block"}
                            marginLeft={"auto"}
                            marginRight={"auto"}
                            src={el.imglink}
                          />
                        </Box>
                        <Stack align={"left"}>
                          <Text
                            color={"purple"}
                            textTransform={"uppercase"}
                            fontSize={"lg"}
                            fontWeight="semibold"
                            fontFamily={"body"}
                            align={"left"}
                          >
                            ${el.price}
                          </Text>
                        </Stack>
                        <Stack align={"left"}>
                          <Text
                            color={"purple"}
                            textTransform={"uppercase"}
                            fontSize={"lg"}
                            fontWeight="semibold"
                            fontFamily={"body"}
                            align={"left"}
                          >
                            <b>Check Delivery date</b>
                          </Text>
                          <Stack
                            spacing={0}
                            direction={"column"}
                            align={"left"}
                            style={{ marginLeft: "5px" }}
                          >
                            <Text
                              fontSize={"md"}
                              fontWeight="semibold"
                              color={"grey"}
                              align={"left"}
                            >
                              {el.title}
                            </Text>
                            <Text
                              fontSize={"md"}
                              fontWeight="semibold"
                              align={"left"}
                            >
                              ({el.reviews})
                            </Text>
                            <div
                              style={{
                                display: Flex,
                                justifyContent: "space-between",
                              }}
                            >
                              <Button
                                fontSize="18px"
                                width="45%"
                                color={"purple"}
                                align={"center"}
                                border={"1px solid purple"}
                                borderRadius={"9px"}
                              >
                                View Details
                              </Button>

                              <Button
                                fontSize="18px"
                                width="45%"
                                color={"green"}
                                align={"center"}
                                border={"1px solid green"}
                                borderRadius={"10px"}
                                marginLeft={"5%"}
                              >
                                Live Video Call
                              </Button>
                            </div>
                          </Stack>
                        </Stack>
                      </Box>
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
