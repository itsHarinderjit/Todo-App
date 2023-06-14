import React from 'react'
import { motion } from 'framer-motion'
import '../styles/todoItemModule.css'
import { useDispatch } from 'react-redux'
import { updateTask } from '../slices/TodoSlice'

const checkVariants = {
	initial : {
		color: '#ffff',
	},
	checked : {
		pathLength: 1,
	},
	unchecked : {
		pathLength: 0,
	}
}

const boxVariants = {
	checked : {
		background : 'var(--primaryPurple)',
		transition : { duration: 0.1 }
	},
	unchecked : {
		background : 'var(--gray-1)',
		transition : {duration: 0.1}
	}
}

function CheckButton({checked,setChecked,todo}) {
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
				Status
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
