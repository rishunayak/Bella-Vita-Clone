import React from 'react'
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Image, Select, Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const ShopAll = () => {
  return (
    <>
    <Box mt={"40px"}>
      <Flex justifyContent={"space-between"} p="0px 20px">
       <Text color={"#475d4b"} fontSize={"14px"}> <Link to="/">Home</Link>{">"}All-Products</Text>
      </Flex>
        <Flex>
            <Box w={["40%","30%","20%"]} padding="0px 20px" display={["none","none","none","block"]}>
             
             <Box mt="20px" display={"flex"} gap="10px" fontSize={"16px"} > <Image src="https://cdn.discordapp.com/attachments/707486765136740384/1012124707614634074/unknown.png" w={"20px"}/> REFINE BY </Box>
             <Text mt="10px" p={"10px 0px"} fontSize={"20px"} borderBottom="1px solid #d5dbd9">CATEGORIES</Text>
             <Flex flexDirection={"column"} gap="15px" mt="10px" color={"#475d4b"} fontSize={"14px"}>
              <Link to="/shopAll"><Text>Shop All</Text></Link> 
              <Text>New Arrivals</Text>
              <Text>Bestsellers</Text>
              <Accordion allowToggle >
                 <AccordionItem border="0px" >
                  
                  <AccordionButton _hover={{backgroundColor:"none"}}  p={"0px"}>
                   <Box as="span" flex='1' textAlign='left' display={"flex"} gap="10px" fontSize={"14px"}>
                     Skin Care
                   </Box>
                  <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={4} display="grid" gap={"10px"}>
                 <Text>Face Cream</Text>
                 <Text>Face Pack/Mask</Text>
                 <Text>Face Serum</Text>
                 <Text>Face Scrub</Text>
                 <Text>Face Toner</Text>
                 <Text>Face Gel</Text>
                 <Text>Face Moisturisers</Text>
               </AccordionPanel>
              </AccordionItem>
            </Accordion>
          
              <Accordion allowToggle >
                 <AccordionItem border="0px" >
                  
                  <AccordionButton _hover={{backgroundColor:"none"}}  p={"0px"}>
                   <Box as="span" flex='1' textAlign='left' display={"flex"} gap="10px" fontSize={"14px"}>
                    Hair Care
                   </Box>
                  <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={4} display="grid" gap={"10px"}>
                 <Text>All Haircare</Text>
                 <Text>Products</Text>
                 <Text>Shampoo</Text>
                 <Text>Conditioner</Text>
                 <Text>Hair Oil</Text>
                 <Text>Hair Mask</Text>
      
               </AccordionPanel>
              </AccordionItem>
            </Accordion>
    

              <Accordion allowToggle >
                 <AccordionItem border="0px" >
                  
                  <AccordionButton _hover={{backgroundColor:"none"}}  p={"0px"}>
                   <Box as="span" flex='1' textAlign='left' display={"flex"} gap="10px" fontSize={"14px"}>
                    Body Care
                   </Box>
                  <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={4} display="grid" gap={"10px"}>
                 <Text>All Body Care</Text>
                 <Text>Products</Text>
                 <Text>Body Soaps</Text>
                 <Text>Body Wash</Text>
                 <Text>Body Scrub</Text>
                 <Text>Body Lotion</Text>
                 <Text>Body Moisturisers</Text>
      
               </AccordionPanel>
              </AccordionItem>
            </Accordion>

            

              <Accordion allowToggle >
                 <AccordionItem border="0px" >
                  
                  <AccordionButton _hover={{backgroundColor:"none"}}  p={"0px"}>
                   <Box as="span" flex='1' textAlign='left' display={"flex"} gap="10px" fontSize={"14px"}>
                    Perfumes
                   </Box>
                  <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={4} display="grid" gap={"10px"}>
                 <Text>All Perfumes</Text>
                 <Text>Perfumes For Her</Text>
                 <Text>Perfumes For Him</Text>
                 <Text>Unisex Perfumes</Text>
                 <Text>Body Parfum</Text>
                 <Text>Little Luxuries</Text>
                 <Text>Gift Sets</Text>
      
               </AccordionPanel>
              </AccordionItem>
            </Accordion>


          

              <Accordion allowToggle >
                 <AccordionItem border="0px" >
                  
                  <AccordionButton _hover={{backgroundColor:"none"}}  p={"0px"}>
                   <Box as="span" flex='1' textAlign='left' display={"flex"} gap="10px" fontSize={"14px"}>
                   Combos
                   </Box>
                  <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={4} display="grid" gap={"10px"}>
                 <Text>Gift Boxes</Text>
                 <Text>All Combos</Text>
                 <Text>Bestseller Combos</Text>
                 <Text>Skin Combos</Text>
                 <Text>Hair Combos</Text>
                 <Text>Body Combos</Text>
                 <Text>Perfume Combos</Text>
                 <Text>C Glow Range</Text>
                 <Text>Kumkumadi Range</Text>
      
               </AccordionPanel>
              </AccordionItem>
            </Accordion>


              <Text>Build a Box</Text>
             </Flex>
            </Box>

            <Box w={["100%","100%","100%","80%"]} >
              <Flex display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} justifyContent={"space-between"} alignItems="center" mb="30px" p={"0px 10px  "}>
                <Box display={["none","none","none","block"]}></Box>
               <Text textAlign={["none","none","none","center"]}>All Products</Text> 
               
               <Box display={"flex"} justifyContent="flex-end">
               <Flex alignItems={"center"} gap="10px" w={"250px"} >Sortby:
                  <Select placeholder='Featured'>
                    <option>Alphabetically,A to Z</option>
                    <option>Alphabetically,Z to A</option>
                    <option>Price, Low to High</option>
                    <option>Price, High to Low</option>
                  </Select>
                </Flex>
               </Box>
                

              </Flex>
             
             <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap="20px" p={"0px 10px"}>


                 <Box h={"max-content"} borderRadius="10px" boxShadow={"rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px"}>
                     <Image src='https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_533x.jpg?v=1652421642' w="100%"/>
                     <Box p="0px 10px">
                       <Text fontSize={"14px"} color="#475d4b" fontWeight={600} height="50px" textTransform={"uppercase"} m="5px 0px">
                         Luxury Perfume Gift Set For Man - 4x20ml
                       </Text>
                       <Text fontSize={"14px"} fontWeight={400} height="40px" mb="10px" color={"#757575"}>Eau De Parfum</Text>
                       <Flex justifyContent={"space-between"}>
                         <Flex gap={"10px"} alignItems="center"><Text fontSize={"18px"} fontWeight={600}>₹749</Text> <Text as={"del"} fontSize={"14px"} fontWeight={600} >₹849</Text> </Flex>
                         <Text fontSize={"17px"} fontWeight={600}>4.8 ★	</Text>
                       </Flex>
                     </Box>
                     <Button borderRadius={"10px"} color="white" bg="#495b4b" w="100%" p="24px 0px">ADD TO CART</Button>
                 </Box>


                 <Box h={"max-content"} borderRadius="10px" boxShadow={"rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px"}>
                     <Image src='https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_533x.jpg?v=1652421642'/>
                     <Box p="0px 13px">
                       <Text fontSize={"14px"} fontWeight={600} height="50px" textTransform={"uppercase"} m="5px 0px">
                         Luxury Perfume Gift Set For Man - 4x20ml
                       </Text>
                       <Text fontSize={"14px"} fontWeight={400} height="45px" mb="10px">Eau De Parfum</Text>
                       <Flex justifyContent={"space-between"}>
                         <Flex><>749</> <Text as={"del"}>849</Text> </Flex>
                         <Text>4.8★	</Text>
                       </Flex>
                     </Box>
                     <Button borderRadius={"10px"} color="white" bg="#495b4b" w="100%">ADD TO CART</Button>
                 </Box>


                 <Box h={"max-content"} borderRadius="10px" boxShadow={"rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px"}>
                     <Image src='https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_533x.jpg?v=1652421642'/>
                     <Box p="0px 13px">
                       <Text fontSize={"14px"} fontWeight={600} height="50px" textTransform={"uppercase"} m="5px 0px">
                         Luxury Perfume Gift Set For Man - 4x20ml
                       </Text>
                       <Text fontSize={"14px"} fontWeight={400} height="45px" mb="10px">Eau De Parfum</Text>
                       <Flex justifyContent={"space-between"}>
                         <Flex><>749</> <Text as={"del"}>849</Text> </Flex>
                         <Text>4.8★	</Text>
                       </Flex>
                     </Box>
                     <Button borderRadius={"10px"} color="white" bg="#495b4b" w="100%">ADD TO CART</Button>
                 </Box>


                 <Box h={"max-content"} borderRadius="10px" boxShadow={"rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px"}>
                     <Image src='https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_533x.jpg?v=1652421642'/>
                     <Box p="0px 13px">
                       <Text fontSize={"14px"} fontWeight={600} height="50px" textTransform={"uppercase"} m="5px 0px">
                         Luxury Perfume Gift Set For Man - 4x20ml
                       </Text>
                       <Text fontSize={"14px"} fontWeight={400} height="45px" mb="10px">Eau De Parfum</Text>
                       <Flex justifyContent={"space-between"}>
                         <Flex><>749</> <Text as={"del"}>849</Text> </Flex>
                         <Text>4.8★	</Text>
                       </Flex>
                     </Box>
                     <Button borderRadius={"10px"} color="white" bg="#495b4b" w="100%">ADD TO CART</Button>
                 </Box>

                 <Box h={"max-content"} borderRadius="10px" boxShadow={"rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px"}>
                     <Image src='https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_533x.jpg?v=1652421642'/>
                     <Box p="0px 13px">
                       <Text fontSize={"14px"} fontWeight={600} height="50px" textTransform={"uppercase"} m="5px 0px">
                         Luxury Perfume Gift Set For Man - 4x20ml
                       </Text>
                       <Text fontSize={"14px"} fontWeight={400} height="45px" mb="10px">Eau De Parfum</Text>
                       <Flex justifyContent={"space-between"}>
                         <Flex><>749</> <Text as={"del"}>849</Text> </Flex>
                         <Text>4.8★	</Text>
                       </Flex>
                     </Box>
                     <Button borderRadius={"10px"} color="white" bg="#495b4b" w="100%">ADD TO CART</Button>
                 </Box>



             </Box>

            </Box>
        </Flex>

    </Box>
    </>
  )
}

export default ShopAll