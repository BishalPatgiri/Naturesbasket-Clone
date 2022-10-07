import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function ProductDetail() {
  return (
    <Box textAlign="center" fontFamily="CeraPRO-light">
      <Box
        w="90%"
        m="auto"
        border={["0","1px solid red","1px solid red","1px solid red"]}
        borderRadius="20px"
        p="4px"
        fontSize={["9px","11px","12px","14px"]}
        mt="10px"
      >
        DELIVERY IN 90 MINUTES
      </Box>
      <Text mt="10px" fontSize={["9px","11px","12px","14px"]}>
        HTAPIOUCA FLOUR
      </Text>
      <Text mb="8px" fontSize={["9px","11px","12px","14px"]}>
        1 Pc
      </Text>
      <Box display={["block","flex","flex","flex"]} w={["95%","85%","75%","60%"]} m="auto" justifyContent="space-between">
        <Box w="48%">
        <Button
          variant="none"
          w="100%"
          p={["6px"]}
          h="25px"
          fontSize={["8px","10px","12px","14px"]}
        >
          MRP ₹250
        </Button>
        </Box>
        <Box w="48%">
        <Button
          variant="none"
          w={"100%"}
          h="25px"
          p={["6px"]}
          backgroundColor="yellowgreen"
          color="white"
          fontSize={["8px","11px","12px","14px"]}
        >
          ADD
        </Button>
        </Box>
      </Box>
    </Box>
  );
}
