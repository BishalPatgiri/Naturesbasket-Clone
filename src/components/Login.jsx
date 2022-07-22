import { Box, Button, HStack, Input, Spacer, Text } from "@chakra-ui/react";

export default function Login({ setLogin }) {
  return (
    <Box background="#EDEDED">
      <Box h="135px" fontFamily="CeraPRO-light" fontSize="15px">
        <HStack p="0" spacing="25px" pl="200px" pt="20px">
          <Box>
            <Input
              placeholder="Email Address"
              border="1px solid #9f9f9f"
              p="0 0 0 45px"
              borderRadius="2px"
              w="242px"
              h="38px"
              fontSize="14px"
              boxShadow="0 3px 3px #bdbdbd"
              background="#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px 11px"
            />
          </Box>
          <Box>
            <Input
              type="password"
              placeholder="Password"
              maxlength="100"
              border="1px solid #9f9f9f"
              p="0 0 0 45px"
              borderRadius="2px"
              w="242px"
              h="38px"
              fontSize="14px"
              boxShadow="0 3px 3px #bdbdbd"
              background="#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -34px"
            />
          </Box>
          <Box>
            <Button
              boxShadow="0 3px 3px #bdbdbd"
              bgColor="#92BE4D"
              color="white"
              mt="22px"
              variant="none"
              h="36px"
              borderRadius="4px"
            >
              LOG IN
            </Button>
            <Text color="#B71761">Forgot Password ?</Text>
          </Box>
          <Box>
            <Text fontSize="16px" color="#008000">
              Login via OTP
            </Text>
          </Box>
          <Spacer />
          <Box position="absolute" top="5px" right="100px">
            <Text
              cursor="pointer"
              onClick={() => setLogin(false)}
              fontSize="20px"
              fontWeight="bold"
            >
              X
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
