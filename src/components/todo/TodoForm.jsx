
const TodoForm = ({ setTodos }) => { // setTodos를 props로 받아옴

  const onSubmit = (e) => { // onSubmit 함수에 이벤트 발생을 e 변수로 사용
    e.preventDefault(); // form에 입력한 데이터 새로고침 되어 날아가지 않게 막기

    const formData = new FormData(e.target); // 이벤트 발생한 요소의 정보를 formData에 넣기

    // forData에서 name(title, content)에 대한 데이터 가져오기
    const title = formData.get("title");
    const content = formData.get("content");

    // 가져온 name(title, content) 데이터로 새로 만들 todo에 대한 객체 생성
    const nextTodo = {
      id: crypto.randomUUID(), // uuid 랜덤 id 생성
      title,
      content,
      isDone: false,
    };

    // 콜백 함수를 사용할 경우, 이 상태 변경 함수에 현재 상태 값을 인자(prevTodos)로 전달함
    // useState의 비동기성 때문에 콜백 함수 사용
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
    // props로 가져왔던 setTodos에 인자로 새로운 상태(prevTodos)를 받아서 상태 업데이트하는 콜백 함수 넣기
    // 새로운 todo인 nextTodo가 맨 앞에 추가되고, 기존 todo들인 prevTodos가 그 뒤에 추가됨
    
    e.target.reset(); // e.target 은 현재 노드 요소인 form 태그가 된다. 즉, form > input 비워주는 용도
  };

  return (
    <div>
      {/* form 태그에 onSubmit 함수와 props 적용 */}
      <form onSubmit={onSubmit}>
        {/* 비제어적 처리를 위해 input 태그에 name만 */}
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="내용" name="content" />

        {/* button 태그 type으로 submit되면 form 태그에 onsubmit 실행 */}
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoForm;
