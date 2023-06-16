import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import '../styles/appModule.css'

function AppContent() {
  const todoList =  useSelector((state)=> state.todo.todoList)
  const FilterStatus = useSelector((state) => state.todo.filterStatus)
  const ColorType = useSelector((state)=> state.todo.colorMode)
  let colorClass = ''
  if(ColorType==='dark') {
    colorClass = '__dark'
  }
  const sortedList = [...todoList]
  
  sortedList.sort((a,b)=> new Date(b.time) - new Date(a.time))
  const filteredTodoList = sortedList.filter((item) => {
      if(FilterStatus==='all')
        return true
      return item.status === FilterStatus
  })
  return (
    <div className={`content__wrapper${colorClass}`}>
      { filteredTodoList && filteredTodoList.length>0 
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : <h3 className={`noContent${colorClass}`}>No todo found</h3>
      }
    </div>
  )
}

export default AppContent
