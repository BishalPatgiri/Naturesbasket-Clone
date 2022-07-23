import Header from "./Header";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box w="85%" m="auto">
      <Header />
      <Navbar />
    </Box>
  );
}
