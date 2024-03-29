import axios from 'axios';
import {currentUrl} from './endpointFiles'

const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||currentUrl}/api/v1/auth/login`,
        'data':authRequest
    })
}

export const userSignup=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||currentUrl}/api/v1/auth/signup`,
        'data':authRequest
    })
}

export const fetchUserData=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||currentUrl}/api/v1/auth/userinfo`,
        headers:{
            'Authorization':getToken()
        }
    })
}