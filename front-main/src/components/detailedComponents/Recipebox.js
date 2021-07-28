import React from "react";
import { Collapse, Button, Box } from "@chakra-ui/react"
import { useDisclosure, Text } from "@chakra-ui/react"

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
          bgGradient="linear(to-l, #E6E6FA, #E0FFFF)"
          rounded="md"
          shadow="md"
        >
          <Text color="black">{values.description}</Text>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Recipebox;
