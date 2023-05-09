import React from "react";

import { useState } from "react";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Box,
  Button,
  ButtonGroup,
  Stat,
  StatNumber,
  StatGroup,
  Tooltip,
} from "@chakra-ui/react";

import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { addToCart, getProduct } from "../redux/Product/action";
import { Rating } from "./Rating";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";

export default function SingleProduct() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);
  const { endpoint, id } = useParams();
  const { products } = useSelector((store) => store.productReducer);

  const [data, setData] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(data?.imglink);

  useEffect(() => {
    // console.log(id);

    let dataa = products.filter((el) => {

      return el._id == id;
    });

    setData(dataa[0]);
  }, [id]);

  // console.log(products);

  const handleClick = (e) => {
    setImage(e.target.src);

    setShow(true);
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  // console.log(data, "singledata");

  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let obj = {
      data: data._id,
      title: data.title,
      image: data.imglink,
      price: data.price,
      quantity: quantity,
      category: data.category,
    };

    dispatch(addToCart(obj));
    cart.push(obj);
    localStorage.setItem("cart", JSON.stringify(cart));

    setShow2(true);
  };

  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} py={8} boxShadow={"lg"} mt="8" mb="8">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex flexDirection="column" alignItems="center">
            <Image
              w={{ base: "100%", md: "80%" }}
              border="2px solid grey"
              rounded={"md"}
              alt={"feature image"}
              src={
                show
                  ? image
                  : data?.img1
                  ? data?.img2
                  : "https://media2.giphy.com/media/2uJ0EhZnMAMDe/giphy.gif"
              }
              objectFit={"cover"}
              transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
            />

            <div
              style={{
                display: "grid",
                height: "100px",
                width: "70%",
                marginTop: "10px",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "10px",
              }}
            >
              <img
                style={{
                  height: "100px",
                  width: "200px",
                  border: "2px solid grey",
                  cursor: "pointer",
                }}
                onClick={handleClick}
                src={data?.imglink}
                alt="image1"
              />
              <img
                style={{
                  height: "100px",
                  width: "200px",
                  border: "2px solid grey",
                  cursor: "pointer",
                }}
                onClick={handleClick}
                src={data?.img3}
                alt="image2"
              />

              <img
                style={{
                  height: "100px",
                  width: "200px",
                  border: "2px solid grey",
                  cursor: "pointer",
                }}
                onClick={handleClick}
                src={data?.img2}
                alt="image1"
              />

              <img
                style={{
                  height: "100px",
                  width: "200px",
                  border: "2px solid grey",
                  cursor: "pointer",
                }}
                onClick={handleClick}
                src={data?.img1}
                alt="image1"
              />
            </div>
          </Flex>

          <Stack
            spacing={4}
            mt="5"
            h="auto"
            p="4"
            bg={useColorModeValue("white", "white")}
          >
            <Heading
              fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}
              textAlign={"left"}
              paddingTop={"20px"}
            >
              {data?.title}
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={"lg"}
              textAlign={"left"}
              paddingTop={"20px"}
            >
              {data?.details}
            </Text>
            <StatGroup flexDirection={"column"} paddingTop={"20px"}>
              <Stat>
                <StatNumber fontSize={"4xl"}>
                  ₹{data?.price}/-{" "}
                  <Box as="span" ml="2" color="gray.600" fontSize="lg">
                    ({data?.mrp})
                  </Box>
                </StatNumber>
                <Rating rating={data?.rating} numReviews={data?.reviews} />
              </Stat>
            </StatGroup>

            <Flex
              alignItems="center"
              justifyContent={"space-between"}
              paddingTop={"50px"}
            >
              <Box>
                <ButtonGroup
                  size="md"
                  isAttached
                  display="flex"
                  alignItems="center"
                >
                  <Button
                    isDisabled={quantity === 1}
                    colorScheme={"red"}
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </Button>
                  <Text mx="3">{quantity}</Text>
                  <Button
                    colorScheme={"green"}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Box>
              <Tooltip
                label={!show2 ? "Added to cart" : "Item already in cart"}
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1em"}
              >
                <Button
                  colorScheme="green"
                  ml="4"
                  w="60%"
                  onClick={handleCart}
                  isDisabled={show2}
                >
                  Add to Cart
                </Button>
              </Tooltip>
            </Flex>
            {/* <Link to={`/${endpoint}`}>
              <Button colorScheme="green" ml="6" w="40%">
                Go BAck
              </Button>
            </Link> */}
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}
