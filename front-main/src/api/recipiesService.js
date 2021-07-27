import axios from 'axios';

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const fetchAllRecipies=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/recipies/all`,
        headers:{
            'Authorization':getToken()
        }
    })
}