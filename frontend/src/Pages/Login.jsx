import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { userLogin } from "../redux/UserReducer/action";
import { AdminAuthContext } from "../ContextApi/AdminAuthContext";
import { Navigate } from "react-router-dom";

const initialState = {
  mobile: "",
  password: "",
};

export default function Login() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { isUserAuth, userLoginContext } = useContext(AdminAuthContext);

  const { token } = useSelector((state) => state.userReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.mobile === "" || formData.password === "") {
      toast({
        title: `Please enter all the details first`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else {
      dispatch(userLogin(formData)).then((res) => {
        toast({
          title: `User Login Successfully`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        userLoginContext(localStorage.getItem("token"));
        setFormData(initialState);
      });
    }
  };

  if (isUserAuth) {
    return <Navigate to="/ring" />;
  }
  return (
    <>
      <Navbar />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Login in to JewelLane</Heading>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="Mobile Number" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  name="mobile"
                  maxlength="10"
                />
              </FormControl>
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

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  onClick={handleSubmit}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  LOGIN TO CONTINUE
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New to CaratLane?{" "}
                  <Link color={"blue.400"} href={"/register"}>
                    Create an Account
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
