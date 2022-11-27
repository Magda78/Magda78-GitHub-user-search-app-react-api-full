import axios from 'axios'

export const axiosBaseUrl = axios.create({
    baseUrl:"https://github-search-app-full-1.herokuapp.com"
})