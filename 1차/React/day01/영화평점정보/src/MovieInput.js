import { useState } from "react";

function MovieInput() {
  const [movieTitle, setMovieTitle] = useState("센과 치히로의 행방불명");
  //const nowDate = new Date();
  //const dd = `${nowDate.getFullYear()}-${nowDate.getMonth()<10?'0'+nowDate.getMonth():nowDate.getMonth()}-${nowDate.getDate()<10?'0'+nowDate.getDate():nowDate.getDate()}`
  const dd = new Date().toISOString().slice(0, 10);
  const [openDate, setOpenDate] = useState(dd);
  return (
    <div>
      <label>영화제목 : </label>
      <input
        type="text"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.currentTarget.value)}
      />
      <br />
      <label>개봉날짜 : </label>
      <input
        type="date"
        value={openDate}
        onChange={(e) => setOpenDate(e.currentTarget.value)}
      />
      <button>저장</button>
      <br />
    </div>
  );
}

export default MovieInput;
