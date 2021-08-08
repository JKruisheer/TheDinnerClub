import React,  {useEffect, useState, useCallback} from 'react'
import {fetchAllRecipies} from '../api/recipiesService';
import Recipebox from './detailedComponents/Recipebox';
import DetailedRecipebox from './detailedComponents/DetailedRecipeBox';
import { Input, SimpleGrid } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);
    const [value, setValue] = useState('')
    const [rendered, setRendered] = useState(true)
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
    

    const callback = useCallback(() => {
      setRendered(false);
    }, []);

    const callbackTrue = useCallback(() => {
      setRendered(true);
    }, []);

    useEffect(() => {
        let unmounted = false;
        
        if(!unmounted){
            fetchAllRecipies().then((response)=>{
                console.log(response.data)
                setRecipies(response.data)
                console.log(recipies)
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
              }).map(recipies =>
              <Recipebox key={recipies.id} values={recipies} parentCallBack = {callback}></Recipebox>
            )
          }
      </SimpleGrid> : null}
      {!rendered ? <DetailedRecipebox parentCallBack = {callbackTrue}></DetailedRecipebox> : null}
    </div>
    )
}

export default Recipies
