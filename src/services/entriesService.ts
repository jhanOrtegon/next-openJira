import axios from "axios";

export const entriesService = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
})