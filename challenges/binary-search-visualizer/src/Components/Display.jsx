import { useState } from 'react'
import { Fragment } from 'react'
import './Display.css'
import DisplayArray from './DisplayArray'

const Display =()=>{

    const [pointerState,setPointerState] = useState({})
    const [inpArr,setInpArr] = useState([])

     function reset(){
        setInpArr([])
        setPointerState({low:0,mid:0,high:0,disabled:false})        
     }

     function onInputHandler(event){
        const arr = event.target.value.split(" ");
        setInpArr(arr)
        setPointerState({low:0,mid:Math.floor((arr.length-1)/2),high:arr.length-1,disabled:false})
     }

     return (
        <Fragment>
        <DisplayArray state={pointerState} onInputHandler={onInputHandler} inpArr={inpArr} reset={reset}></DisplayArray>
        </Fragment>
     )

}

export default Display;