import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 h-screen">
      <div className="text-center">
        <h2 className="text-lg">404 | Not Found</h2>
        <h1 className="font-bold text-9xl mb-10 mt-4">
          This page doesn't exist
        </h1>
        <h2 className="text-4xl">
          You may have mistyped the address or the page may have moved.
        </h2>
      </div>
      <Button
        as={Link}
        to="/"
        data-testid="back"
        // className="border border-blue-200 rounded-md p-3 text-sky-800 hover:bg-blue-800 hover:text-white"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
