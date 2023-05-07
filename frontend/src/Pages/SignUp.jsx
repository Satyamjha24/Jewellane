import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/UserReducer/action";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  type: "user",
  gender: "",
  mobile: "",
};

export default function SignUp() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.fname === "" ||
      formData.lname === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.gender === "" ||
      formData.mobile === ""
    ) {
      toast({
        title: `Please enter all the details first`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else {
      dispatch(userRegister(formData))
        .then(() => {
          setFormData(initialState);
        })
        .then(() => {
          toast({
            title: `User Registered Successfully`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Sign Up with JewelLane
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="Mobile Number" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  name="mobile"
                  max="9999999999"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={formData.fname}
                      onChange={handleChange}
                      name="fname"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={formData.lname}
                      onChange={handleChange}
                      name="lname"
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl id="Gender" isRequired>
                <Select
                  placeholder="Select Gender"
                  value={formData.gender}
                  onChange={handleChange}
                  name="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  onClick={handleSubmit}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  REGISTER TO CONTINUE
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already have an account?{" "}
                  <Link color={"blue.400"} href={"/login"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
