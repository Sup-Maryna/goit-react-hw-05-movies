const API_KEY = 'ac56c60c34a47d94154ddc20710a1d7b';
const BASE_URL = 'https://api.themoviedb.org/3';

async function moviesApiService(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export function FetchTrendingFilms() {
  return moviesApiService(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function getMovieById(movieId) {
  return moviesApiService(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function getMovieCast(movieId) {
  return moviesApiService(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}
export function getMovieReviews(movieId) {
  return moviesApiService(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
export function getMoviesByQuery(query) {
  return moviesApiService(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false`,
  );
}
