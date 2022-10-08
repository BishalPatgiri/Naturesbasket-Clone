import {
  Box,
  Image,
  Text,
  Input,
  Spacer,
  HStack,
  Select
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Header({ setSmall, setLogin, setRegister }) {
  const navigate = useNavigate();

  const GoCart = () => {
    navigate("/cart");
  };

  const goHome = () => {
    window.location.reload()
    navigate("/");
  };

  return (
    <Box position="sticky" top="1px" backgroundColor="white">
      <HStack w="100%" spacing={"4%"}>
        <Box w="27%">
          <Image
            cursor="pointer"
            onClick={goHome}
            h={["40px","50px","75px","85px"]}
            src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
          ></Image>
        </Box>
        <Box w="100%">
          <HStack w="100%" fontSize={["6px","8px","10px","12px"]} spacing="1.6%" pl="4%">
            <Text>Online Availability</Text>
            <Text>|</Text>
            <Text>Fresh & Fast</Text>
            <Text>|</Text>
            <Text>Store Locator</Text>
            <Text>|</Text>
            <Text>Contact Us</Text>
            <Text>|</Text>
            <Spacer></Spacer>
            <Text cursor="pointer" onClick={() => setLogin(true)}>
              Login
            </Text>
            <Text>|</Text>
            <Text cursor="pointer" onClick={() => setRegister(true)}>
              Register
            </Text>
          </HStack>
          <HStack
            fontFamily="CeraPRO-light"
            fontSize="14px"
            color="#555555"
            spacing="1%"
          >
            <HStack  mt="5px" border="1px solid #D1CDCD" w="92%" h="35px">
              <Text
                background="url(https://www.naturesbasket.co.in/Images/edit-pin.png)"
                backgroundRepeat="no-repeat"
                backgroundPosition="4px"
                border="0px"
                p="5px 0 0 10px"
                backgroundColor="#F3E9E9"
                mr="-7.8px"
                w="120px"
                borderRight="1px solid #9E9797"
                h="100%"
                fontSize={["8px","10px","12px","14px"]}
              >
                Enter Pin
              </Text>
              <Box
                display="flex"
                backgroundColor="#F3E9E9"
                borderRight="1px solid #9E9797"
                h="100%"
              >
                <Select
                  fontFamily="CeraPRO-light"
                  fontSize="14px"
                  focusBorderColor="#F3F9F9"
                  h="100%"
                  p="5px 1px 0px 1px"
                >
                  <option value="">City</option>
                  <option>Delhi NCR</option>
                  <option>Navi Mumbai</option>
                  <option>Bangalore</option>
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                </Select>
              </Box>
              <Input
                outline="0"
                border="0px"
                h="92%"
                borderRadius="0"
                size="sm"
                textAlign="center"
                placeholder="Start Shoping"
                focusBorderColor="white"
              ></Input>
              <Image
                w={["12%","10%","8%","5%"]}
                h="100%"
                mt="5px"
                ml={"-8px"}
                src="https://www.naturesbasket.co.in/Images/search-button.jpg"
              ></Image>
            </HStack>
            <HStack spacing={["2%","2%","3%","5%"]} onMouseLeave={() => setSmall(false)}>
              <Image
                w="45%"
                h="21px"
                src="https://www.clipartmax.com/png/full/0-7626_green-star-clip-art-star-icon-png-green.png"
              ></Image>
              <Text fontSize="25px">|</Text>
              <Image
                onMouseEnter={() => setSmall(true)}
                w="45%"
                h="25px"
                cursor="pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs-FxqKI5BHf-6HpTRHNtKdXTxpBB6TxB6UHHCFi_LhMLSANgyOgpv9AMb35U7icVqnI&usqp=CAU"
                onClick={GoCart}
              ></Image>
            </HStack>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}
