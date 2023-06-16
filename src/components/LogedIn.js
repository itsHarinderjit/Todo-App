import Button from './Button'
import '../styles/logedInModule.css'
import { useDispatch, useSelector } from 'react-redux'
import { signInUser, signOutUser } from '../slices/AuthSlics'
import { toast } from 'react-hot-toast'
import { getTask,emptyTodoList } from '../slices/TodoSlice'
import { useEffect, useState } from 'react'
import { auth } from '../app/firebase'

function LogedIn() {
    const dispatch = useDispatch()
    const isLogedIn = useSelector((state)=>state.auth.isLogedIn)
    const userId = useSelector((state)=>state.auth.authId)
    const colorType = useSelector((state)=>state.todo.colorMode)
    const [OpenSection,setOpenSection] = useState(false)
    let colorClass = ''
    if(colorType==='dark')
        colorClass = '__dark'
    // let title = ''
    // if(isLogedIn) {
    //     title = 'Log Out'
    // }
    // else {
    //     title = 'Log In'
    // }
    function handleClick() {
        console.log(auth.currentUser)
        if(isLogedIn) {
            dispatch(signOutUser())
            dispatch(emptyTodoList())
            setOpenSection(false)
            toast.success('Successfully Logged out')
        }
        else {
            dispatch(signInUser())
            if(auth.currentUser)
                toast.success(`Welcome ${auth.currentUser.displayName}`)
        }
    }
    function openSection() {
        setOpenSection(!OpenSection)
    }
    useEffect(()=> {
        if(isLogedIn) {
            dispatch(getTask({
                userId
            }))
        }
    },[userId,isLogedIn,dispatch])
  return (
    <div className='button_wrapper'>
        <>
           {
                isLogedIn && auth.currentUser && (
                    <>
                        <Button variant='image' type='button' onClick={openSection}>
                            <img src={auth.currentUser.photoURL} alt='User' className='userPhoto'/>
                        </Button>
                        {
                            OpenSection && (
                                <div className={`logOutSection${colorClass}`}>
                                    <div className={`userDataText${colorClass} userName`}>
                                        {auth.currentUser.displayName}
                                    </div>
                                    <div className={`userDataText${colorClass} email`}>
                                        {auth.currentUser.email}
                                    </div>
                                    <Button variant='primary' type='button' onClick={handleClick}>
                                        Log out
                                    </Button>
                                </div>
                            )
                        }
                    </>                    
                )
           }
        </>
        <>
           {
                !isLogedIn && (
                    <>
                        <Button variant='primary' type='button' onClick={handleClick}>LogIn</Button>
                    </>
                )
           }
        </>
    </div>
  )
}

export default LogedIn
