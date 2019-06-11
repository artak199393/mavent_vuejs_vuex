import axios from 'axios'
const BASE_URL = 'http://alikogrd.beget.tech';

const axiosApiConfig = {
    baseURL: `${BASE_URL}/api`,
    timeout: 30000,
    headers: {'content-type' : 'application/json'}
};


export const api = axios.create(axiosApiConfig);
