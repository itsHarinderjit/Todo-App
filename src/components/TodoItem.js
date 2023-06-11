import React, { useState } from 'react'
import '../styles/todoItemModule.css'
import { format } from 'date-fns/esm'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch,} from 'react-redux'
import { deleteTodo,} from '../slices/TodoSlice'
import { toast } from 'react-hot-toast'
import TodoModel from './TodoModel'
import CheckButton from './CheckButton'

function TodoItem({ key,todo }) {
    const dispatch = useDispatch()
    const [ModelOpen,setModelOpen] = useState(false)
    function handleDeleting() {
        dispatch(deleteTodo(todo.id))
        toast.success('Task deleted successfully')
    }
    function handleEditing() {
        setModelOpen(true)
    }
  return (
    <>
        <div className='item'>
            <div className='todoDetails'>
                <CheckButton/>
                <div className='texts'>
                    <p className={`todoText todoText--${todo.status}`}>{todo.title}</p>
                    <p className='time'>{format(new Date(todo.time),'p, dd/MM/yyyy')}</p>
                </div>
            </div>
            <div className='todoActions'>
                <div className='icon' role='button' tabIndex={0} onClick={()=> handleDeleting()} onKeyDown={()=> handleDeleting()}>
                    <MdDelete/>
                </div>
                <div className='icon' role='button' tabIndex={0} onClick={()=> handleEditing()} onKeyDown={()=> handleEditing()}>
                    <MdEdit/>
                </div>
            </div>
        </div>
        <TodoModel type="Update" ModelOpen={ModelOpen} setModelOpen={setModelOpen} todo={todo}/>
    </>
  )
}

export default TodoItem
