import { Box, Button, Input, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'

export default function Register({ setRegister }) {
  const toast = useToast()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState(0);

  const handleRegister=()=>{
    if(email&&pass){
    const payload={
      email:email,
      password:pass,
      mobile:mobile
    }
    localStorage.setItem("userData",JSON.stringify(payload))
    toast({
      position: 'top-right',
      title: 'Account created. Please Login!!',
      description: "We've created your account for you.",
      status: 'success',
      duration: 2200,
      isClosable: true,
    })
    setTimeout(()=>{
      setRegister(false)
    },1700)
    
  }
  else{
    toast({
      position: 'top-right',
      title: 'Fill all details correctly',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }
  }
  return (
    <Box
      fontSize="14px"
      fontFamily="CeraPRO-light"
      display={["block","flex","flex","flex"]}
      gap="20px"
      alignItems="center"
      background="#EDEDED"
      px="10%"
      py={"50px"}
    >
      <Input
        mb={["10px","0","0","0"]}
        boxShadow="0 3px 3px #bdbdbd"
        p="0 0 0 30px"
        background={["none","#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -75px"]}
        borderRadius="1px"
        h={["25px","35px","35px","36px"]}
        w="220px"
        bgColor="white"
        placeholder="Email"
        type={"email"}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <Input
        mb={["10px","0","0","0"]}
        boxShadow="0 3px 3px #bdbdbd"
        p="0 0 0 30px"
        background={["none","#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -75px"]}
        borderRadius="1px"
        h={["25px","35px","35px","36px"]}
        w="220px"
        bgColor="white"
        placeholder="Password"
        value={pass}
        type="password"
        onChange={(e)=>setPass(e.target.value)}
      />
      <Input
        mb={["10px","0","0","0"]}
        boxShadow="0 3px 3px #bdbdbd"
        p="0 0 0 30px"
        background={["none","#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -75px"]}
        borderRadius="1px"
        h={["25px","35px","35px","36px"]}
        w="220px"
        bgColor="white"
        placeholder="Mobile No(Not mandetory)"
        type={"number"}
        onChange={(e)=>setMobile(e.target.value)}
      />
      <br />
      <Button
        w="102px"
        variant="none"
        boxShadow="0 3px 3px #bdbdbd"
        background="#92BE4D"
        color="white"
        h={["25px","35px","35px","36px"]}
        fontSize="15px"
        onClick={handleRegister}
      >
        CONTINUE
      </Button>
      <Spacer />
      <Box
        onClick={() => setRegister(false)}
        mt="-50px"
        fontSize="25px"
        fontWeight="bold"
        cursor="pointer"
        display={["none","flex","flex","flex"]}
      >
        X
      </Box>
    </Box>
  );
}
