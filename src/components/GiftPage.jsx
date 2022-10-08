import {
  Box,
  Button,
  HStack,
  Image,
  Select,
  Spacer,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { filterData, ProductData } from "./Api/api";

export default function GiftPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      ProductData()
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  });

  const handleAdd = (id, title, image, name, price, dis, qty) => {
    alert("Item Added to the Cart");
    let outData = {
      id: id,
      title: title,
      image: image,
      name: name,
      price: price,
      dis: dis,
      qty: qty
    };
    axios
      .post("https://c4-project-data.herokuapp.com/buy", outData)
      .catch((e) => console.log(e));
  };

  const handleSort = (e) => {
    const order = e.target.value;
    // console.log(order);
    ProductData(order)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const handleFilter = () => {
    filterData()
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <Box fontFamily="CeraPRO-light">
      <HStack>
        <Text
          textAlign="left"
          fontSize={["16px","20px","22px","24px"]}
          letterSpacing=".5px"
          borderBottom="1px solid #BAB1B1"
          p="10px 0px"
        >
          GIFT HAMPERS
        </Text>
        <Spacer />
        <Select
          onChange={handleSort}
          w={["90px","110px","140px","150px"]}
          fontSize={["9px","11px","13px","15px"]}
          placeholder="SORT by Price"
          marginRight="10px"
        >
          <option value="ASC">Low to High Price</option>
          <option value="DESC">High to Low Price</option>
        </Select>
      </HStack>

      <Box display="flex">
        <Box
          mt="20px"
          mr="20px"
          border="1px solid #999988"
          borderRadius="5px"
          p={["2px","15px"]}
          w={["30%","22%"]}
        >
          <Box display={["block","flex"]} borderBottom="1px" textAlign="left">
            <Text fontSize={["12px","20px"]}>FILTER</Text>
            <Spacer />
            <Text fontSize={["9px","14px"]}>CLEAR ALL</Text>
          </Box>
          <Text m="20px 0 18px 0" fontSize={["9px","14px"]} fontWeight="bold" textAlign="left">
            Gift Hampers
          </Text>
          <Button
            onClick={handleFilter}
            mb="8px"
            w="95%"
            colorScheme="pink"
            variant="outline"
            fontSize={["9px","14px"]}
          >
            E-Gift Vouchers
          </Button>
          <Button w="95%" colorScheme="pink" variant="outline" fontSize={["9px","14px"]}>
            All Hampers
          </Button>
        </Box>
        <Box
          w="75%"
          m="auto"
          mt="20px"
          display="grid"
          gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(4,1fr)"]}
          gridTemplateRows="auto"
          gap="25px"
          rowGap="35px"
          p={["5%","0"]}
        >
          {data.map((ele) => (
            <Box key={ele.id}>
              <Image borderRadius="10px" h={["180px","250px"]} w={["100%"]} src={ele.image} />
              <Text m="20px 0px">{ele.name}</Text>
              <Text w={"50%"} m="auto" border="1px solid green" borderRadius={"5px"}>
                {ele.price} Rs
              </Text>
              <HStack mt="15px" spacing="15px" justify="center">
                <Button
                  colorScheme="teal"
                  p="9px 10px"
                  size="sm"
                  variant="outline"
                >
                  MRP ₹{ele.price}
                </Button>
                <Button
                  onClick={() =>
                    handleAdd(
                      ele.id,
                      ele.title,
                      ele.image,
                      ele.name,
                      ele.price,
                      ele.dis,
                      ele.qty
                    )
                  }
                  colorScheme="teal"
                  p="9px 10px"
                  size="sm"
                  variant="solid"
                >
                  ADD
                </Button>
              </HStack>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
