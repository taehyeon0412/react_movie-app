import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      //
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); //response데이터를 json이라는 변수에 담고 setCoins에 넣어줌
        setLoading(false); //setLoading은 false로 바꿔줘서 글자가 안나오게함
      });
  }, []);
  /* 다른 요소들이 리렌더링되어도 api는 처음 한번만 불러올 수 있게 
  useEffect를 써준다 
  1.fetch로 코인 데이터를 불러온다 (text형식)
  2.then함수를 써서 브라우저가 객체를 인식할 수 있는 json으로 데이터를 변환해준다
  3..then((json) => setCoins(json))== javascript가 response(데이터)를 
  JSON형식으로 변환해주면 변환된 데이터를 json이라는 변수에 담고, setCoins에 json(변환된데이터)를 담는것.*/

  return (
    <div>
      <h1>코인 시세표 ({coins.length}개)</h1>
      {loading ? <strong>Loading...</strong> : null}
      {/* {}는자바스크립트를 쓸 때  */}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li>
        ))}
        {/* map함수에는 값,key 2가지가 필요한데 코인api에서는 key값이 
        코인이름(id)으로 나와있기 때문에 id를 key값으로 쓰면 됨*/}
      </ul>
    </div>
  );
}
export default App;
