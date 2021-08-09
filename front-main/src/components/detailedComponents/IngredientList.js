import React, { useState } from 'react';
import Ingredient from './Ingredient'
import IngredientForm from './IngredientForm';
import {Box} from "@chakra-ui/react"

const IngredientList = ({parentCallBack}) => {
    const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodosValue(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodosValue(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodosValue(removedArr);
  };

  function setTodosValue(array){
    setTodos(array);
    parentCallBack(array);
  }

    return (
        <Box w={"50%"}>
            <IngredientForm onSubmit={addTodo} />
            <Box bg="white" borderRadius="lg">
                <Ingredient
                    todos={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            </Box>
        </Box>
    )
}

export default IngredientList
