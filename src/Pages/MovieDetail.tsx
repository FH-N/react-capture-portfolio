//import styled from "styled-components"
import { useEffect } from "react";
import {useHistory} from "react-router-dom"
import { MovieState } from "../movieState";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] useState<{MovieState}>;
    const [movie, setMovie] useState(null);
//useEffect
useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
    setMovie(currentMovie);
}, [movies, url])


return(
    <div>
        <h1>Movie Detail</h1>
    </div>
)
}

export default MovieDetail