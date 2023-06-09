import React from 'react'
import '../styles/buttonModule.css'

function Button({children, variant, type, ...rest}) {
  return (
    <button className={`button button--${variant}`} type={type} {...rest}>{children}</button>
  )
}

function SelectButton({children, ...rest}) {
    return (
        <select className={`button button__select`} {...rest}>{children}</select>
    );
}

export {SelectButton};
export default Button
