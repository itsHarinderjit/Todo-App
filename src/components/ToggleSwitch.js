import { useDispatch, useSelector } from 'react-redux';
import '../styles/toggleSwitch.css'
import { updateColorMode } from '../slices/TodoSlice';

function ToggleSwitch() { 
    const ColorType = useSelector((state)=>state.todo.colorMode)
    const dispatch = useDispatch()
    function changeMode() {
        if(ColorType==='light') {
            dispatch(updateColorMode('dark'))
        }
        else if(ColorType==='dark') {
            dispatch(updateColorMode('light'))
        }
    }
    return (
        <div className='toggle_wrapper'>
            <label className="switch">
            <input type="checkbox" id='colorMode' onClick={changeMode}/>
            <span className="slider round"></span>
            </label>    
        </div>
    );
}

export default ToggleSwitch;