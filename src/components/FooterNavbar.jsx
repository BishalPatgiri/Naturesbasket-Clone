import { Box, Text } from "@chakra-ui/react";

export default function FooterNavbar() {
  return (
    <Box
      fontSize="14px"
      fontFamily="CeraPRO-light"
      display="flex"
      mt="20px"
      borderTop="1px solid #999999"
      p="10px 0px 40px"
    >
      <Text m="0px 4px">
        © 2020 Natures Basket Limited. All rights reserved.{" "}
      </Text>
      <Text m="0px 4px">|</Text>
      <Text m="0px 4px">Privacy Policy </Text>

      <Text m="0px 4px">|</Text>
      <Text m="0px 4px">Terms of Use</Text>
      <Text m="0px 4px">|</Text>
      <Text m="0px 4px">Home Delivery Number - 8880077745</Text>
      <Text m="0px 4px">|</Text>
      <Text m="0px 4px">Site Map</Text>
      <Text m="0px 4px">|</Text>
      <Text m="0px 4px">Mobile Site</Text>
      <Text m="0px 4px">|</Text>
      <Text m="0px 4px">FSSAI License Number - 11519002000496</Text>
    </Box>
  );
}
