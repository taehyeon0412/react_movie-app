import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); //기본이벤트를 작동하지 못하게함 form이면 새로고침 작동x
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    //배열앞에 ...을 쓰면 현재 있는 배열에 추가할 수 있다.
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>My ToDos ({toDos.length}개)</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="to do 입력"
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/* map함수는 배열 안에 있는 각각의 element를
        바꿀 수 있게 해준다. map()의 ()에는 함수를 넣을 수 있는데
        배열의 모든 item에 대해 실행된다 
        toDos는 단순한 string으로 구성된 배열인데 그것을 map함수를 써서
        새로운 배열 즉, li로 구성된 배열로 바꿈
        리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 
        고유하게 만들어줘야된다 map함수의 첫번째는 값,두번째는 index=숫자를 의미한다
        그래서 toDos.map((item, index))을 해줘서 li에 key값을 넣는다
        최종적으로 map함수를 썼을때 모습은  <li key={0}>{item}</li>,<li key={2}>{item}</li>
        반복.... */}
      </ul>
    </div>
  );
}

export default App;
