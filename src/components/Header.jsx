import { Box, Image, Text, Input, Spacer, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box>
      <HStack spacing="20px" w="100%">
        <Box>
          <Image
            w="315px"
            h="85px"
            src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
          ></Image>
        </Box>
        <Box w="100%" pl="25px">
          <HStack w="100%" fontSize="12px" spacing="30px" p="0px 3px 0px 50px">
            <Text>Online Availability</Text>
            <Text>Fresh & Fast</Text>
            <Text>Store Locator</Text>
            <Text>Contact Us</Text>
            <Text display="flex">
              <Image
                w="15px"
                src="https://icon-library.com/images/06_1-512_83716.png"
              ></Image>
              <select name="" id="">
                <option value="">City name</option>
                <option>Delhi NCR</option>
                <option>Navi Mumbai</option>
                <option>Bangalore</option>
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>
            </Text>
            <Text>
              <Input
                textAlign="center"
                background="url(https://www.naturesbasket.co.in/Images/edit-pin.png)"
                backgroundRepeat="no-repeat"
                backgroundPosition="left"
                size="xs"
                width="100px"
                type="number"
                placeholder=" Enter Pincode"
              />
            </Text>
            <Spacer></Spacer>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
          </HStack>
          <HStack spacing="0px">
            <Input
              outline="1px solid #B1C4E1"
              border="0px solid white"
              w="4xl"
              borderRadius="6px"
              size="sm"
              textAlign="center"
              placeholder="Start Shoping"
            ></Input>
            <HStack spacing="10px">
              <Image src="https://www.naturesbasket.co.in/Images/search-button.jpg"></Image>
              <Image
                w="21px"
                h="21px"
                src="https://www.clipartmax.com/png/full/0-7626_green-star-clip-art-star-icon-png-green.png"
              ></Image>
              <Image
                w="21px"
                h="21px"
                src="https://elasq.com/wp-content/uploads/2021/08/cart5.png"
              ></Image>
            </HStack>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}
