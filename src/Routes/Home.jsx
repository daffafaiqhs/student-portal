import { Link } from "react-router-dom";
import {
  Grid,
  GridItem,
  Flex,
  Box,
  Center,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import Footer from "../components/Footer";
import * as assets from "../assets";

const Home = () => {
  return (
    <Grid as="main" h={"100vh"} templateColumns="minmax(550px, 3fr) 8fr">
      <GridItem
        as={Flex}
        position={"relative"}
        flexDirection={"column"}
        justifyContent={"center"}
        textAlign={"center"}
        // className="relative flex flex-col justify-center text-center p-4 shadow-2xl"
      >
        <Box
          position={"absolute"}
          top={"21rem"}
          left={"0"}
          right={"0"}
          ml={"auto"}
          mr={"auto"}
          // className="absolute top-[21rem] left-0 right-0 ml-auto mr-auto"
        >
          <Center
            gap={"3"}
            // className="flex justify-center gap-4"
          >
            <Image
              // className="h-8"
              h={"8"}
              src={assets.LogoKemdikbud}
              alt="Ministry of Education and Culture of Republic of Indonesia Logo"
              draggable="false"
            />
            <Image
              // className="h-8"
              h={"8"}
              src={assets.LogoKampusMerdeka}
              alt="Kampus Merdeka Logo"
              draggable="false"
            />
            <Image
              // className="h-8"
              h={"8"}
              src={assets.LogoRuangguru}
              alt="Ruangguru logo"
              draggable="false"
            />
          </Center>
        </Box>
        <Flex flexDirection={"column"} gap={"3"} my={"1rem"}>
          <Heading
            as={"h1"}
            // className="font-bold text-3xl m-1"
          >
            Ruangguru Student Portal{" "}
            <Text
              fontWeight={"semibold"}
              fontStyle={"italic"}
              fontSize={"xl"}
              display={"inline"}
              // className="font-semibold text-xl italic"
            >
              v3.1
            </Text>
          </Heading>
          <Heading fontWeight={"normal"} fontSize={"md"}>
            Welcome to the new and improved student web portal!
          </Heading>
        </Flex>

        <Button
          as={Link}
          to={"student"}
          data-testid={"student-btn"}
          variant={"outline"}
          m={"28px"}
          h={"48px"}
          gap={"5px"}
          color={"brand.sky.800"}
          alignItems={"center"}
          borderColor={"brand.blue.200"}
          _hover={{
            backgroundColor: "brand.blue.800",
            color: "white",
          }}
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z"
            />
          </svg>
        </Button>

        <Footer location="home" />
      </GridItem>

      <GridItem>
        <Image
          src={assets.HomeMainImage}
          alt="Ruangguru office"
          h={"100%"}
          objectFit={"cover"}
          // className="h-full w-full object-cover"
        />
      </GridItem>
    </Grid>
  );
};

export default Home;
