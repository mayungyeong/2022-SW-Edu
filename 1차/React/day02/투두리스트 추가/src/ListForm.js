
function ListForm({ memoList }) {

    return (<div>
        {memoList.map((memo, i) => {
            return (
                <tr key={i}>&nbsp;
                    <td>{memo.memoTitle}</td>
                    <td>
                        &nbsp;
                        <button onClick={(e) => {
                            memoList.onDelete(memo.i);
                        }}>완료</button>
                        <button>삭제</button>
                    </td>
                </tr>
            );
        })}
    </div>);
}

export default ListForm;