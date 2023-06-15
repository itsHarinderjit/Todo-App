import React from 'react'
import { motion } from 'framer-motion'
import '../styles/todoItemModule.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../slices/TodoSlice'

function CheckButton({checked,setChecked,todo}) {
	const ColorType = useSelector((state)=>state.todo.colorMode)
	const userId = useSelector((state)=>state.auth.authId)
	let colorChecked = ''
	let colorUnchecked = ''
	let strokeColorChecked = ''
	let strokeCholorUnchecked = ''
	if(ColorType==='light') {
		colorChecked = 'var(--primaryPurple)'
		colorUnchecked = 'var(--gray-1)'
		strokeColorChecked = 'white'
		strokeCholorUnchecked = 'white'
	}
	else {
		colorChecked = 'darkblue'
		colorUnchecked = 'var(--dark-secondary)'
		strokeCholorUnchecked = 'var(--dark-secondary)'
		strokeColorChecked = 'white'
	}
	const checkVariants = {
		checked : {
			pathLength: 1,
			stroke: strokeColorChecked
		},
		unchecked : {
			pathLength: 0,
			stroke: strokeCholorUnchecked
		}
	}
	const boxVariants = {
		checked : {
			background : colorChecked,
			transition : { duration: 0.1 }
		},
		unchecked : {
			background : colorUnchecked,
			transition : {duration: 0.1}
		}
	}
	const dispatch = useDispatch()
  return (
    <motion.div 
		className='svgBox' 
		variants={boxVariants} 
		animate={checked ? 'checked' : 'unchecked'} 
		onClick={()=>{
			let Status
			let Title = todo.title
			if(todo.status === 'incomplete')
				Status = 'complete'
			else
				Status = 'incomplete'
			dispatch(updateTask({
				todo,
				Title,
				Status,
				userId
			}))
			setChecked(!checked)
		}}>
      	<motion.svg viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'>
			<motion.path
				variants={checkVariants}
				animate={checked ? 'checked' : 'unchecked'}
				fill="none"
				strokeMiterlimit="10"
				strokeWidth="6"
				d="M1.5 22L16 36.5L51.5 1"
				strokeLinejoin="round"
				strokeLinecap="round">
			</motion.path>
		</motion.svg>
    </motion.div>
  )
}

export default CheckButton
