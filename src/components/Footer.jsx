import { Box, Text } from "@chakra-ui/react";
import FooterNavbar from "./FooterNavbar";

export default function Footer() {
  return (
    <Box>
      <Box
        mt="30px"
        fontFamily="CeraPRO-Light"
        textAlign="left"
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Box>
            <Text fontWeight="bold">FRESH & FAST</Text>
          </Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              GIFT HAMPERS
            </Text>
            <Text>Birthday & Anniversary Gift Hampers</Text>
            <Text>World Cuisine Gift Hampers</Text>
            <Text>Organic & Health Gift Hampers</Text>
            <Text>Coffee & Tea Gift Hampers</Text>
            <Text>Get Well Soon Gift Hampers</Text>
          </Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              FRUITS & VIGETABLES
            </Text>
            <Text>Vegetables</Text>
            <Text>Exotic Vegetables</Text>
            <Text>Fruits</Text>
            <Text>Organic Fruits & Vegetables</Text>
            <Text>Exotic Fruits</Text>
            <Text>Canned & Frozen</Text>
            <Text>Cold - Pressed Fresh Juices</Text>
          </Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              DELICATESSEN & CHEESE
            </Text>
            <Text>Fresh Snacks & Party Food</Text>
            <Text>Antipasti</Text>
            <Text>Gourmet Cheese Shop</Text>
            <Text>Cold Cuts & Sausages</Text>
            <Text>Cheese Spread, Slices & Others</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              INTERNATINAL CUISINE
            </Text>
            <Text>Italian & Continental</Text>
            <Text>Middle-Eastern</Text>
            <Text>Condiments</Text>
            <Text>Flours, Grains & More</Text>
            <Text>Mexican</Text>
            <Text>Salad Dressing</Text>
            <Text>Vinegars & Mustards</Text>
            <Text>Salt, Sugar & Substitutes</Text>
            <Text>Pan-Asian</Text>
            <Text>Baking Ingredients</Text>
            <Text>Oils</Text>
            <Text>Soups</Text>
          </Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              HELP
            </Text>
            <Text>Weight Management Foods</Text>
            <Text>Heart - Healthy Foods</Text>
            <Text>Wellness & Immunity Boosters</Text>
            <Text>Diabetic - Friendly Foods</Text>
            <Text>Problem Solution Foods</Text>
            <Text>Organic</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              CONFECTIONARY & PATISSERIE
            </Text>
            <Text>Chocolates</Text>
            <Text>Ice Creams & Desserts</Text>
            <Text>Confectionery</Text>
            <Text>Baking Ingredients</Text>
            <Text>Patisserie</Text>
          </Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              MEATS SEAFOOD AND EGGS
            </Text>
            <Text>Fresh Meats & Seafood</Text>
            <Text>Cold Cuts & Sausages</Text>
            <Text>Packaged Sea food & Meats</Text>
            <Text>Eggs</Text>
            <Text>Frozen</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              BREAKFAST & DAIRY
            </Text>
            <Text>Cereals, Bars & Others</Text>
            <Text>Jams, Preserves & Conserves</Text>
            <Text>Honey</Text>
            <Text>Indian Breakfast Favourites</Text>
            <Text>Frozen</Text>
            <Text> Spreads</Text>
            <Text>Milk, Yogurt & Other Dairy Drinks</Text>
            <Text> Butters & Margarines</Text>
            <Text>Bakery</Text>
          </Box>
          <Box>
            <Text mt="40px" fontWeight="bold">
              INSTANT MEALS & AIDS
            </Text>
            <Text>Ready to Cook</Text>
            <Text>Ready to Eat</Text>
            <Text>Accessories</Text>
            <Text>Books</Text>
          </Box>
        </Box>
      </Box>
      <FooterNavbar />
    </Box>
  );
}
