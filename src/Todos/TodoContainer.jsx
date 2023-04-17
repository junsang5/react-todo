import React from 'react';
import styled from 'styled-components';
import TodaysTodoList from '../Todays/TodaysTodoList';
import TodaystodoEl from '../Todays/TodaystodoEl';

const Wrapper = styled.div`
  width : 500px;
  height : 500px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 10px;
  background: whitesmoke;
`;

const Wrapper1 = styled.div`
  width : 800px;
  height : 800px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 20px;
  background: white;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

function TodoContainer({todolist, setTodolist}) {
  return (
  <Wrapper1>
    <Title>Todos</Title>
    <Wrapper>{todolist.map((todo)=><TodaystodoEl contents={todo} todolist={todolist} setTodolist={setTodolist}/>)}</Wrapper>
  </Wrapper1>


  );
}
export default TodoContainer;
