import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
/* the reason I started with rows not columns is due to the design of Netflix
  if we take a look at Netflix app, we see that it is in rows and due to that it is extremely
  difficult to design it other wise. Alsom we can see that all the rows are the same but with different
  content and we will use props to deal with that.
*/

//This is from the movie database api documentation :: here is the url
// https://developers.themoviedb.org/3/getting-started/images
const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // I need a snippet of code which runs based of a specific condition using useEffect
  useEffect(() => {
    //if we leave the array blank, the code will run once only and does not run again
    //if we add movies inside it, it will keep running as long as the movies are changing
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    //fetchUrl should be included in the array otherwise it won't render again...
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row_posters">
        {/* container -->posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`image ${isLargeRow && "image_large"}`}
            //if the image isLargeRow use image_large else image
            src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
            //similar to if isLargeRow use movie.poster_path else use move.backdrop_path
            alt={movie.name}
          />
          //poster_path is the link that should come after the base_url, check the documentation
        ))}
      </div>
    </div>
  );
};

export default Row;

/* in this commit, we made the Row function and used React Hooks and useEffect 
  if we open the console in the browser, we will find 2 objects one for each Row component 
  in the App.js. Each of these objects contain the information returned from the api request 
  that we made. These objects are filled with different data that we can read and it includes images as well */
