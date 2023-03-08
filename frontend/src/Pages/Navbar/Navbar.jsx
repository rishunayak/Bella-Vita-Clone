import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import {HiOutlineSearch} from "react-icons/hi"

import {BiUser} from "react-icons/bi"
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'





const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {user}=useSelector((store)=>store.UserReducer)

  return (
    <Box >
         <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#e5f0da"}>
        <DrawerCloseButton />
           <DrawerHeader borderBottomWidth='1px'>
            <Flex alignItems={"center"} gap="10px">

            <Image src='https://cdn.shopify.com/s/files/1/0627/8778/0848/files/user.png?v=1648529955' w={"100px"}/>
            <Box>
              <Text as={"i"} fontSize="16px">Welcome,</Text>
              {
                user!={}?  <Flex gap={"5px"}>
                <Link><Text>Login</Text></Link>
                <Text> / </Text>
                <Link><Text>Signup</Text></Link>
               </Flex>  : <Text>{user.name}</Text>
              }
           
            </Box>
           

            </Flex>
            
            
            </DrawerHeader>
          <DrawerBody >
          <Box color={"#475d4b"}   fontSize="18px" >
                <Link><Text borderBottom={"2px solid #e0e5dc"} pb="10px">SHOP ALL</Text> </Link> 
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">NEW ARRIVALS</Text> </Link> 
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">BESTSELLERS</Text> </Link> 
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">SKIN CARE</Text> </Link> 
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">HAIR CARE</Text></Link> 
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">BODY CARE</Text> </Link>
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">PERFUMES</Text></Link> 
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">COMBOS</Text></Link> 
                <Link><Text borderBottom={"2px solid #e0e5dc"} p="10px 0px">BUILD A BOX</Text></Link> 
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        <Flex alignItems={"center"} gap="20px" justifyContent={"space-between"} p={"10px 10px"} borderBottom="1px solid #d5dbd9">
            <Box display={["block","block","block","none","none"]}>
              <GiHamburgerMenu size={"30"} onClick={onOpen}/>
                
            </Box> 
            <Box display={"flex"} h="70px" gap={"10px"}>
                <Image src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" />
                <Image src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" />
                <Image src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" />
            </Box>
            <Box color={"#475d4b"} display={["none","none","none","block","block"]} textAlign="center" gap="10px"  fontSize="14px">
                <Link>SHOP ALL</Link> <Text as={"samp"} m="0px 5px">|</Text>
                <Link>NEW ARRIVALS</Link> <Text as={"samp"} m="0px 5px">|</Text>
                <Link>BESTSELLERS</Link> <Text as={"samp"} m="0px 5px">|</Text>
                <Link>SKIN CARE</Link> <Text as={"samp"} m="0px 5px">|</Text>
                <Link>HAIR CARE</Link> <Text as={"samp"} m="0px 5px">|</Text>
                <Link>BODY CARE</Link><Text as={"samp"} m="0px 5px">|</Text>
                <Link>PERFUMES</Link> <Text as={"samp"} m="0px 5px">|</Text>
                <Link>COMBOS</Link> <Text as={"samp"} m="0px 5px">|</Text>
                <Link>BUILD A BOX</Link> 
            </Box>
            <Box display={"flex"} gap="5px">
                 <HiOutlineSearch size={"30"}/>
             <Link><BiUser  size={"30"}/></Link> 
            <Cart/>
            </Box>
        </Flex>
    </Box>
  )
}

export default Navbar