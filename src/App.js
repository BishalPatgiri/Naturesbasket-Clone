import { Box } from "@chakra-ui/react";
import SmallLogo from "./components/SmallLogo";
import AllRotes from "./Routes/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <Box className="App">
      <AllRotes />
      <SmallLogo />
    </Box>
  );
}
