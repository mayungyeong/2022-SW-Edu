function MovieList({ movieList }) {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>순서</th>
              <th>영화제목</th>
              <th>개봉날짜</th>
              <th>별점</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {movieList.map((movie) => {
              return (
                <tr>
                  <td>{movie.no}</td>
                  <td>{movie.movieTitle}</td>
                  <td>{movie.openDate}</td>
                  <td>{movie.rating}</td>
                  <td>
                    <button>삭제</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default MovieList;
  