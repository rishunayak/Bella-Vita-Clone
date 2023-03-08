import { Box, Button, Center, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../Redux/User/action'


const Register = () => {
    const initalValue={email:"",password:""}
    const [btnLoad,setBtnLoad]=useState(false)
    const toast = useToast()
    const [register,setRegister]=useState(initalValue)
    const nav=useNavigate()
    const dispatch=useDispatch()

    const handleRegister=()=>
    {
        setBtnLoad(true)
        if(register.email=="" || register.password=="" || register.name=="")
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
        else if(register.password.length<7)
        {
            toast({
                title: 'Account Login Failed.',
                description: "Password Length Must be 8 or above",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              setBtnLoad(false)
           
        }
        else
        {
            dispatch(registerUser(register)).then(r=>
                {
                    console.log(r)
                
                    if(r.payload.msg)
                    {
                        toast({
                            title: 'Account Register Successfull',
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
                            title: 'Account Register Failed',
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
    <Text fontSize={"35px"} textAlign="center">Create account</Text>
  
    <Input mt={"25px"}  border="1px solid #676767" _hover={{border:"1px solid #676767"}} focusBorderColor="#475d4b" p="25px 15px" type={"text"} placeholder="Name" value={register.name} onChange={(e)=>setRegister({...register,name:e.target.value})} />
    <Input mt={"25px"}  border="1px solid #676767" _hover={{border:"1px solid #676767"}} focusBorderColor="#475d4b" p="25px 15px" type={"email"} placeholder="Email" value={register.email} onChange={(e)=>setRegister({...register,email:e.target.value})} />
    <Input mt={"20px"} border="1px solid #676767" _hover={{border:"1px solid #676767"}} focusBorderColor="#475d4b" p="25px 15px" type={"password"} placeholder="Password" value={register.password} onChange={(e)=>setRegister({...register,password:e.target.value})} />
    

    <Center mt="25px" flexDirection={"column"}>
       <Button isLoading={btnLoad} onClick={handleRegister} bg={`#475d4b`} _hover={{backgroundColor:"none"}} color="white" padding={"10px 70px"}>Create</Button> 
       <Link to={"/account/login"}><Text mt="15px" color={"#676767"} fontSize={"14px"} textDecoration={"underline"}>Already have account?</Text></Link>     
    </Center>

</Box>
  )
}

export default Register