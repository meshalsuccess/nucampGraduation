import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComdeyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

/* the rows in our app are similar but the difference is each of them is rendering a different
genre or type of movies and that is why we need to use the fetchUrl... we will be passing the
the fetchurl along with our API KEY from axios to fetchUrl prop
Note that we can write them down but it will be a long piece of code.  */
