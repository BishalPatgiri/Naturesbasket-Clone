import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProductData } from "./Api/api";

export default function GiftPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ProductData()
      .then((res) => res.json())
      .then((res) => setData(res));
  });

  const handleAdd = () => {
    alert("Item Added to the Cart");
  };

  return (
    <Box fontFamily="CeraPRO-light">
      <Text
        textAlign="left"
        fontSize="24px"
        letterSpacing=".5px"
        borderBottom="1px solid #BAB1B1"
        p="10px 0px"
      >
        GIFT HAMPERS
      </Text>
      <Box
        w="95%"
        m="auto"
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4,1fr)"
        gridTemplateRows="auto"
        gap="25px"
        rowGap="35px"
      >
        {data.map((ele) => (
          <Box>
            <Image borderRadius="10px" h="250px" w="100%" src={ele.image} />
            <Text m="20px 0px">{ele.name}</Text>
            <Text w="25%" m="auto" border="1px solid green">
              {ele.price} Rs
            </Text>
            <HStack mt="15px" spacing="15px" justify="center">
              <Button
                colorScheme="teal"
                p="9px 10px"
                size="sm"
                variant="outline"
              >
                MRP ₹{ele.price}
              </Button>
              <Button
                onClick={handleAdd}
                colorScheme="teal"
                p="9px 10px"
                size="sm"
                variant="solid"
              >
                ADD
              </Button>
            </HStack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
