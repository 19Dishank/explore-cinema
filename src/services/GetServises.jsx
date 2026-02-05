export const getMovies = () => {
    const apikey = import.meta.env.VITE_MOVIE_API
    BASE_URI = "https://www.omdbapi.com/"

}

export const getData = () => {
    apikey.get("?i=tt3896198&apikey=${apikey}&s=avengers")
}