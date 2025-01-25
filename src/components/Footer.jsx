import { Box } from "@chakra-ui/react";

const Footer = (props) => {
  let boxStyles = {
    justifyContent: "center",
    paddingBottom: "20px",
    width: "100%",
  };

  if (props.location === "home") {
    boxStyles = {
      position: "absolute",
      bottom: "10px",
      left: "0",
      right: "0",
      marginLeft: "auto",
      marginRight: "auto",
    };
  }

  return (
    <Box
      as="footer"
      w={"fit-content"}
      display={"flex"}
      gap={"5px"}
      className={`footer ${props.className}`}
      fontSize={"sm"}
      color={"#64748b"}
      sx={boxStyles}
    >
      <p className="studentName">Mochammad Daffa Faiq Husin Syahputra</p>-
      <p className="studentId">FS9869007</p>
    </Box>
    // <footer className="text-center pb-5">
    //   <p className="font-thin text-sm text-slate-500">
    //     &copy; Mochammad Daffa Faiq - FS9869007
    //   </p>
    // </footer>
  );
};

export default Footer;
