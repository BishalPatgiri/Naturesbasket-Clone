import Header from "./Header";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

export default function HomePage() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <Box>
      <Box>{login && <Login setLogin={setLogin} />}</Box>
      <Box>{register && <Register setRegister={setRegister} />}</Box>
      <Box w="85%" m="auto">
        <Header setLogin={setLogin} setRegister={setRegister} />
        <Navbar />
      </Box>
    </Box>
  );
}
