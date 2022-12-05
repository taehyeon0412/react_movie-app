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
    </div>
  );
}

export default App;
