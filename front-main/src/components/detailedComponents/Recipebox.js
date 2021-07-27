import React from "react";
import { Collapse, Button, Box } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"

const Recipebox = ({ values }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box m={2}>
      <Button onClick={onToggle}>{values.headerText}</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="60px"
          color="white"
          m={2}
          bgGradient="linear(to-l, #000000,#FFD700)"
          rounded="md"
          shadow="md"
        >
          {values.description}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Recipebox;
