import React from "react";
import { Collapse, Button, Box } from "@chakra-ui/react"
import { useDisclosure, Text } from "@chakra-ui/react"
import {
  Flex,
  chakra,
  useColorModeValue,
  Image

} from '@chakra-ui/react';

const Recipebox = ({ values, parentCallBack }) => {
  return (
    
    <Box m={2} alignItems="left"
    
    justifyContent="left">
      <Cards values={values} pcb = {parentCallBack}></Cards>
    </Box>
  );
};

function Cards({values, pcb}){
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={40}
            h={40}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue("brand.500", "brand.400")}
            alt="Testimonial avatar"
            src={values.imageLink}
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue("gray.800", "white")}
          fontSize={{ base: "2xl", md: "3xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {values.headerText}
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
          {values.description}
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
        <Button m={2} onClick={onToggle}>{values.headerText}</Button>
        <Button m={2} onClick={() => {pcb()}}>Expand details</Button>

        </Flex>
        <Collapse direction='left' in={isOpen} animateOpacity>
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
    </Flex>
  );
};

export default Recipebox;
