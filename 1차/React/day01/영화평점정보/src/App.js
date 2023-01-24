import React, { useState } from "react";
import MovieInput from "./MovieInput";
import MovieList from "./MovieList";
import MovieSearch from "./MovieSearch";

function App() {
  const [movieList, setMovieList] = useState([
    { no: 1, movieTitle: "귀를 기울이면", openDate: "1988-04-10", rating: 5 },
    { no: 2, movieTitle: "로키", openDate: "1981-05-05", rating: 5 },
    { no: 3, movieTitle: "터미네이터", openDate: "1982-01-12", rating: 5 },
    { no: 3, movieTitle: "그랑블루", openDate: "1988-08-15", rating: 5 },
  ]);
  return (
    <div className="container">
      <h1>영화 평점 정보</h1>
      <hr />
      현재날짜 : {new Date().toISOString().slice(0, 10)}
      <MovieInput />
      <hr />
      <MovieSearch />
      <MovieList movieList={movieList} />
    </div>
  );
}

export default App;
