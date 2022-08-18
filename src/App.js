import './App.css';
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import SmallCart from "./components/SmallCart";
import SmallLogo from "./components/SmallLogo";
import AllRotes from "./Routes/AllRoutes";

function App() {
  const [small, setSmall] = useState(false);
  return (
    <Box className="App">
      <AllRotes setSmall={setSmall} />
      <SmallLogo />
      <SmallCart small={small} setSmall={setSmall} />
    </Box>
  );
}

export default App;
