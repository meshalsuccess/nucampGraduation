import React, { useState, useEffect } from 'react';
import axios from '../axios';
/* the reason I started with rows not columns is due to the design of Netflix
  if we take a look at Netflix app, we see that it is in rows and due to that it is extremely
  difficult to design it other wise. Alsom we can see that all the rows are the same but with different
  content and we will use props to deal with that.
*/


const Row =({title, fetchUrl}) => {

  const[movies, setMovies] = useState([]);

  // I need a snippet of code which runs based of a specific condition using useEffect
  useEffect(() => {
    //if we leave the array blank, the code will run once only and does not run again
    //if we add movies inside it, it will keep running as long as the movies are changing
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      {/* title */}
  <h2>{title}</h2>

      {/* container -->posters */}

    </div>
  )
}

export default Row;

/* in this commit, we made the Row function and used React Hooks and useEffect 
  if we open the console in the browser, we will find 2 objects one for each Row component 
  in the App.js. Each of these objects contain the information returned from the api request 
  that we made. These objects are filled with different data that we can read and it includes images as well */