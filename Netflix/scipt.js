const API_KEY = 'f7607befbdmsh88b2f5eb76e4ccfp1319afjsn13168446e7a4';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Fetch popular movies from TMDb
async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching the movies:', error);
    }
}

// Display movies on the page
function displayMovies(movies) {
    const movieThumbnails = document.getElementById('movie-thumbnails');
    movieThumbnails.innerHTML = ''; // Clear any existing content

    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
        img.alt = movie.title;
        movieThumbnails.appendChild(img);
    });
}

// Call the function to fetch and display movies
fetchMovies();
