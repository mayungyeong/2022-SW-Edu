import { useState } from 'react';

function InputForm({ onSaveMemo }) {

    const [memoTitle, setMemoTitle] = useState("")

    function saveData(event) {
        onSaveMemo(memoTitle);
    }

    return (<div>&nbsp;
        <input type="text" value={memoTitle} onChange={(e) => {
            setMemoTitle(e.currentTarget.value);
        }} />&nbsp;
        <button onClick={saveData}>추가</button>
    </div>);
}

export default InputForm;