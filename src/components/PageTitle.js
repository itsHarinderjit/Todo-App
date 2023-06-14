import React from 'react'
import '../styles/titleModule.css'
import { useSelector } from 'react-redux'
import ToggleSwitch from './ToggleSwitch'

function PageTitle(props) {
  const ColorStatus = useSelector((state)=>state.todo.colorMode)
  let colorClass = ''
  if(ColorStatus==='dark') {
    console.log('hello')
    colorClass = 'heading_wrapper_dark'
  }
  console.log(ColorStatus)
  return (
    <div className={`heading_wrapper ${colorClass}`}>
      <p className='title'> {props.heading} </p>
      <ToggleSwitch/>
    </div>
  );
}

export default PageTitle
