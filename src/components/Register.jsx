import { Box, Button, Input, Spacer } from "@chakra-ui/react";

export default function Register({ setRegister }) {
  return (
    <Box
      fontSize="14px"
      fontFamily="CeraPRO-light"
      display="flex"
      gap="20px"
      h="115px"
      alignItems="center"
      background="#EDEDED"
      pl="200px"
    >
      <Input
        boxShadow="0 3px 3px #bdbdbd"
        p="0 0 0 30px"
        background="#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -75px"
        borderRadius="1px"
        h="36px"
        w="220px"
        bgColor="white"
        placeholder="Email"
      />
      <Input
        boxShadow="0 3px 3px #bdbdbd"
        p="0 0 0 30px"
        background="#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -75px"
        borderRadius="1px"
        h="36px"
        w="220px"
        bgColor="white"
        placeholder="Password"
      />
      <Input
        boxShadow="0 3px 3px #bdbdbd"
        p="0 0 0 30px"
        background="#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -75px"
        borderRadius="1px"
        h="36px"
        w="220px"
        bgColor="white"
        placeholder="Mobile No(Not mandetory)"
      />
      <Button
        w="102px"
        variant="none"
        boxShadow="0 3px 3px #bdbdbd"
        background="#92BE4D"
        color="white"
        h="36px"
        fontSize="15px"
        onClick={() => setRegister(true)}
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
      >
        X
      </Box>
    </Box>
  );
}
