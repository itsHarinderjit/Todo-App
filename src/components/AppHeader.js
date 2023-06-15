import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import '../styles/appModule.css'
import TodoModel from './TodoModel'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilterStatus } from '../slices/TodoSlice'
import { toast } from 'react-hot-toast'

function AppHeader() {
  const [ModelOpen,setModelOpen] = useState(false)
  const FilterStatus = useSelector((state)=>state.todo.FilterStatus)
  const isLogedIn = useSelector((state)=>state.auth.isLogedIn)
  const dispatch = useDispatch()
  function updateFilter(e) {
    dispatch(updateFilterStatus(e.target.value))
  }
  return (
    <div className='appHeader'>
      <Button variant="primary" type="button" 
        onClick={()=> isLogedIn ? setModelOpen(true) : toast.error('Please sign In to add task')}
        onKeyDown={()=> isLogedIn ? setModelOpen(true) : toast.error('Please sign In to add task')}>
        Add Task
      </Button>
      <SelectButton id="status" value={FilterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel type="Add" ModelOpen={ModelOpen} setModelOpen={setModelOpen}/>
    </div>
  )
}

export default AppHeader
