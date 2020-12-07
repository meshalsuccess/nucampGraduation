import axios from "axios";

/* creating an instacne of axios that contains the baseURL and we need to map it to the 
movie data base where our API KEY is taken from. From here we will make 
requests to the movie database */

const instance = axios.create({
  baseURL : "https://api.themoviedb.org/3",
});

export default instance