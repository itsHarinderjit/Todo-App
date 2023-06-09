import React from 'react'
import '../styles/modelModule.css'

function TodoModel() {
  return (
    <div className='wrapper'>
        <div className='container'>
            <div className='closeButton'>

            </div>
            <form className='form'>
                <h1 className='formTitle'>Add Task</h1>
                <label htmlFor='title'>
                    Title
                    <input id='title' type='text'/>
                </label>
                <label htmlFor='status'>
                    Status
                    <select id='status' name='status'>
                        <option value='incomplete'>Incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>
            </form>
        </div>
    </div>
  )
}

export default TodoModel
