import React from "react";
import { Collapse, Button, Box, ButtonGroup, IconButton } from "@chakra-ui/react"
import { useDisclosure, Text } from "@chakra-ui/react"
import {
  Flex,
  chakra,
  useColorModeValue,
  Image

} from '@chakra-ui/react';
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDislike } from "react-icons/ai"

const Recipebox = ({ values, parentCallBack }) => {
  return (
    
    <Box m={2}>
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
            src={!values.imageLink ? "https://images0.persgroep.net/rcs/inNa6d_SRsUo0GRl9UwbMk5Z1Wc/diocontent/63534838/_crop/16/49/827/1154/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8" : values.imageLink}
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
        <Button m={2} onClick={onToggle} whiteSpace= "normal">{values.headerText}</Button>
        <Button m={2} onClick={() => {pcb()}}>Expand details</Button>
        </Flex>
        <Flex justifyContent="left" mt={4}>
          <ButtonGroup size="sm" isAttached variant="outline">
            <IconButton aria-label="Add to friends" icon={<AiOutlineLike/>}/>
            <Button mr="-px" color="Green">1</Button>
          </ButtonGroup>

          <ButtonGroup ml="1rem" size="sm" isAttached variant="outline">
            <IconButton aria-label="Add to friends" icon={<AiOutlineDislike/>}/>
            <Button mr="-px" color="Red">-6</Button>
          </ButtonGroup>
        </Flex>
        <Collapse direction='left' in={isOpen} animateOpacity>
        <Box
          p="60px"
          color="white"
          m={2}
          bgGradient="linear(to-l, #E6E6FA, #E0FFFF)"
          rounded="md"
          shadow="md">
          <Text color="black">{values.description}</Text>
        </Box>
      </Collapse>
      </Box>
    </Flex>
  );
};

export default Recipebox;
