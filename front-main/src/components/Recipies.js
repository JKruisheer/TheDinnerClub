import React, {useEffect, useState} from 'react'
import {fetchAllRecipies} from '../api/recipiesService';
import Recipebox from './detailedComponents/Recipebox';
import { Input } from "@chakra-ui/react"

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);

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
            <Input placeholder="Please enter a filter" />
             {
                recipies.map(recipies =>
                  <Recipebox key={recipies.id} values={recipies}></Recipebox>
                )
              }
        </div>
    )
}

export default Recipies
