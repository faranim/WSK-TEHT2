function sortMoviesByRating(movies) {
    return movies.slice().sort((a, b) => b.rating - a.rating);
}

function displayMovies(movies) {
    const sortedMovies = sortMoviesByRating(movies);
    let moviesList = "<h2>Sorted Movie Ratings</h2><ul>";
    for (const movie of sortedMovies) {
        moviesList += `<li>${movie.title}: ${movie.rating}</li>`;
    }
    moviesList += "</ul>";
    document.body.innerHTML += moviesList;
}

function determineHighestRatedMovie(movies) {
    const sortedMovies = sortMoviesByRating(movies);
    const highestRatedMovie = sortedMovies[0];
    document.body.innerHTML += `<h2>Highest Rated Movie</h2><p>${highestRatedMovie.title}: ${highestRatedMovie.rating}</p>`;
}

const numMovies = parseInt(prompt("Enter the number of movies you want to rate:"));
const movies = [];

for (let i = 0; i < numMovies; i++) {
    const title = prompt(`Enter the title of movie ${i + 1}:`);
    const rating = parseFloat(prompt(`Enter the rating of movie ${i + 1} (1 to 5):`));
    movies.push({ title, rating });
}

displayMovies(movies);
determineHighestRatedMovie(movies);
