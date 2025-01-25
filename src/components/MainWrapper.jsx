import { Flex, Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "./Footer";

const MainWrapper = (props) => {
  return (
    <Flex
      flexDirection={"column"}
      h={"100vh"}
      // className="flex flex-col h-screen"
    >
      <Navbar />

      <Box
        as="main"
        py={"40px"}
        px={"240px"}
        flex={"1"}
        // className="p-10 px-60 flex-1"
      >
        {props.children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainWrapper;
