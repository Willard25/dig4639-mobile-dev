import React from 'react';
import './App.css';

const todoList = [
  {
      content: 'Task 1', priorty: 2, completed: true
  },
  {
      content: 'Task 2', priorty: 1, completed: true
  },
  {
      content: 'Task 3', priorty: 3, completed: false
  }
]

function TodoItem(props) {
  return <p>{props.content}</p>
}

function App() {
  /*
  const todoListFiltered = todoList.filtered((value) => value.completed)

  let todoArray = todoListFiltered.map(
    (value) => <TodoItem content={value.content} />
  )
  const todoArray =[
    <TodoItem content="Item 1"/>,
    <TodoItem content="Item 2"/>,
    <TodoItem content="Item 3"/>
  ]*/
  return (
    todoList.filter((v) => v.completed).map(
      (v) => <TodoItem proprity={v.priority} content={v.content} completed={v.completed}/>)
  );
}

export default App;
