import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function ProductDetail() {
  return (
    <Box textAlign="center" fontFamily="CeraPRO-light">
      <Box
        w="90%"
        m="auto"
        border="1px solid red"
        borderRadius="20px"
        p="0"
        fontSize="xs"
      >
        DELIVERY IN 90 MINUTES
      </Box>
      <Text fontSize="sm">HTAPIOUCA FLOUR</Text>
      <Text fontSize="sm">1 Pc</Text>
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
          background="url(https://www.naturesbasket.co.in/Images/CartAddBtn.PNG)"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="100% 100%"
          fontSize="xs"
        ></Button>
      </HStack>
    </Box>
  );
}
