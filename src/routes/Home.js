import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies(); //getMovies함수를 useEffect를 사용하여 랜더링시 한번만 호출
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

/* 다른 요소들이 리렌더링되어도 api는 처음 한번만 불러올 수 있게 
        useEffect를 써준다 
        1.fetch로 코인 데이터를 불러온다 (text형식)
        2.then함수를 써서 브라우저가 객체를 인식할 수 있는 json으로 데이터를 변환해준다
        3..then((json) => setMovies(json))== javascript가 response(데이터)를 
        JSON형식으로 변환해주면 변환된 데이터를 json이라는 변수에 담고, setMovies에 json(변환된데이터)를 담는것.*/

/* fetch-then을 대신하여 async-await를 보편적으로 사용한다 

const response = await fetch(`링크`); 링크 데이터를 불러옴
const json = await response.json();   링크 데이터를 json으로 바꿈

response변수를 지정하고 json을 다시 바꿔줘야되서 변수 선언을 2번 해야되는데 
위 2문장을 
==>
const json = await(await fetch(`링크`).json());으로 await를 await로 감사서
한문장으로 간편하게 바꿀 수도 있다.
*/
