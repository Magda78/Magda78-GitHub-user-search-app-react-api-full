import axios from 'axios'

export const axiosBaseUrl = axios.create({
    baseUrl:"https://git.heroku.com/github-search-app-full-1.git"
})