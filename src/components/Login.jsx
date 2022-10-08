import {
  Box,
  Button,
  Image,
  Input,
  Spacer,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/ContextApi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

export default function Login({ setLogin }) {
  const toast = useToast()
  const { Toggle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    const input=JSON.parse(localStorage.getItem("userData"))
    if(!input){
      toast({
        position: 'top-left',
        title: 'User not found',
        description: "Please register first to login",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

    }
    if(input.email===email&&input.password===pass){
      setOverlay(<OverlayOne />);
      onOpen();
      Toggle();
      setTimeout(()=>{
        setLogin(false)
      },1800)
      
    }
    else{
      toast({
        position: 'top-left',
        title: 'Invalid Credentials !!',
        description: "Please try again.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <Box background="#EDEDED">
      <Box py="2%" px={["2%","4%","8%","10%"]} fontFamily="CeraPRO-light" fontSize="15px">
        <Box display={["block","flex","flex","flex"]} gap="25px">
          <Box w="25%">
            <Input
              mb={["10px","0","0","0"]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              type={"email"}
              border="1px solid #9f9f9f"
              p="0 0 0 45px"
              borderRadius="2px"
              w="220px"
              h={["25px","35px","35px","36px"]}
              fontSize="14px"
              boxShadow="0 3px 3px #bdbdbd"
              background={["none","#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px 11px"]}
            />
          </Box>
          <Box w="25%">
            <Input
              mb={["10px","0","0","0"]}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              border="1px solid #9f9f9f"
              p="0 0 0 45px"
              borderRadius="2px"
              h={["25px","35px","35px","36px"]}
              fontSize="14px"
              boxShadow="0 3px 3px #bdbdbd"
              background={["none","#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -34px"]}
            />
          </Box>
          <Box p="0" w={["60%","15%","15%","15%"]} display={["flex","block","block","block"]} gap="10px">
            <Button
              w={["30%","100%","100%","100%"]}
              boxShadow="0 3px 3px #bdbdbd"
              bgColor="#92BE4D"
              color="white"
              variant="none"
              h={["25px","35px","35px","36px"]}
              borderRadius="4px"
              onClick={() => {
                handleLogin();
              }}
            >
              LOG IN
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent textAlign="center" mb="20px">
                <ModalCloseButton />
                <ModalBody mt="20px">
                  <center>
                    <Image
                      h="100px"
                      w="100px"
                      src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.svg"
                    />
                  </center>
                </ModalBody>
                <ModalHeader color="green">Successfully Loged in</ModalHeader>
              </ModalContent>
            </Modal>
            <Text color="#B71761">Forgot Password ?</Text>
          </Box>
          <Box>
            <Text fontSize="16px" color="#008000">
              Login via OTP
            </Text>
          </Box>
          <Spacer />
          <Box position="absolute" top="5px" right="10%">
            <Text
              cursor="pointer"
              onClick={() => setLogin(false)}
              fontSize="20px"
              fontWeight="bold"
            >
              X
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
