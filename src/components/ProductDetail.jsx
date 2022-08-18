import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function ProductDetail() {
  return (
    <Box textAlign="center" fontFamily="CeraPRO-light">
      <Box
        w="90%"
        m="auto"
        border="1px solid red"
        borderRadius="20px"
        p="4px"
        fontSize="xs"
        mt="10px"
      >
        DELIVERY IN 90 MINUTES
      </Box>
      <Text mt="10px" fontSize="sm">
        HTAPIOUCA FLOUR
      </Text>
      <Text mb="8px" fontSize="sm">
        1 Pc
      </Text>
      <HStack w="60%" m="auto" justify="space-between">
        <Button
          variant="none"
          w="45%"
          p="8px"
          h="25px"
          border="1px solid green"
          fontSize="xs"
        >
          MRP ₹250
        </Button>
        <Button
          variant="none"
          w="45%"
          h="25px"
          p="8px"
          backgroundColor="yellowgreen"
          color="white"
          fontSize="xs"
        >
          ADD
        </Button>
      </HStack>
    </Box>
  );
}
