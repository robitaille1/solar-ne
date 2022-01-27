import React from "react";
import {
  Flex,
  Box,
  Badge,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function ProductAddToCart({ partner }) {
  console.log(partner);
  return (
    <Flex p={30} w="full" alignItems="center" justifyContent="center">
      <Link
        as={ReachLink}
        to={`/partners/${partner.slug}`}
        _hover={{ textDecoration: "none" }}
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Box
            bgImage={partner.PartnerImage[0].url}
            bgSize={"cover"}
            width={"100%"}
            maxH={210}
            minHeight={200}
            roundedTop="lg"
            bgPos={"center"}
          ></Box>

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {partner.PartnerName}
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Text color={"gray.500"} fontSize={"lg"}>
                  {partner.ShortDescription}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
}

export default ProductAddToCart;
