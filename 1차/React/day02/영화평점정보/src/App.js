import { React, useState } from "react";
import InputComponent from "./InputComponent";
import PrintComponent from "./PrintComponent";

function App() {

  const [phoneList, setPhoneList] = useState([
    { name: "오탁근", phoneNumber: "010-1111-1111", email: "bread1@naver.com" },
    { name: "염정아", phoneNumber: "010-1111-2222", email: "bread2@naver.com" },
    { name: "정승호", phoneNumber: "010-1111-3333", email: "bread3@naver.com" },
    { name: "권석준", phoneNumber: "010-1111-4444", email: "bread4@naver.com" },
  ]);

  return (<>
    <div style={{
      display: "flex", flexDirection: "row", alignItems: "center",
      justifyContent: "center", backgroundColor: "greenyellow"
    }}>
      <h1>전화번호부</h1></div>
    <br />
    <InputComponent phoneList={phoneList} setPhoneList={setPhoneList} />
    <br />
    <PrintComponent phoneList={phoneList} />
  </>);
}


export default App;