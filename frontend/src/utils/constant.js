export const API_END_POINT = "http://localhost:8080/api/v1/user";

 export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTczOTNmYjgxMTE5YzQ1YzE4MTQ5YTM3YmI0NmQ1NCIsIm5iZiI6MTczOTMwNDcyNS41NDU5OTk4LCJzdWIiOiI2N2FiYWYxNTZlYjM2ZDBkYWQ5YmIyNDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._NFRygbUN_ft-I7i8ZwfLabVbsp_4DJ4xYdKj1tWkjE'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";