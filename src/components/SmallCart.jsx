import { Box, Button, Center, Image, Text } from "@chakra-ui/react";

export default function SmallCart({ small, setSmall }) {
  return (
    <Box
      w="45%"
      cursor="pointer"
      position="fixed"
      top={["95px", "72px"]}
      right={["30px", "113px"]}
      bgColor="white"
      border="2px solid #4CA642"
      fontFamily="CeraPRO-light"
      display={small ? "block" : "none"}
      onMouseEnter={() => setSmall(true)}
      onMouseLeave={() => setSmall(false)}
    >
      <Center>
        <Image
          mt="50px"
          src="https://d1z88p83zuviay.cloudfront.net/Images/Icon-no-cart.png"
        />{" "}
      </Center>
      <Text
        mt="25px"
        mb="10px"
        fontSize={["20px", "32px"]}
        color="blackAlpha.900"
        letterSpacing="1px"
      >
        No Products Added to your Cart
      </Text>
      <Button
        variant="none"
        w={["100%", "60%"]}
        m="auto"
        color="white"
        bgColor="#65D43D"
        p="10px 50px"
      >
        Continue Shoping
      </Button>
      <Box
        mt="26px"
        p="10px"
        fontWeight="bold"
        color="#E54E9F"
        borderTop="1px solid #A3A8A1"
      >
        HAND PICK OFEER JUST FOR YOU
      </Box>
    </Box>
  );
}
