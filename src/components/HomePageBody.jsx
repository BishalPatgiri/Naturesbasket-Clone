import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import Description1 from "./Description";
import Description2 from "./Description2";
import Footer from "./Footer";
import PaymentMethod from "./PaymentMethods";
import ProductDetail from "./ProductDetail";
import { Slider2 } from "./Slider2";

const sty = {
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
};

const nosty = {
  boxShadow: "none"
};

export default function HomePageBody() {
  const [hov, setHov] = useState(false);
  return (
    <Box>
      <Image
        h="100%"
        w="100%"
        src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg?v=1"
      />
      <Slider2 />
      <HStack p="0px 6px" justify="space-between">
        <Image
          borderRadius="10px"
          boxShadow="2px 5px #a09191bd"
          w="32%"
          h={["70px","165px","185","205px"]}
          src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7"
        />
        <Image
          borderRadius="10px"
          boxShadow="2px 5px #a09191bd"
          w="32%"
          h={["70px","165px","185","205px"]}
          src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=10"
        />
        <Image
          borderRadius="10px"
          boxShadow="2px 5px #a09191bd"
          w="32%"
          h={["70px","165px","185","205px"]}
          src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
        />
      </HStack>
      <Text
        mt="15px"
        fontSize={["12px","16px","20px","24px"]}
        fontFamily="CeraPRO-Regular"
        textAlign="center"
        p="0 30px"
      >
        SHOP BY CATEGORY
      </Text>
      <HStack p="0px 6px" justify="space-between" mt="10px">
        <Image
          w="24%"
          borderRadius="10px"
          boxShadow="5px 5px 5px 5px rgb(199 138 102 / 37%)"
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png"
        />
        <Image
          w="24%"
          borderRadius="10px"
          boxShadow="5px 5px 5px 5px rgb(199 138 102 / 37%)"
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png"
        />
        <Image
          w="24%"
          borderRadius="10px"
          boxShadow="5px 5px 5px 5px rgb(199 138 102 / 37%)"
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png"
        />
        <Image
          w="24%"
          borderRadius="10px"
          boxShadow="5px 5px 5px 5px rgb(199 138 102 / 37%)"
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png"
        />
      </HStack>
      <HStack
        p="0px 5px"
        mt="15px"
        textAlign="left"
        justify="space-between"
        lineHeight={["18px","22px","28px","35px"]}
      >
        <Box w="21%">
          <Text fontSize={["9px","11px","13px","16px"]} fontWeight="bold">Exotic Vigitables</Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Asparagus Artichokes
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Avocados Peppers
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Broccoli Zucchini
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            View All
          </Text>
        </Box>
        <Box w="21%">
          <Text fontSize={["9px","11px","13px","16px"]} fontWeight="bold">Exotic Vigitables</Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Chicken Cuts Lollipops Mince
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Fish Other Seafood
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Fresh Kebabs Others
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            View All
          </Text>
        </Box>
        <Box w="21%">
          <Text fontSize={["9px","11px","13px","16px"]} fontWeight="bold">Exotic Vigitables</Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Asparagus Artichokes
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Avocados Peppers
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Broccoli Zucchini
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            View All
          </Text>
        </Box>
        <Box w="21%">
          <Text fontSize={["9px","11px","13px","16px"]} fontWeight="bold">Exotic Vigitables</Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Asparagus Artichokes
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Avocados Peppers
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            Broccoli Zucchini
          </Text>
          <Text
            color="#333333"
            borderBottom="1px solid #999999"
            fontSize={["8px","10px","12px","14px"]}
          >
            View All
          </Text>
        </Box>
      </HStack>
      <Image
        mt="20px"
        src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg"
        h={["140px","190px","250px","300px"]}
        w="100%"
        borderRadius="10px"
      />
      <Text
        mt="15px"
        fontSize={["12px","16px","20px","24px"]}
        fontFamily="CeraPRO-Regular"
        textAlign="center"
        p="0 30px"
      >
        WHAT'S TRENDING
      </Text>
      <HStack mt="15px" justifyContent="space-between">
        <Box w="24%"
          p="10px"
          onMouseEnter={() => {
            setHov(true);
          }}
          onMouseLeave={() => {
            setHov(false);
          }}
          style={hov ? sty : nosty}
        >
          <Box>
            <Image
              border="0.2px solid rgb(238, 238, 238)"
              w="99%"
              borderRadius="10px"
              boxShadow="1px 2px #efe9e9"
              src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"
            />
          </Box>
          <Box>
            <ProductDetail />
          </Box>
        </Box>
        <Box
        w="24%"
          p="10px"
          onMouseEnter={() => {
            setHov(true);
          }}
          onMouseLeave={() => {
            setHov(false);
          }}
          style={hov ? sty : nosty}
        >
          <Box>
            <Image
              border="0.2px solid rgb(238, 238, 238)"
              w="99%"
              borderRadius="10px"
              boxShadow="1px 2px #efe9e9"
              src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6b0dd5aa-bbfe-4961-b40a-2114246bcae9_425x425.jpg"
            />
          </Box>
          <Box>
            <ProductDetail />
          </Box>
        </Box>
        <Box
        w="24%"
          p="10px"
          onMouseEnter={() => {
            setHov(true);
          }}
          onMouseLeave={() => {
            setHov(false);
          }}
          style={hov ? sty : nosty}
        >
          <Box>
            <Image
              border="0.2px solid rgb(238, 238, 238)"
              w="99%"
              borderRadius="10px"
              boxShadow="1px 2px #efe9e9"
              src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"
            />
          </Box>
          <Box>
            <ProductDetail />
          </Box>
        </Box>
        <Box
        w="24%"
          p="10px"
          onMouseEnter={() => {
            setHov(true);
          }}
          onMouseLeave={() => {
            setHov(false);
          }}
          style={hov ? sty : nosty}
        >
          <Box>
            <Image
              border="0.2px solid rgb(238, 238, 238)"
              w="99%"
              borderRadius="10px"
              boxShadow="1px 2px #efe9e9"
              src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6b0dd5aa-bbfe-4961-b40a-2114246bcae9_425x425.jpg"
            />
          </Box>
          <Box>
            <ProductDetail />
          </Box>
        </Box>
      </HStack>
      <Text
        mt="15px"
        fontSize={["12px","16px","20px","24px"]}
        fontFamily="CeraPRO-Regular"
        textAlign="center"
        p="0 30px"
      >
        OUR EVENTS
      </Text>
      <HStack p="0px 8px" mt="10px" justify="space-between" borderRadius="10px">
        <Image
          src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg"
          h={["150px","210px","280px","340px"]}
          w="32.5%"
          borderRadius="10px"
        />
        <Image
          src="https://www.naturesbasket.co.in/Images/PhotoGallery/IndiaSportsHonours2019NaturesBasketGiftingBNR.jpg?v=2"
          h={["150px","210px","280px","340px"]}
          w="32.5%"
          borderRadius="10px"
        />
        <Image
          src="https://www.naturesbasket.co.in/Images/PhotoGallery/SaranshHome.png?v=2"
          h={["150px","210px","280px","340px"]}
          w="32.5%"
          borderRadius="10px"
        />
      </HStack>
      <Text
        mt="15px"
        fontSize={["12px","16px","20px","24px"]}
        fontFamily="CeraPRO-Regular"
        textAlign="center"
        p="0 30px"
      >
        SHOP BY WORLD BRANDS
      </Text>
      <HStack p="0px 20px" mt="20px" justify="space-between">
        <Image w={"19%"} src="https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg"></Image>
        <Image w={"19%"} src="https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg"></Image>
        <Image w={"19%"} src="https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg"></Image>
        <Image w={"19%"} src="https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg"></Image>
        <Image w={"19%"} src="https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg"></Image>
      </HStack>
      <Description1 />
      <Description2 />
      <PaymentMethod />
      <Footer />
    </Box>
  );
}
