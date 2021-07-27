import React, {useEffect, useState} from 'react'
import {fetchAllRecipies} from '../api/recipiesService';
import Recipebox from './detailedComponents/Recipebox';
import { Input } from "@chakra-ui/react"

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);
    const [value, setValue] = useState('')

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
            <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Search" />
             {
                recipies.filter(recipies => {
                    if (!value) return true
                    if (recipies.headerText.toUpperCase().includes(value.toUpperCase())) {
                      return true
                    }
                  }).map(recipies =>
                  <Recipebox key={recipies.id} values={recipies}></Recipebox>
                )
              }
        </div>
    )
}

export default Recipies
