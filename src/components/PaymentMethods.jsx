import { Box, Image, Spacer, Text } from "@chakra-ui/react";

export default function PaymentMethod() {
  return (
    <Box
      mt="20px"
      display="flex"
      fontSize="13px"
      fontFamily="CeraPro-Light"
      p="5px 10px"
      border="0"
      borderTop="1px solid #888888"
      borderBottom="1px solid #888888"
    >
      <Text mt="10px" mr="10px">
        Payment Method
      </Text>
      <Image
        w="494px"
        h="45px"
        src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
      />
      <Spacer />
      <Text mt="10px" mr="10px">
        Keep in Touch
      </Text>
      <Image
        h="34px"
        src="https://www.naturesbasket.co.in/Images/footer-social.png"
      />
    </Box>
  );
}
