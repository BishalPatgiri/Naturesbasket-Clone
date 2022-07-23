import { Box, Select } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      w="100%"
      m="auto"
      borderTopLeftRadius="10px"
      borderToprightRadius="10px"
      borderTop="1px solid #BAACAC"
    >
      <Tabs>
        <TabList h="40px" display="flex" justifyContent="space-between">
          <Select
            bgColor="blackAlpha.100"
            letterSpacing="3px"
            mr="15px"
            w="300px"
            border="0px"
            color="red"
            placeholder="SHOP BY CATEGORY"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Tab p="0" h="40px" fontSize="15px">
            MY ORDERS
          </Tab>
          <Tab p="0" h="40px" fontSize="15px">
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
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
