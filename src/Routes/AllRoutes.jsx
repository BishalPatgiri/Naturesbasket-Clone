import { Box, Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import MainCart from "../components/MainCart";

export default function AllRotes({ setSmall }) {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage setSmall={setSmall} />}></Route>
        <Route path="/Login" element={<h1>Login</h1>}></Route>
        <Route path="/cart" element={<MainCart setSmall={setSmall} />}></Route>
        <Route path="/gifts" element={<Text>Gift</Text>}></Route>
      </Routes>
    </Box>
  );
}
