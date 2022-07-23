import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { buyData } from "./Api/api";

export default function MainCart({ setSmall }) {
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(1);
  const inc = () => {
    setQty(qty + 1);
  };
  const dec = () => {
    setQty(qty >= 2 ? qty - 1 : qty);
  };

  useEffect(() => {
    buyData()
      .then((res) => res.json())
      .then((res) => setData(res));
  });
  return (
    <Box w="85%" m="auto" fontFamily="CeraPRO-light" fontSize="16px">
      <Header setSmall={setSmall} />
      <Navbar />
      <Image src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/websitecart.png" />
      <Text mt="20px" float="left">
        MY CART
      </Text>
      <br />
      <HStack mt="20px" justify="right">
        <Button colorScheme="green" variant="outline">
          CONTINUE SHOPPING
        </Button>
        <Button colorScheme="green" variant="solid">
          PROCCED TO CHECKOUT
        </Button>
      </HStack>
      <Box
        borderTop="1px solid #B7B3B3"
        pt="8px"
        mt="25px"
        display="flex"
        justifyContent="center"
      >
        <Image
          src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png"
          h="25px"
        />
        <Text color="#B71761" p="2px 0 5px" textTransform="uppercase">
          Get your order delivered in 90 minutes . Service timings between 10:00
          am to 9.30 pm .
        </Text>
      </Box>
      <Box>
        <HStack p="8px 0px" borderBottom="2px solid green" textAlign="left">
          <Text w="50%">Name</Text>
          <Text w="12%">Price</Text>
          <Text w="12%">Discount</Text>
          <Text w="12%">Quantity</Text>
          <Text w="12%">Subtotal</Text>
        </HStack>
        {data.map((ele) => (
          <Box>
            <Box p="8px" textAlign="left" borderBottom="1px solid #938D8D">
              <Text fontWeight="bold">{ele.title}</Text>
            </Box>
            <HStack m="10px 0px" bgColor="#FAD9D9" p="8px" textAlign="left">
              <Box display="flex" w="50%">
                <Image
                  mr="10px"
                  h="50px"
                  w="50px"
                  p="0 0 0 6px"
                  src={ele.image}
                />
                <Text>{ele.name}</Text>
              </Box>
              <Text w="12%">₹ {ele.price}</Text>
              <Text w="12%">{ele.dis}</Text>
              <Box w="12%" display="flex">
                <Button
                  onClick={inc}
                  size="sm"
                  colorScheme="green"
                  variant="solid"
                >
                  +
                </Button>
                <Text m="5px 10px">{qty}</Text>
                <Button
                  onClick={dec}
                  size="sm"
                  colorScheme="green"
                  variant="solid"
                >
                  -
                </Button>
              </Box>
              <Text w="12%">{ele.price * ele.qty}</Text>
            </HStack>
          </Box>
        ))}
        {/* <Box p="8px" textAlign="left" borderBottom="1px solid #938D8D">
          <Text fontWeight="bold">Title</Text>
        </Box> */}
        {/* <HStack m="10px 0px" bgColor="#FAD9D9" p="8px" textAlign="left">
          <Box display="flex" w="50%">
            <Image src="" />
            <Text>Name</Text>
          </Box>
          <Text w="12%">Price</Text>
          <Text w="12%">Discount</Text>
          <Box w="12%" display="flex">
            <Button onClick={inc} size="sm" colorScheme="green" variant="solid">
              +
            </Button>
            <Text m="5px 10px">{qty}</Text>
            <Button onClick={dec} size="sm" colorScheme="green" variant="solid">
              -
            </Button>
          </Box>
          <Text w="12%">Subtotal</Text>
        </HStack> */}
      </Box>
    </Box>
  );
}
