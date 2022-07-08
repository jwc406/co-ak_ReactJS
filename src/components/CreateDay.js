import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-TYpe": "application/json", //보내는 리소스의 타입
      },
      body: JSON.stringify({
        //수정하는 정보들 입력
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다!");
        history.push("/");
      }
    });
  }

  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
