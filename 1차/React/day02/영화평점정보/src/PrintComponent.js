function PrintComponent({ phoneList, setphoneList }) {
    return (<>
        <ul>
            {phoneList.map((phonebook, i) => {
                return (<ol key={i + 1}>
                    {i + 1}.&nbsp;{phonebook.name}&nbsp;/&nbsp;{phonebook.phoneNumber}&nbsp;/&nbsp;{phonebook.email}&nbsp;/
                    <br />
                    <button>삭제</button>
                    <button>메일보내기</button>
                </ol>)

            })}
        </ul>
    </>);
}

export default PrintComponent;