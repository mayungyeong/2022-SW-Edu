import { useSelector } from "react-redux";

function Child01() {
    // 여기서 state는 currentState로 객체 형태임
    // state.체중의 {}를 생략하고 싶다면 return 없이, {}를 쓴다면 꼭! return을
    let 체중 = useSelector((state) => { return state.체중 })
    let 키 = useSelector((state) => { return state.키 })
    return (<div>
        <h2>Child 01</h2>
        <p>몸무게 : {체중}</p>
        <p>신장 : {키}</p>
    </div>);
}

export default Child01;


// state에 접근
// useSelector() - state 값을 사용 할때
// useDispatch() - state의 type을 변경