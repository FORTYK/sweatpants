// API used for the application
const axios = require("axios");

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    withCredentials: true,
    timeout: 3000,
});

module.exports = api;
