import React, { useEffect, useState } from 'react'
import Button from './Button'
import '../styles/modelModule.css'
import { useDispatch } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { addTodo, updateTodo } from '../slices/TodoSlice'
import { toast } from 'react-hot-toast'
import { MdOutlineClose } from 'react-icons/md'

function TodoModel({type,ModelOpen,setModelOpen,todo}) {
    const [Title,setTitle] = useState('')
    const [Status,setStatus] = useState('incomplete')
    const dispatch = useDispatch()
    useEffect(()=>{
        if(type==='Update' && todo) {
            setTitle(todo.title)
            setStatus(todo.status)
        }
        else {
            setTitle('')
            setStatus('incomplete')
        }
    },[type,todo,ModelOpen])
    function handleSubmit(e) {
        e.preventDefault()
        if(Title && Status) {
            if(type==='Add') {
                dispatch(addTodo({
                    id: uuid(),
                    title: Title,
                    status: Status,
                    time: new Date().toLocaleString(),
                }))
                toast.success('Task added successfully')
                setModelOpen(false)
            }
            else {
                if(todo.title !== Title || todo.status !== Status) {
                    dispatch(updateTodo({
                        ...todo,
                        Title,
                        Status
                    }))
                    setModelOpen(false)
                }
                else  
                    toast.error('No changes made to task')
            }
        }
        else {
            toast.error("Title should not be empty")
        }
    }
  return (
    <>
        {
            ModelOpen && (
                <div className='wrapper'>
                <div className='container_model'>
                    <div className='closeButton' role="button" tabIndex={0} 
                    onClick={()=>setModelOpen(false)} onKeyDown={()=>setModelOpen(false)}>
                        <MdOutlineClose/>
                    </div>
                    <form className='form' onSubmit={(e)=>handleSubmit(e)}>
                        <h1 className='formTitle'>{`${type} task`}</h1>
                        <label htmlFor='title'>
                            Title
                            <input id='title' type='text'
                             value={Title} onChange={(e)=>setTitle(e.target.value)}/>
                        </label>
                        <label htmlFor='status'>
                            Status
                            <select id='status' name='status'
                             value={Status} onChange={(e)=>setStatus(e.target.value)}>
                                <option value='incomplete'>Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <div className='buttonContainer'>
                            <Button variant="primary" type="submit">
                                {`${type} task`}
                            </Button>
                            <Button variant="secondary" type="button" 
                            onClick={()=>setModelOpen(false)} onKeyDown={()=>setModelOpen(false)}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            )
        }
    </>
  )
}

export default TodoModel
