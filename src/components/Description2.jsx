import { Box, Button, Image, Input, Text } from "@chakra-ui/react";

export default function Description2() {
  return (
    <Box
      fontSize="14px"
      mt="30px"
      display="flex"
      justifyContent="space-between"
      fontFamily="CeraPRO-light"
      textAlign="left"
      p="0px 35px"
    >
      <Box>
        <Text mb="10px" fontWeight="bold">
          DOWNLOAD THE APP
        </Text>
        <a href="https://play.google.com/store/apps/details?id=com.godrej.naturesbasketltd">
          <Image
            h="57px"
            w="170px"
            src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
          />
        </a>
        <a href="https://apps.apple.com/in/app/natures-basket/id1013402486">
          <Image
            h="57px"
            w="170px"
            src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
          />
        </a>
      </Box>
      <Box>
        <Box>
          <Text mb="10px" fontWeight="bold">
            ABOUT US
          </Text>
          <Text>About Us</Text>
          <Text>Our Vesion And Purpose</Text>
          <Text>Quality Standards</Text>
          <Text>Awars</Text>
          <Text>FAQs</Text>
        </Box>
        <Box>
          <Text mt="20px" mb="10px" fontWeight="bold">
            CAREERS
          </Text>
          <Text>Work with us</Text>
        </Box>
      </Box>
      <Box>
        <Text mb="10px" fontWeight="bold">
          NEWS AND EVENTS
        </Text>
        <Text>Press Release</Text>
        <Text>Newsletters</Text>
        <Text>Events</Text>
        <Text>Photo Galaries</Text>
        <Text>NBTV</Text>
      </Box>
      <Box>
        <Text mb="10px" fontWeight="bold">
          NEWS AND EVENTS
        </Text>
        <Text>Press Release</Text>
        <Text>Newsletters</Text>
        <Text>Events</Text>
        <Text>Photo Galaries</Text>
        <Text>NBTV</Text>
      </Box>
      <Box>
        <Text mb="10px" fontWeight="bold">
          SIGN UP TO STAY UPDATED
        </Text>
        <Input
          m="20px 0 0"
          w="292px"
          h="47px"
          p="0 20px"
          placeholder="Enter Your Enail Address"
        />
        <br />
        <Button
          w="110px"
          h="33px"
          m="15px 0 0"
          p="8px 20px"
          bgColor="#99C655"
          borderRadius="5px"
          color="White"
          variant="none"
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
}
