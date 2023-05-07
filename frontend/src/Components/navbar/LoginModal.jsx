import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const naviagte = useNavigate();

  function redirectLogin() {
    naviagte("/login");
  }
  function redirectAdminLogin() {
    naviagte("/adminlogin");
  }

  function redirectRegister() {
    naviagte("/register");
  }

  return (
    <>
      <FaUser onClick={onOpen} />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl">Your Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="0rem">Access account & manage your orders.</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="link"
              style={{ color: "#DF6BE9" }}
              mr={3}
              onClick={redirectAdminLogin}
            >
              Admin
            </Button>
            <Button
              style={{ color: "#DF6BE9", border: "1px solid #DF6BE9" }}
              variant="outline"
              mr={3}
              onClick={redirectRegister}
            >
              Sign Up
            </Button>
            <Button
              variant="solid"
              style={{ backgroundColor: "#DF6BE9", color: "white" }}
              onClick={redirectLogin}
            >
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
