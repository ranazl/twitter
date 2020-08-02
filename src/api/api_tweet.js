import {getAxiosInstance} from './api';

export const getAllTweets = (callback) => {
    getAxiosInstance().get("/tweets")
    .then(response => {
        const data = response.data;
        callback(true,data);
    }).catch(error => {
        console.log(error);
        callback(false,error);
    })
};

export const getHashtags = (callback) => {
    getAxiosInstance().get("/hashtags")
    .then(response => {
        const data = response.data;
        callback(true,data);
    }).catch(error => {

        console.log(error);
        callback(false,error);
    })
};

export const getUsers = (callback) => {
    getAxiosInstance().get("/users")
    .then(response => {
        const data = response.data;
        callback(true,data);
    }).catch(error => {
        console.log(error);
        callback(false,error);
    })
};