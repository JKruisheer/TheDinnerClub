import axios from 'axios';

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const fetchAllRecipies=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://104.248.203.130:8080'}/api/recipies/all`,
        headers:{
            'Authorization':getToken()
        }
    })
}

export const fetchAllRecipies2=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://104.248.203.130:8080'}/api/recipies/all`,
        headers:{
            'Authorization':getToken()
        }
    })
}