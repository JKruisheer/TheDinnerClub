import axios from 'axios';
import {currentUrl} from './endpointFiles'

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const fetchAllRecipies=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||currentUrl}/api/recipies/all`,
        headers:{
            'Authorization':getToken()
        }
    })
}

export const postARecipe=(recipeRequest)=>{
    return axios({
        method:'POST',
        url:`${process.env.hostUrl||currentUrl}/api/recipies/recipe/add`,
        data: recipeRequest,
        headers:{
            'Authorization':getToken()
        }
    })
}

export const LikeRecipe=(recipeId)=>{
    return axios({
        method:'POST',
        url:`${process.env.hostUrl||currentUrl}/api/recipies/recipe/like?id=` + recipeId,
        headers:{
            'Authorization':getToken()
        }
    })
}

export const deleteARecipe=(recipeId)=>{
    return axios({
        method:'DELETE',
        url:`${process.env.hostUrl||currentUrl}/api/recipies/recipe/delete?id=` + recipeId,
        headers:{
            'Authorization':getToken()
        }
    })
}