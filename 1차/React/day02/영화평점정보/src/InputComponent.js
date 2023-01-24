import React, { useState } from "react";

function InputComponent({ phoneList, setPhoneList }) {

    const [name, setName] = useState("추가사람1");
    const [phoneNumber, setPhoneNumber] = useState("010-1111-5555");
    const [email, setEmail] = useState("bread5@naver.com");

    function SaveData({ name, phoneNumber, email }) {
        let newData = { name: name, phoneNumber: phoneNumber, email: email }
        let newList = [...phoneList, newData];
        setPhoneList(newList);
    }

    return (<>
        <div>
            이름 : &nbsp;
            <input value={name} onChange={(e) => {
                setName(e.currentTarget.value);
            }} />&nbsp;
            전화번호 : &nbsp;
            <input value={phoneNumber} onChange={(e) => {
                setPhoneNumber(e.currentTarget.value);
            }} />&nbsp;
            이메일 : &nbsp;
            <input value={email} onChange={(e) => {
                setEmail(e.currentTarget.value);
            }} />
            &nbsp;&nbsp;
            <button onClick={(e) => {
                SaveData({ name, phoneNumber, email });
            }}>등록</button>
        </div>
    </>);
}

export default InputComponent;