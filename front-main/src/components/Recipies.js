import React, {useEffect} from 'react'
import {fetchUserData} from '../api/authenticationService';

const Recipies = () => {

    useEffect(() => {
        // Update the document title using the browser API
        console.log(fetchUserData().data)
      }, []);

    return (
        <div>
            This is the recipies component
        </div>
    )
}

export default Recipies
