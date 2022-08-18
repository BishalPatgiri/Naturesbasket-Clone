import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import GiftPage from "../components/GiftPage";
import HomePage from "../components/HomePage";
import MainCart from "../components/MainCart";
import PrivateRoute from "./PrivateRoute";

export default function AllRotes({ setSmall }) {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage setSmall={setSmall} />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <MainCart setSmall={setSmall} />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/gifting" element={<GiftPage />}></Route>
      </Routes>
    </Box>
  );
}
