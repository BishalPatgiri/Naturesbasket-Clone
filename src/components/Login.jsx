import {
  Box,
  Button,
  HStack,
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

export default function Login({ setLogin }) {
  const { Toggle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    Toggle();
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
      <Box h="135px" fontFamily="CeraPRO-light" fontSize="15px">
        <HStack p="0" spacing="25px" pl="200px" pt="20px">
          <Box>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              border="1px solid #9f9f9f"
              p="0 0 0 45px"
              borderRadius="2px"
              w="242px"
              h="38px"
              fontSize="14px"
              boxShadow="0 3px 3px #bdbdbd"
              background="#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px 11px"
            />
          </Box>
          <Box>
            <Input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              maxlength="100"
              border="1px solid #9f9f9f"
              p="0 0 0 45px"
              borderRadius="2px"
              w="242px"
              h="38px"
              fontSize="14px"
              boxShadow="0 3px 3px #bdbdbd"
              background="#ffffff url(https://www.naturesbasket.co.in/Images/login-place-icon.png) no-repeat 5px -34px"
            />
          </Box>
          <Box>
            <Button
              boxShadow="0 3px 3px #bdbdbd"
              bgColor="#92BE4D"
              color="white"
              mt="22px"
              variant="none"
              h="36px"
              borderRadius="4px"
              onClick={() => {
                handleLogin();
                setOverlay(<OverlayOne />);
                onOpen();
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
          <Box position="absolute" top="5px" right="100px">
            <Text
              cursor="pointer"
              onClick={() => setLogin(false)}
              fontSize="20px"
              fontWeight="bold"
            >
              X
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
