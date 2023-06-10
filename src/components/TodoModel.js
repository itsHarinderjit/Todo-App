import React, { useState } from 'react'
import Button from './Button'
import '../styles/modelModule.css'

function TodoModel({ModelOpen,setModelOpen}) {
    const [Title,setTitle] = useState('')
    const [Status,setStatus] = useState('incomplete')
    function handleSubmit(e) {
        e.preventDefault()
        console.log({Title,Status})  
    }
  return (
    <>
        {
            ModelOpen && (
                <div className='wrapper'>
                <div className='container_model'>
                    <div className='closeButton' role="button" tabIndex={0} 
                    onClick={()=>setModelOpen(false)} onKeyDown={()=>setModelOpen(false)}>
                        X 
                    </div>
                    <form className='form' onSubmit={(e)=>handleSubmit(e)}>
                        <h1 className='formTitle'>Add Task</h1>
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
                                Add Task
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
