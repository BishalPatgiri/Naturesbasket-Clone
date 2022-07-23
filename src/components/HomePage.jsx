import Header from "./Header";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import HomePageBody from "./HomePageBody";

export default function HomePage({ setSmall }) {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [home, setHome] = useState(true);
  return (
    <Box>
      <Box>{login && <Login setLogin={setLogin} />}</Box>
      <Box>{register && <Register setRegister={setRegister} />}</Box>
      <Box w="85%" m="auto">
        <Header
          setSmall={setSmall}
          setLogin={setLogin}
          setRegister={setRegister}
        />
        <Navbar setHome={setHome} />
        {home && <HomePageBody />}
      </Box>
    </Box>
  );
}
