import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import OpenColor from 'open-color';
const Wrapper2 = styled.div`
    width : 450px;
    height : 50px;
    margin : 3% 3%;
    padding: 2% 2%;
    border-radius : 30px;
    background : ${OpenColor.green[1]};
`;
const Button = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 8px;
  background: ${OpenColor.green[1]};
  &:hover {
    background: ${OpenColor.green[2]};
  }
  `;
const Button1 = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 8px;
  background: ${OpenColor.gray};
  &:hover {
    background: ${OpenColor.gray[1]};
  }
  `;
function TodaystodoEl({contents, setTodolist, todolist}) {
    const chkCom = (props) => {

        let copy=todolist
        copy.map((t) => {
            if(t.id == props.id) {t.com=!t.com}
        })
        let listCompleteO=copy.filter(todo => todo.com===true)
        let listCompleteX=copy.filter(todo => todo.com===false)
        setTodolist(listCompleteX.concat(listCompleteO))

    }

    const Complete = ({props}) =>
    {
        if(props.com===false) return <span><Button1 onClick={() => {chkCom(props); }}>com?</Button1>{props.val}</span>
        else return <span><Button onClick={() => {chkCom(props); }}>com</Button><span style={{textDecorationLine:"line-through"}}>{props.val}</span></span>
    }
    const deleteTodo = (props) => {
        setTodolist(todolist.filter(todo => todo.id !==props.id))
    }

    return (<Wrapper2><Complete props={contents}/><button onClick = {() => {deleteTodo(contents)}}>삭제</button></Wrapper2>)

}

export default TodaystodoEl;
