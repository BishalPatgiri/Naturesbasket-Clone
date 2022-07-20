import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";

export default function AllRotes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Login" element={<h1>I am Login</h1>}></Route>
        <Route path="/Register" element={<h1>Register</h1>}></Route>
      </Routes>
    </Box>
  );
}
