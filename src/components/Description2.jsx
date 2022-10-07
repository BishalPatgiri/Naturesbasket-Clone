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
      <Box w="18%">
        <Text mb="10px" fontWeight="bold" fontSize={["8px","13px","15px","17px"]} >
          DOWNLOAD THE APP
        </Text>
        <a href="https://play.google.com/store/apps/details?id=com.godrej.naturesbasketltd">
          <Image
            h={["10px","25px","35px","57px"]}
            w="170px"
            src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
          />
        </a>
        <a href="https://apps.apple.com/in/app/natures-basket/id1013402486">
          <Image
            h={["10px","25px","35px","57px"]}
            w="170px"
            src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
          />
        </a>
      </Box>
      <Box w="18%">
        <Box>
          <Text mb="10px" fontWeight="bold" fontSize={["8px","13px","15px","17px"]}>
            ABOUT US
          </Text>
          <Text fontSize={["8px","10px","13px","16px"]}>About Us</Text>
          <Text fontSize={["8px","10px","13px","16px"]}>Our Vesion And Purpose</Text>
          <Text fontSize={["8px","10px","13px","16px"]}>Quality Standards</Text>
          <Text fontSize={["8px","10px","13px","16px"]}>Awars</Text>
          <Text fontSize={["8px","10px","13px","16px"]}>FAQs</Text>
        </Box>
        <Box>
          <Text mt="20px" mb="10px" fontWeight="bold" fontSize={["8px","13px","15px","17px"]}>
            CAREERS
          </Text>
          <Text fontSize={["8px","10px","13px","16px"]}>Work with us</Text>
        </Box>
      </Box>
      <Box w="18%">
        <Text mb="10px" fontWeight="bold" fontSize={["8px","13px","15px","17px"]}>
          NEWS AND EVENTS
        </Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Press Release</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Newsletters</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Events</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Photo Galaries</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>NBTV</Text>
      </Box>
      <Box>
        <Text mb="10px" fontWeight="bold" fontSize={["8px","13px","15px","17px"]}>
          NEWS AND EVENTS
        </Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Press Release</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Newsletters</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Events</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>Photo Galaries</Text>
        <Text fontSize={["8px","10px","13px","16px"]}>NBTV</Text>
      </Box>
      <Box w="18%">
        <Text mb="10px" fontWeight="bold" fontSize={["8px","13px","15px","17px"]}>
          SIGN UP TO STAY UPDATED
        </Text>
        <Input
          m="20px 0 0"
          w="100%"
          h={["15px","25px","35","42px"]}
          p="0 20px"
          placeholder="Enter Your Email Address"
        />
        <br />
        <Button
          w={["85%","70%","50%","45%"]}
          h={["15px","20px","25px","33px"]}
          m="15px 0 0"
          p="8px 20px"
          bgColor="#99C655"
          borderRadius="4px"
          color="White"
          variant="none"
          fontSize={["7px","10px","12px"]}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
}
