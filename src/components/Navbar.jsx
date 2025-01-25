import { Link as ReactRouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  Flex,
  Heading,
  Spacer,
  HStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      py={"20px"}
      px={"240px"}
      borderBottom={"2px"}
      borderColor={"brand.blue.200"}
      color={"brand.sky.800"}
      // className="flex justify-between items-center p-5 px-60 border-2 border-blue-200 text-sky-800"
    >
      <Heading
        fontSize={"xl"}
        // className="font-bold text-xl"
      >
        <ChakraLink as={ReactRouterLink} to="/" data-testid="home-page">
          Student Portal
        </ChakraLink>
      </Heading>
      <Spacer />
      <HStack
        as={UnorderedList}
        gap={"8px"}
        listStyleType="none"
        // className="flex gap-2"
      >
        <ListItem>
          <ChakraLink
            as={ReactRouterLink}
            to="/student"
            data-testid="student-page"
            _hover={{
              backgroundColor: "brand.sky.800",
              color: "white",
            }}
            py={"8px"}
            px={"16px"}
            borderRadius={"8px"}
            className="hover:bg-sky-800 hover:text-white rounded py-2 px-4"
          >
            All Student
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink
            as={ReactRouterLink}
            to="/add"
            data-testid="add-page"
            _hover={{
              backgroundColor: "brand.sky.800",
              color: "white",
            }}
            py={"8px"}
            px={"16px"}
            borderRadius={"8px"}
            // className="hover:bg-sky-800 hover:text-white rounded py-2 px-4"
          >
            Add Student
          </ChakraLink>
        </ListItem>
      </HStack>
    </Flex>
  );
};

export default NavBar;
