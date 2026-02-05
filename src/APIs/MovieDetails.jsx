export const getMovieDetails = async ({ params }) => {
    const apikey = import.meta.env.VITE_MOVIE_API
    const id = params.movieID
    const API = `https://www.omdbapi.com/?i=${id}&apikey=${apikey}`
    try {
        const res = await fetch(API);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}