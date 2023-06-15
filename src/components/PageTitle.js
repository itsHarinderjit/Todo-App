import React from 'react'
import '../styles/titleModule.css'
import { useSelector } from 'react-redux'
import ToggleSwitch from './ToggleSwitch'
import LogedIn from './LogedIn'

function PageTitle(props) {
  const ColorStatus = useSelector((state)=>state.todo.colorMode)
  let colorClass = ''
  if(ColorStatus==='dark') {
    colorClass = 'heading_wrapper_dark'
  }
  return (
    <div className={`heading_wrapper ${colorClass}`}>
      <div className='authButtons'>
        <LogedIn/>
      </div>
      <p className='title'> {props.heading} </p>
      <div className='toggle_wrapper'>
        <p className='toggleText'>Dark mode</p>
        <ToggleSwitch/>
      </div>
    </div>
  );
}

export default PageTitle
