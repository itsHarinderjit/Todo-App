import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function AppContent() {
  const todoList = useSelector((state)=> state.todo.todoList)
  const sortedList = [...todoList]
  sortedList.sort((a,b)=> new Date(b.time) - new Date(a.time))
  return (
    <div>
      { sortedList && sortedList.length>0 
        ? sortedList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'no todo found'
      }
    </div>
  )
}

export default AppContent
