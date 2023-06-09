import React from 'react'
import Button, { SelectButton } from './Button'
import '../styles/appModule.css'
import TodoModel from './TodoModel'

function AppHeader() {
  return (
    <div className='appHeader'>
      <Button variant="primary" type="button">Add Task</Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel/>
    </div>
  )
}

export default AppHeader
