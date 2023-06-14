import React from 'react'
import '../styles/buttonModule.css'
import { useSelector } from 'react-redux'

function Button({children, variant, type, ...rest}) {
  const ColorStatus = useSelector((state)=> state.todo.colorMode)
  let colorClass = variant
  if(ColorStatus==='dark') {
    colorClass += '__dark'
  }
  return (
    <button className={`button button--${colorClass}`} type={type} {...rest}>{children}</button>
  )
}

function SelectButton({children, ...rest}) {
  const ColorStatus = useSelector((state)=> state.todo.colorMode)
  let colorClass = ''
  if(ColorStatus==='dark') {
    colorClass += 'button__select__dark'
  }
    return (
        <select className={`button button__select ${colorClass}`} {...rest}>{children}</select>
    );
}

export {SelectButton};
export default Button
