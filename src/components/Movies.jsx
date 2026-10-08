// Import the MovieItem component
import MovieItem from './MovieItem';

// Movies component recives movie data through props
export default function Movies(props){

    //Use maps() to go through each movie in the movies array
    return props.movies.map(
        (movie)=>{

             // Pass each individual movie to the MovieItem component
            // key gives each movie a unique identifier
            return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
        }
    );
}
