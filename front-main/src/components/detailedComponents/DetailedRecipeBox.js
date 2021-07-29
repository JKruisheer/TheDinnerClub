import React, {useEffect} from 'react'
import { Button } from "@chakra-ui/react"

const DetailedRecipeBox = ({parentCallBack}) => {
    useEffect(() => {
        let unmounted = false;
        
        if(!unmounted){
            console.log('Rendering')
       }
       return () => unmounted = true;

    }, []);

    return (
        <div>
            <Button onClick={() => {parentCallBack(true)}}>Hai, I am a detailed component, Click me to get back</Button>
        </div>
    )
}

export default DetailedRecipeBox
