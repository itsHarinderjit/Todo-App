import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import '../styles/appModule.css'
import TodoModel from './TodoModel'

function AppHeader() {
  const [ModelOpen,setModelOpen] = useState(false)
  return (
    <div className='appHeader'>
      <Button variant="primary" type="button" 
      onClick={()=>setModelOpen(true)} onKeyDown={()=>setModelOpen(true)}>Add Task</Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel type="Add" ModelOpen={ModelOpen} setModelOpen={setModelOpen}/>
    </div>
  )
}

export default AppHeader
