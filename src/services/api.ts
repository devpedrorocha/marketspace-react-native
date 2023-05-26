import axios, { AxiosInstance, AxiosError } from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export { api }