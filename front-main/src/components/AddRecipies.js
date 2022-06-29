import React, { useState, useCallback } from "react";
import { postARecipe } from "../api/recipiesService";
import { useFormik } from "formik";
import { Box, Input, Button } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormLabel,
  Textarea,
  Image,
  InputGroup,
  InputRightAddon, Select
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import IngredientList from './detailedComponents/IngredientList';

const AddRecipies = () => {
  const [submitting, isSubmitting] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [refreshChild, setRefreshChild] = useState(false);

  const callback = useCallback((ingredients) => {
    setIngredients(ingredients);
    // formik.initialValues.ingredients = ingredients;
  }, []);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      preparationMethod: "",
      preparationTime: "",
      difficulty: "",
      imageLink: ""
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      values.ingredients = ingredients;
      isSubmitting(true);
      postARecipe(values)
        .then((response) => {
          resetForm({ values: "" });
          isSubmitting(false);
          if (response.status === 200) {
            toast({
              title: "Success!.",
              description: response.data,
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            setRefreshChild(!refreshChild)
          } else {
            toast({
              title: "Invalid recipe.",
              description: response.data,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        })
        .catch((error) => {
          isSubmitting(false);
          toast({
            title: "Invalid recipe.",
            description: error.response.data,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    },
  });
  return (
    <Tabs colorScheme="white" color="black">
      <TabList >
        <Tab>Handmatig</Tab>
        <Tab isDisabled>Automatisch</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box alignItems="left" justifyContent="space-between">
            <form onSubmit={formik.handleSubmit}>
              <FormLabel>Title</FormLabel>
              <Input
                id="title"
                name="title"
                type="text"
                bg="white"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <FormLabel>Small description</FormLabel>
              <Input
                id="description"
                name="description"
                type="text"
                bg="white"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              <FormLabel>Preparation method</FormLabel>
              <Textarea
                id="preparationMethod"
                name="preparationMethod"
                type="text"
                bg="white"
                onChange={formik.handleChange}
                value={formik.values.preparationMethod}
              />
              <FormLabel>Preparation time</FormLabel>
              <InputGroup bg="white" size="sm" w={"50%"}>
              <Input
                id="preparationTime"
                name="preparationTime"
                type="number"
                bg="white"
                onChange={formik.handleChange}
                value={formik.values.preparationTime}
                
              />
                <InputRightAddon bg="white" children="minutes" />
              </InputGroup>
              <FormLabel>Difficulty</FormLabel>
                <Select id="difficulty" bg="white"
                   name="difficulty" placeholder="Select option" onChange={formik.handleChange}
                  value={formik.values.difficulty} w={"50%"}>
                  <option value="1">Makkelijk</option>
                  <option value="2">Gemiddeld</option>
                  <option value="3">Moeilijk</option>
                </Select>
              <FormLabel>Image link</FormLabel>
              <Input
                  id="imageLink"
                  name="imageLink"
                  type="text"
                  bg="white"
                  onChange={formik.handleChange}
                  value={formik.values.imageLink}
                  w={"50%"}
                />
                {formik.values.imageLink && <Image
                  w={200}
                  h="fit-content"
                  fit="cover"
                  rounded="full"
                  borderStyle="solid"
                  borderWidth={2}
                  //borderColor={useColorModeValue("brand.500", "brand.400")}
                  alt="Not a valid image url"
                  src={formik.values.imageLink}
                />}
                             <FormLabel>Ingredients</FormLabel>
                <IngredientList parentCallBack = {callback} refreshMyChild = {refreshChild} ></IngredientList>

              <Button
                m={2}
                isLoading={submitting}
                type="submit"
                variant="solid"
                bg="black"
                color="white"
                _hover={{ bg: "#FFD700", color: "black" }}
              >
                Add recipe
              </Button>
            </form>
          </Box>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AddRecipies;
