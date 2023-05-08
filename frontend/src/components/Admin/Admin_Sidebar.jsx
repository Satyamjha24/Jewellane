import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import {
  CloseButton,
  VStack,
  Icon,
  Drawer,
  DrawerContent,
  Text,
} from "@chakra-ui/react";
import {
  FiHome,
  FiCompass,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUsers,
  FiPlus,
  FiShoppingCart,
  FiActivity,
} from "react-icons/fi";
import ManageAdmins from "./ManageAdmins";
import ManageUsers from "./ManageUsers";
import ManageOrders from "./ManageOrders";
import ManageProducts from "./ManageProducts";
import AddProducts from "./AddProducts";
import AddAdmins from "./AddAdmins";
import { Navigate, Link as Redirect } from "react-router-dom";
import logo from "../image/logo.png";
import Chart from "./Analyse";
import { AdminAuthContext } from "../../ContextApi/AdminAuthContext";

const LinkItems = [
  {
    name: "Dashboard",
    compName: "Dashboard",
    heading: "Dashboard",
    icon: FiHome,
  },
  {
    name: "Add Products",
    compName: "AddProducts",
    heading: "Add Products",
    icon: FiPlus,
  },
  {
    name: "Manage Products",
    compName: "ManageProducts",
    heading: "Manage Products",
    icon: FiCompass,
  },
  // {
  //   name: "Manage Orders",
  //   compName: "ManageOrders",
  //   heading: "Manage Products",
  //   icon: FiShoppingCart,
  // },
  {
    name: "Add Admins",
    compName: "AddAdmins",
    heading: "Add Admins ",
    icon: FiPlus,
  },
  {
    name: "Manage Admins",
    compName: "ManageAdmins",
    heading: "Manage Admins",
    icon: FiUsers,
  },
  {
    name: "Manage Users",
    compName: "ManageUsers",
    heading: "Manage Users",
    icon: FiUsers,
  },
  
];

function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comp, setComp] = useState("Dashboard");
  const componentChange = (compName = comp) => {
    if (compName === "Dashboard") return <Chart />;
    else if (compName === "ManageAdmins") return <ManageAdmins />;
    //else if (compName === "ManageOrders") return <ManageOrders />;
    else if (compName === "ManageProducts") return <ManageProducts />;
    else if (compName === "AddProducts") return <AddProducts />;
    else if (compName === "AddAdmins") return <AddAdmins />;
    else if (compName === "ManageUsers") return <ManageUsers />;
  };



  useEffect(() => {
    componentChange(comp);
  }, [comp]);



  const SidebarContent = ({ onClose, ...rest }) => {
    return (
      <Box
        mt="0px"
        transition="3s ease"
        bg={"black"}
        borderRight="1px"
        borderRightColor={"gray.200"}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems={"center"} justifyContent="center">
          <Image mb="10px" width={"240px"} src={logo} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem
            onClick={() => setComp(link.compName)}
            key={link.name}
            icon={link.icon}
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };

  return (
    <Box>
      <Box minH="100vh" bg={"gray.100"}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Flex className="main-content" justifyContent={"center"} ml="100">
          {componentChange()}
        </Flex>
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        color="white"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{ color: "white" }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { adminLogout, isAuth } = useContext(AdminAuthContext);
  const handleLogout = () => {
    adminLogout();
  };

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"black"}
      borderBottomWidth="1px"
      borderBottomColor={"gray.200"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      color="white"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={localStorage.getItem('adminImage')}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" style={{textTransform:'capitalize'}}>{localStorage.getItem('adminName')}</Text>
                  <Text fontSize="xs" color="gray.1000">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={"white"} borderColor={"gray.200"} color="black">
              <MenuItem>
                <Button onClick={handleLogout}>Sign out</Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default SidebarWithHeader;
