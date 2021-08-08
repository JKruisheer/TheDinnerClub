import React, { useState } from 'react';

import {
    Input,
    Button,
    HStack,
    IconButton,
    FormLabel
  } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons"

const IngredientForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
  
    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      setInput('');
    };
    return (
        <div>
        {props.edit ? (
          <>
            <HStack>
              <Input
                placeholder="Update your ingredient"
                value={input}
                onChange={handleChange}
                name="text"
                className="todo-input edit"
                bg="white"
              />
              <Button onClick={handleSubmit} colorScheme="green"  _hover={{ bg: "#FFD700" }}>Update</Button>
            </HStack>
          </>
        ) : (
          <>
            <HStack>
              <Input
                placeholder="Please fill the name"
                value={input}
                onChange={handleChange}
                name="text"
                className="todo-input"
                bg="white"
              />
              <IconButton onClick={handleSubmit} icon={<AddIcon/>}  _hover={{ bg: "#FFD700" }}/>
            </HStack>
          </>
        )}
      </div>
    );
}

export default IngredientForm
