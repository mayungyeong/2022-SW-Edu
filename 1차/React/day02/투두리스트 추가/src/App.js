import { React, useState } from 'react';
import bgimg from './blue.jpg';
import InputForm from './InputForm';
import ListForm from './ListForm';

function App() {

  const [memoList, setMemoList] = useState([]);

  function saveMemoFn(memoTitle) {
    let newData = { memoTitle: memoTitle };
    let newList = [...memoList, newData];
    setMemoList(newList);
  }

  return (
    <div style={{ backgroundImage: `url(${bgimg})` }}>
      <h1>To Do List</h1>
      <InputForm onSaveMemo={saveMemoFn} />
      <br />
      <ListForm memoList={memoList} />
    </div>
  );
}

export default App;