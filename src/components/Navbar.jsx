import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import GiftPage from "./GiftPage";
export default function Navbar({ setHome }) {
  const [list, setList] = useState(false);
  const show = () => {
    setHome(false);
  };

  return (
    <Box
      w="100%"
      m="auto"
      // borderTopLeftRadius="10px"
      // borderToprightRadius="10px"
      borderTop="1px solid #BAACAC"
    >
      <Tabs>
        <TabList h="40px" display="flex" justifyContent="space-between">
          <Tab border="0px">
            <HStack
              ml="-17px"
              w="250px"
              mr="15px"
              bgColor="blackAlpha.100"
              justify="center"
            >
              <Text
                onClick={() => setHome(true)}
                letterSpacing="2px"
                border="0px"
                p="10px 0px 10px 0px"
                color="red"
                placeholder=""
                onMouseOver={() => setList(true)}
                onMouseOut={() => setList(false)}
              >
                SHOP BY CATEGORY
              </Text>
              <Image src="https://www.naturesbasket.co.in/Images/menuicon1.png" />
            </HStack>
          </Tab>
          <Tab p="0" h="40px" fontSize="15px">
            MY ORDERS
          </Tab>
          <Tab onClick={show} p="0" h="40px" fontSize="15px">
            GIFTING
          </Tab>
          <Tab p="0" h="40px" fontSize="15px">
            REWARDS
          </Tab>
          <Tab p="0" h="40px" fontSize="15px">
            BLOG
          </Tab>
          <Tab p="0" h="40px" fontSize="15px">
            OFFERS
          </Tab>
          <Tab p="0" h="40px" fontSize="15px">
            CONNOISSEUR'S SELECTIONS
          </Tab>
          <Tab p="0" h="40px" fontSize="15px">
            BOOK STORE VISIT
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <Box
              p="5px 15px"
              w="250px"
              bgColor="white"
              fontFamily="CeraPRO-light"
              fontSize="14px"
              textAlign="left"
              position="absolute"
              display={list ? "block" : "none"}
              onMouseOver={() => setList(true)}
              onMouseOut={() => setList(false)}
            >
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Gift Hampers
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Fruits & Vigetables
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Cheese, Meat & food platters
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Delicatessen & Cheese
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                International Cuisine
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Health
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Confectionary & Patisserie
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Meats, Seafood and Eggs
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Breakfast & Dairy
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                The Good Food Cafe
              </Text>
              <Text p="5px 0px" borderBottom="1px solid #BDB8B8">
                Packing Metarials
              </Text>
            </Box>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel>
            <GiftPage />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
