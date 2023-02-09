import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;

/* 리액트-dom에 있는 useParams를 씀 
리액트에서 라우터 사용 시 파라미터 정보를 가져와 활용하고 싶다면
 useParams라는 훅을 사용하면 된다.*/
