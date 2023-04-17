import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodaystodoEl from './TodaystodoEl'
import OpenColor from 'open-color';

const Wrapper = styled.div`
  width : 500px;
  height : 500px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 10px;
  background: whitesmoke;
`;


function Todaystodolist({date, todolist, setTodolist}) {

  const [Id, setId] = useState(1);
  const addTodo = () => {
    let input = prompt('what do you have to');
    let todo = {dt: date, id:Id, val:input, com:false}
    let A=todolist
    A=A.concat(todo)
    A.sort((a,b)=>{return new Date(a.dt)-new Date(b.dt)})
    setTodolist(A)
    setId(Id+1)
  }
  let arr=todolist.filter(todo=> todo.dt===date)
  const list = arr.map((todo)=><TodaystodoEl todolist ={todolist} contents={todo} setTodolist={setTodolist}/>)
  return (
    <Wrapper>
      <button onClick = {() => {addTodo();}}>+</button>
      {list}
    </Wrapper>
  );
}

export default Todaystodolist;
