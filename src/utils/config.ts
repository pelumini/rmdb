const API_URL = 'https://api.themoviedb.org/3/';
const { API_KEY } = process.env;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id?: string) =>
  `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  movieUrl,
  creditsUrl,
};
