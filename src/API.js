import axios from "axios"
const API_KEY = '4c232873f45eedb749cb12734938c628'
const ENTRY_POINT = 'https://api.themoviedb.org/3/'
const trending = `${ENTRY_POINT}trending/movie/day?api_key=${API_KEY}`
// const searching = `${ENTRY_POINT}search/movie?api_key=${API_KEY}&query='batman'`
// const movieDetail = `${ENTRY_POINT}movie/1003579?api_key=${API_KEY}`
// const movieCast = `${ENTRY_POINT}movie/1003579/credits?api_key=${API_KEY}`
// const movieReviews = `${ENTRY_POINT}movie/1003579/reviews?api_key=${API_KEY}`

export const getTrendingMovies = async()=>{
    const response = await axios(trending);
    const movies = response.data.results;
    return movies
}
export const getMovies = async(query)=>{
    const response = await axios(`${ENTRY_POINT}search/movie?api_key=${API_KEY}&query=${query}`);
    const movies = response.data.results;
    return movies
}
export const getMovieInfo = async(id)=>{
    const response = await axios(`${ENTRY_POINT}movie/${id}?api_key=${API_KEY}`);
    const movie = response.data;
    return movie
}
export const getMovieCast = async(id)=>{
    const response = await axios(`${ENTRY_POINT}movie/${id}/credits?api_key=${API_KEY}`);
    const movie = response.data.cast;
    return movie
}
export const getMovieReviews = async(id)=>{
    const response = await axios(`${ENTRY_POINT}movie/${id}/reviews?api_key=${API_KEY}`);
    const movie = response.data.results;
    return movie
}