export const getApiData = async () => {
    const apikey = import.meta.env.VITE_MOVIE_API
    const API = `https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=avengers`
    try {
        const res = await fetch(API);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}