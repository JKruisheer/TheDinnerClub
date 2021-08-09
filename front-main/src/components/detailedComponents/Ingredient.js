import React, { useState } from 'react';
import IngredientForm from './IngredientForm';
import { AiFillDelete } from 'react-icons/ai';
import { GrEdit } from 'react-icons/gr';

import {
    IconButton,
    Text,
    HStack
  } from "@chakra-ui/react";



const Ingredient = ({ todos, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });
    
      const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    
      if (edit.id) {
        return <IngredientForm edit={edit} onSubmit={submitUpdate} />;
      }

    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}>
        <HStack m={2}>
          <Text fontSize="md">{todo.text}</Text>
          <IconButton
            onClick={() => removeTodo(todo.id)}
            icon={<AiFillDelete />}
            variant="ghost"
            _hover={{ bg: "#FFD700" }}
          ></IconButton>
          <IconButton
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            icon={<GrEdit />}
            _hover={{ bg: "#FFD700" }}
            variant="ghost"
          ></IconButton>
          </HStack>
      </div>
    ));
}

export default Ingredient
