import React from 'react'
import '../styles/titleModule.css'

function PageTitle(props) {
  return (
    <p className='title'> {props.heading} </p>
  )
}

export default PageTitle
