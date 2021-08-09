import React, {useState, useEffect} from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Avatar
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiChevronDown,
} from 'react-icons/fi';
import {withRouter} from "react-router-dom";
import HomeComponent from './Home'
import Recipies from './Recipies'
import AddRecipies from './AddRecipies'
import {fetchUserData} from '../api/authenticationService';
import {ColorModeSwitcher} from '../ColorModeSwitcher';
import jwt_decode from "jwt-decode";
import { useToast } from "@chakra-ui/react";
import {versionNumber} from "../globalParameters";
import UserSettings from './UserSettings'

const Dashboard = (props) => {
  const toast = useToast()
      useEffect(() => {
        if (localStorage.getItem("USER_KEY")) {
          const jwt_Token_decoded = jwt_decode(localStorage.getItem("USER_KEY"));
          if (jwt_Token_decoded.exp * 1000 < Date.now()) {
            localStorage.clear();
            toast({
              title: "Session expired.",
              description: 'Please login again',
              status: "error",
              duration: 5000,
              isClosable: true,
            })
          } 
        }

        let unmounted = false;
        
         if(!unmounted){
            fetchUserData().then((response)=>{
              console.log(response)
            setUserData(response.data.firstName + ' ' + response.data.lastName)
            setUserRank(response.data.rank)
            setUseAvatarLink(response.data.avatarLink)
          }).catch(err => {
            console.log(err);
          })
        }

        return () => unmounted = true;
    }, [toast]);

    //TODO CONVERT TO ARRAY
    const [userData, setUserData] = useState("")
    const [userRank, setUserRank] = useState("")
    const [userAvatarLink, setUseAvatarLink] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [itemName, setItemName] = useState("Home");

    const LinkItems = [
        { name: 'Home', icon: FiHome },
        { name: 'Recipe', icon: FiTrendingUp },
        { name: 'Add Recipe', icon: FiCompass },
        { name: 'Leaderboard', icon: FiStar },
        { name: 'Settings', icon: FiSettings }
      ];

    function setCurrentTab(name){
        setItemName(name)
    }

    const SidebarContent = ({ onClose, ...rest }) => {
        return (
          <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
              <Text fontSize="2xl" 
              // fontFamily="monospace" 
              fontWeight="bold">
                The Diner Club
              </Text>
              <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
              <NavItem key={link.name} icon={link.icon} name={link.name} onClick={onClose} >
                {link.name}
              </NavItem>
            ))}
            <Flex position="absolute" align="center"
              p="6"
              mx="4" bottom="0px" >{versionNumber}</Flex>
          </Box>
        );
      };

      const NavItem = ({ icon, children, ...rest }) => {
        return (
          <Link onClick={() =>
            setCurrentTab(rest.name)
          } 
          
          style={{ textDecoration: 'none' }}>
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'cyan.400',
                color: 'white',
              }}
              {...rest}>
              {icon && (
                <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: 'white',
                  }}
                  as={icon}
                />
              )}
              {children}
            </Flex>
          </Link>
        );
      };  
    
    function logout(){
        localStorage.clear();
        props.history.push('/auth/login');
    }

    const MobileNav = ({ onOpen, ...rest }) => {
        return (
          <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              variant="outline"
              aria-label="open menu"
              icon={<FiMenu />}
            />
      
            {/* <Text
              display={{ base: 'flex', md: 'none' }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
              ml={5}>
              The Diner Club
            </Text> */}
      
            <HStack spacing={{ base: '0', md: '6' }}>
                {/* <ColorModeSwitcher></ColorModeSwitcher> */}
              <Flex alignItems={'center'}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: 'none' }}>
                    <HStack>
                      <Avatar
                        size={'sm'}
                        src={
                          userAvatarLink
                        }
                      />
                      <VStack
                        display={{ base: '0', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text fontSize="sm">{userData}</Text>
                        <Text fontSize="xs" color="gray.600">
                          {userRank}
                        </Text>
                      </VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={useColorModeValue('white', 'gray.900')}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={() => setItemName("Settings")}>Settings</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={logout}>Sign out</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
          </Flex>
        );
      };

      function GetComponent(){
          switch (itemName){
            case "Home":
                return <HomeComponent></HomeComponent>
            case "Recipe":
                return <Recipies></Recipies>
            case "Add Recipe":
                return <AddRecipies></AddRecipies>
            case "Settings":
                return <UserSettings></UserSettings>
              default:
                return <HomeComponent></HomeComponent>;
          }
      }

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
         <GetComponent></GetComponent>
      </Box>
    </Box>
    )
}

export default withRouter(Dashboard)
