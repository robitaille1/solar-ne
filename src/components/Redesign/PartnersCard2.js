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

function ProductAddToCart({ partner }) {
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
            <Box d="flex" alignItems="baseline" flexWrap="wrap">
              {partner.Tags &&
                partner.Tags.split(",").map((tag) => {
                  return (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      color={"green.400"}
                      backgroundColor={"green.50"}
                      mr={1}
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  );
                })}
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
