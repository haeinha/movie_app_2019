import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  // async componentDidMount(){
  // const movies=axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  // }
  render() {
    const { isLoading, movies, genres } = this.state;
    //return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movies.genres}
              />
            ))}
          </div>
        )}
      </section>
    );

    // return <div>{isLoading ? "Loading.." : movies.map(movie => (
    //   <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />;
    // )}</div>
  }
}

export default App;
