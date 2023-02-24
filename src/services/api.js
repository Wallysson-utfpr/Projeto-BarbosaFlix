// base da URL: https://api.themoviedb.org/3/
//movie/now_playing?api_key=27400331102cf2fc37473e2b7683541b&language=pt-br

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;