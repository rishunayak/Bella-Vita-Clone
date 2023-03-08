import { Box, Button, Center, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../Redux/User/action'

const Login = () => {

    const initalValue={email:"",password:""}
    const [btnLoad,setBtnLoad]=useState(false)
    const toast = useToast()
    const [login,setLogin]=useState(initalValue)
    const nav=useNavigate()
    const dispatch=useDispatch()

    const handleLogin=()=>
    {
        setBtnLoad(true)
        if(login.email=="" || login.password=="")
        {
           
            toast({
                title: 'Account Login Failed.',
                description: "Before Login Fill all details",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              setBtnLoad(false)
        }
        else
        {
            dispatch(loginUser(login)).then(r=>
                {
                
                    if(r.payload.token)
                    {
                        toast({
                            title: 'Login Successfull',
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })
                           nav("#")
                          setBtnLoad(false)
                    }
                    else
                    {
                        toast({
                            title: 'Account Login Failed.',
                            description: r.payload,
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                          })

                          setBtnLoad(false)
                    }
                })
        }
    }


  return (
     <Box maxW={"500px"} p={["0px 10px","0px 0px"]} m="auto">
         <Text fontSize={"35px"} textAlign="center">Login</Text>
         <Text color={"#676767"} textAlign="center" fontSize={"24px"} p="10px">To redeem your cashback you must be logged in</Text>

         <Input mt={"25px"}  border="1px solid #676767" _hover={{border:"1px solid #676767"}} focusBorderColor="#475d4b" p="25px 15px" type={"email"} placeholder="Email" value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})} />
         <Input mt={"20px"} border="1px solid #676767" _hover={{border:"1px solid #676767"}} focusBorderColor="#475d4b" p="25px 15px" type={"password"} placeholder="Password" value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} />
         <Text mt="15px" color={"#676767"} textDecoration={"underline"} fontSize={"14px"} >Forget your password?</Text>

         <Center mt="25px" flexDirection={"column"}>
            <Button isLoading={btnLoad} onClick={handleLogin} bg={`#475d4b`} _hover={{backgroundColor:"none"}} color="white" padding={"10px 70px"}>Sign in</Button> 
            <Link to={"/account/register"}><Text mt="15px" color={"#676767"} fontSize={"14px"} textDecoration={"underline"}>Create account</Text></Link>     
         </Center>

     </Box>
  )
}

export default Login