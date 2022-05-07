import React,  {useEffect, useState, useCallback} from 'react'
import {fetchAllRecipies} from '../api/recipiesService';
import Recipebox from './detailedComponents/Recipebox';
import DetailedRecipebox from './detailedComponents/DetailedRecipeBox';
import { Input, SimpleGrid } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import { deleteARecipe } from "../api/recipiesService";

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);
    const [value, setValue] = useState('')
    const [rendered, setRendered] = useState(true)
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
    
    const recipeBoxCallback = useCallback(() => {
      setRendered(false);
    }, []);

    const detailedRecipeBoxCallback = useCallback(() => {
      setRendered(true);
    }, []);

    const deleteCallbackFromRecipeBox = useCallback((id) => {
      recipies.forEach((recipient) => {console.log(recipient.id)})

      deleteARecipe(id)
      .then((response) => {
        setRecipies(recipies.filter(recipient => recipient.id !== id))
      })
      .catch((error) => {
        console.log(error.data);
      });
    })

    useEffect(() => {
        let unmounted = false;
        if(!unmounted){
            fetchAllRecipies().then((response)=>{
                setRecipies(response.data)
            })
       }
       return () => unmounted = true;

    }, []);

    return (
      <div>
      {rendered ? <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Search" /> : null}
      {rendered ? <SimpleGrid columns={3} minChildWidth={isLargerThan1280 ? "450px" : "350px"} justifyContent="center" spacing={5}> 
      {
          // eslint-disable-next-line
            recipies.filter(recipies => {
                if (!value) return true
                if (recipies.headerText.toUpperCase().includes(value.toUpperCase())) {
                  return true
                }
              }).map(rec =>
              <Recipebox key={rec.id} values={rec} parentCallBack = {recipeBoxCallback} deleteCallback = {deleteCallbackFromRecipeBox}></Recipebox>
            )
          }
      </SimpleGrid> : null}
      {!rendered ? <DetailedRecipebox parentCallBack = {detailedRecipeBoxCallback}></DetailedRecipebox> : null}
    </div>
    )
}

export default Recipies
