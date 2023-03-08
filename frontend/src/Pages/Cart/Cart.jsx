import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {RiShoppingBagLine,RiDeleteBin6Line} from "react-icons/ri"
import {FaArrowRight} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Box display={"flex"} > <RiShoppingBagLine onClick={onOpen}  size={"30"}/> 
             <Box position="relative" right={"13px"} top="15px" w={"max-content"} 
               bg={"black"} color="white" p={"5px"} borderRadius="50%" h={"17px"} 
               display="flex" alignItems={"center"} fontSize="12px">1</Box> 
             </Box>
   
      <Drawer size={"md"} placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent >
      
           <DrawerHeader borderBottomWidth='1px'>
            <Flex alignItems={"center"} justifyContent="space-between">
            <Flex alignItems={"center"} gap="10px"> <Text as={"u"} fontSize={"25px"}>Your Cart</Text> <FaArrowRight size={25} onClick={onClose}/></Flex>
             <Link><Text as={"u"} >Continue Shopping</Text></Link>
            </Flex>
            </DrawerHeader>
          <DrawerBody >
           <Box>
              {
                <Box display={"flex"} gap="20px" borderBottom="2px solid #ebeeee" pb="10px" h={"150px"} >
                    <Box borderRight="2px solid #ebeeee" w={"30%"}>
                        <Image src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HydraplusFaceWash-03_533x.jpg?v=1654164895" w={"120px"}/>
                    </Box>
                    <Box w={"70%"}>
                        <Text >Hydra-Plus Face Wash ,100ml</Text>
                        <Flex justifyContent={"space-between"} mt="20px">
                         <Text>225</Text>
                         <Text as="del">225</Text>
                        </Flex>
                        
                        <Flex justifyContent={"space-between"} mt="10px" >
                            <Flex alignItems={"center"} border="1px solid black">
                                 <Button size="xs" borderRight="1px solid black"  borderRadius={"0px"} colorScheme="whiteAlpha" color={"black"} fontSize="18px" >-</Button>
                                 <Text padding={"0px 10px"} bg="#e9f2e0">1</Text> 
                                 <Button size="xs" borderLeft="1px solid black" borderRadius={"0px"} colorScheme="whiteAlpha" color={"black"} fontSize="18px">+</Button> 
                            </Flex>
                            <Box>
                                <RiDeleteBin6Line fontSize={"25px"}/>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
              }

             <Accordion allowToggle mt={"20px"} >
                 <AccordionItem border="0px"  bg="#e5f0da">
                  
                  <AccordionButton _hover={{backgroundColor:"none"}}>
                   <Box as="span" flex='1' textAlign='left' display={"flex"} gap="10px">
                    <Image src='https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Offer-Icon-V1.png?v=1654771309' w={"25px"}/> Offers
                   </Box>
                  <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={4}>
                 <Text fontSize={"14px"} fontWeight="bold" color={"#475d4b"}>Holi Sale</Text>
                 <Text color={"#899083"} fontSize={"14px"}>Get upto 30% off on Skincare, 45% off on 100ml Perfumes, 35% off on Gift Sets</Text>
               </AccordionPanel>
              </AccordionItem>
            </Accordion>

                <Accordion allowToggle mt={"20px"} >
                 <AccordionItem border="0px" _hover={{backgroundColor:"none"}}>
                  
                  <AccordionButton _hover={{backgroundColor:"none"}}>
                   <Box as="span" flex='1' textAlign='left'>
                    Order Summary
                   </Box>
                  <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={4}>
                  <Flex justifyContent={"space-between"} fontSize="14px" color={"#899083"}>
                    <Text>Saving</Text> <Text>279</Text>
                  </Flex>
                  <Flex justifyContent={"space-between"} fontSize="20px">
                   <Text>Total</Text> <Text>279</Text>
                  </Flex>
               </AccordionPanel>
              </AccordionItem>
            </Accordion>

              
   
              <Box mt={"20px"} >
                <Button bg={"#475d4b"} w={"100%"} _hover={{backgroundColor:"none"}} color="white">CHECKOUT | 2323</Button>
              </Box>
              
           </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    
    
    </>
  )
}

export default Cart