import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OpenColor from 'open-color';
import Todaystodolist from './TodaysTodoList';
import TodaystodoEl from './TodaystodoEl'

const Wrapper = styled.div`
  width : 800px;
  height : 800px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 20px;
  background: white;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${OpenColor.green[1]};
  &:hover {
    background: ${OpenColor.green[2]};
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content:space-between;
`;

const Title = styled.div`
  align-content: center;
  font-size: 40px;
  font-weight: bold;
`;


function TodaysTodoContainer({
  date, setDate, itemsByDate, setItemsByDate, todolist, setTodolist
}) {
  const dateString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  const [todos, setTodos] = useState(itemsByDate[dateString]);
  useEffect(() => {
    if (itemsByDate[dateString] === undefined) {
      const newObj = {};
      newObj[dateString] = [];
      setItemsByDate(Object.assign(itemsByDate, newObj));
    }
    setTodos(itemsByDate[dateString]);
  }, [date]);

  useEffect(() => {
    const newObj = {};
    newObj[dateString] = todos;
    setItemsByDate(Object.assign(itemsByDate, newObj));
  }, [todos]);

  const handleLeftButtonClick = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  const handleRightButtonClick = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Button onClick={handleLeftButtonClick}>{'<'}</Button>
        <Title>
          {`To do - ${dateString}`}
        </Title>
        <Button onClick={handleRightButtonClick}>{'>'}</Button>
      </TitleWrapper>
      <Todaystodolist date={dateString} todolist={todolist} setTodolist={setTodolist}/>
    </Wrapper>
  );
}

export default TodaysTodoContainer;
