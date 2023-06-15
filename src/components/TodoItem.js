import React, { useEffect, useState } from 'react'
import '../styles/todoItemModule.css'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch, useSelector,} from 'react-redux'
import { deleteTask } from '../slices/TodoSlice'
import { toast } from 'react-hot-toast'
import TodoModel from './TodoModel'
import CheckButton from './CheckButton'

function TodoItem({ key,todo }) {
    const dispatch = useDispatch()
    const [ModelOpen,setModelOpen] = useState(false)
    const [Checked,setChecked] = useState(todo.status === 'complete' ? true : false)
    const ColorType = useSelector((state)=>state.todo.colorMode)
    const userId = useSelector((state)=>state.auth.authId)
    let colorClass = ''
    if(ColorType==='dark') {
        colorClass = '__dark'
    }

    useEffect(()=> {
        if(todo.status === 'complete') {
            setChecked(true)
        }
        else  
            setChecked(false)
    },[todo.status])

    function handleDeleting() {
        dispatch(deleteTask({
            id: todo.id,
            userId
        }))
        toast.success('Task deleted successfully')
    }
    function handleEditing() {
        setModelOpen(true)
    }
    function formatDate(dateAndTime) {
        const comma = dateAndTime.indexOf(',')
        const date = dateAndTime.slice(0,comma)
        let [hrs,mins] = dateAndTime.slice(comma+2).split(":")
        const ampm = parseInt(hrs) >= 12 ? "PM" : "AM"
        hrs = parseInt(hrs)%12
        const hr = hrs.toString()
        return hr+":"+mins+" "+ampm+" "+date
    }
  return (
    <>
        <div className={`item${colorClass}`}>
            <div className='todoDetails'>
                <CheckButton checked={Checked} setChecked={setChecked} todo={todo} />
                <div className='texts'>
                    <p className={`todoText${colorClass} todoText--${todo.status}`}>{todo.title}</p>
                    <p className={`time${colorClass}`}>{formatDate(todo.time)}</p>
                </div>
            </div>
            <div className='todoActions'>
                <div className={`icon${colorClass}`} role='button' tabIndex={0} onClick={()=> handleDeleting()} onKeyDown={()=> handleDeleting()}>
                    <MdDelete/>
                </div>
                <div className={`icon${colorClass}`} role='button' tabIndex={0} onClick={()=> handleEditing()} onKeyDown={()=> handleEditing()}>
                    <MdEdit/>
                </div>
            </div>
        </div>
        <TodoModel type="Update" ModelOpen={ModelOpen} setModelOpen={setModelOpen} todo={todo}/>
    </>
  )
}

export default TodoItem
