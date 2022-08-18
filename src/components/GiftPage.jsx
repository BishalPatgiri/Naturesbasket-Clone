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
          fontSize="24px"
          letterSpacing=".5px"
          borderBottom="1px solid #BAB1B1"
          p="10px 0px"
        >
          GIFT HAMPERS
        </Text>
        <Spacer />
        <Select
          onChange={handleSort}
          w="150px"
          fontSize="15px"
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
          p="15px"
        >
          <HStack borderBottom="1px" textAlign="left">
            <Text fontSize="20px">FILTER</Text>
            <Spacer />
            <Text fontSize="13px">CLEAR ALL</Text>
          </HStack>
          <Text m="20px 0 18px 0" fontWeight="bold" textAlign="left">
            Gift Hampers
          </Text>
          <Button
            onClick={handleFilter}
            mb="8px"
            w="95%"
            colorScheme="pink"
            variant="outline"
          >
            E-Gift Vouchers
          </Button>
          <Button w="95%" colorScheme="pink" variant="outline">
            All Hampers
          </Button>
        </Box>
        <Box
          w="95%"
          m="auto"
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4,1fr)"
          gridTemplateRows="auto"
          gap="25px"
          rowGap="35px"
          pl="10px"
        >
          {data.map((ele) => (
            <Box key={ele.id}>
              <Image borderRadius="10px" h="250px" w="100%" src={ele.image} />
              <Text m="20px 0px">{ele.name}</Text>
              <Text w="25%" m="auto" border="1px solid green">
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
