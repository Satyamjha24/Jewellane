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
 StatLabel, 
 StatNumber, 
 StatHelpText, 
 StatArrow, 
 StatGroup, 
 Tooltip, 
} from "@chakra-ui/react"; 
import { useEffect } from "react"; 

import { useParams } from "react-router-dom"; 

import { useDispatch, useSelector } from "react-redux"; 
import { getProduct } from "../redux/Product/action"; 
 
export default function SingleProduct() { 
  const dispatch = useDispatch(); 
  const [show, setShow] =useState(false); 
  const [show2, setShow2] =useState(false); 
  const { id } = useParams(); 
  const [quantity, setQuantity] =useState(1); 
  const [data, setData] = useState({}); 
  useEffect(() => { 
    // console.log(id) 
    let dataa = products.filter((el) => { 
      return el._id == id; 
    }); 
    setData(dataa[0]); 
  }, [id]); 
  const [image, setImage] = useState(data.imglink); 
  
 
  const { products } = useSelector((store) => store.productReducer); 
 
console.log(products) 
const handleClick = (e) => { 
  setImage(e.target.src); 
  setShow(true) 
}; 
 
 
 useEffect(() => { 
    dispatch(getProduct()) 
 }, 
 []); 
 
 
console.log(data) 
 
 
 return ( 
    <> 
    <Container 
      maxW={"container.xl"} 
      py={8} 
     
      boxShadow={"xl"} 
      mt='8' 
    
    > 
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}> 
        <Flex flexDirection='column' alignItems='center'> 
          <Image 
            w={{ base: "100%", md: "80%" }} 
            rounded={"md"} 
            alt={"feature image"} 
            src={show ? image : (data.imglink?data.imglink:"https://media2.giphy.com/media/2uJ0EhZnMAMDe/giphy.gif")} 
 
            objectFit={"cover"} 
            transition='all 0.5s cubic-bezier(.08,.52,.52,1)' 
          /> 
          <div style={{display :"grid",height:"100px",width:"50%",border:"40px solid black",gridTemplateColumns:"repeat(3,1fr)"}}>
          <img style={{height:"200px",width:"200px"}}onClick={handleClick} src={data.img2}/>
          <img onClick={handleClick} src={data.img2}/>
          <img onClick={handleClick} src={data.img3}/>
          </div>
          
        
         
        </Flex> 
        <Stack 
          spacing={4} 
          mt='14' 
          
          h='auto' 
          p='4' 
          bg={useColorModeValue("white", "white")}> 
          <Text 
            textTransform={"uppercase"} 
            color={"blue.400"} 
            fontWeight={600} 
            fontSize={"sm"} 
            bg={useColorModeValue("blue.50", "blue.50")}
p={2}
            alignSelf={"flex-start"}
            rounded={"md"}>
           
          </Text>
          <Heading
            fontSize={{ base: "2xl", sm: "4xl", md: "3xl" }}>
            {data.price}
          </Heading>
      
          <StatGroup flexDirection={"column"}>
            <Stat>
              <StatNumber fontSize={"4xl"}>
                £{data?.price}
              </StatNumber>
              {/* <Rating
                rating={data?.rating}
               
              /> */}
              {/* <StatHelpText mt='4'>
                Package Size {data?.pack_size}
              </StatHelpText> */}
            </Stat>
            <StatGroup flexDirection={"row"} w={"60%"} my='4'>
              <Stat>
                <StatLabel>Popularity</StatLabel>
               
              </Stat>
              <Stat>
                <StatLabel>Review</StatLabel>
               
              </Stat>
            </StatGroup>
          </StatGroup>

          <Flex
            alignItems='center'
            justifyContent={"space-between"}>
            <Box>
              <ButtonGroup
                size='md'
                isAttached
                display='flex'
                alignItems='center'>
                <Button
                  isDisabled={quantity === 1}
                  colorScheme={"red"}
                  onClick={() =>
                    setQuantity(quantity - 1)
                  }>
                  -
                </Button>
                <Text mx='3'>{quantity}</Text>
                <Button
                  colorScheme={"green"}
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }>
                  +
                </Button>
              </ButtonGroup>
            </Box>
            <Tooltip
              label={
                !show
                  ? "Added to cart"
                  : "Item already in cart"
              }
              bg='white'
              placement={"top"}
              color={"gray.800"}
              fontSize={"1em"}>
              <Button
                colorScheme='green'
                ml='4'
                w='100%'
              
                isDisabled={show2}>
                Add to Cart
              </Button>
            </Tooltip>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>

  </>
	);
}

