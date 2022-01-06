import { Fragment, useState } from 'react'
import './App.css'
import Names from './components/Names'
import Toggle from './components/Toggle'

function App() {

  const [show,setShowStates] = useState(["yes","yes","no"])

  const [blueState,setBlueState]= useState({toggleState:true,boxState: 'blue-toggle-box',box1State: 'blue-toggle-box1',box2State:'blue-toggle-box2'}) 
  const [greenState,setGreenState]=useState({toggleState:true,boxState: 'green-toggle-box',box1State: 'green-toggle-box1',box2State:'green-toggle-box2'}) 
  const [redState,setRedState]=useState({toggleState:false,boxState:'outer-box',box1State:'box1',box2State:'box2'})

  const toggle = (color)=>{
    if(show[2]=='no' && redState.toggleState==false && color=='red') 
    {
      setGreenState({toggleState:true,boxState: 'green-toggle-box',box1State: 'green-toggle-box1',box2State:'green-toggle-box2'})
      setRedState({toggleState:true,boxState: 'red-toggle-box',box1State: 'red-toggle-box1',box2State:'red-toggle-box2'})
      setBlueState({toggleState:false,boxState:'outer-box',box1State:'box1',box2State:'box2'})
      setShowStates(["yes","no","yes"])
     }
      else if(show[1]=='no' && blueState.toggleState==false && color=='blue')
    {   
     setBlueState({toggleState:true,boxState: 'blue-toggle-box',box1State: 'blue-toggle-box1',box2State:'blue-toggle-box2'})
     setGreenState({toggleState:false,boxState:'outer-box',box1State:'box1',box2State:'box2'})
     setShowStates(["no","yes","yes"])
    }
    else if(show[0]=='no' && greenState.toggleState==false && color=='green')
    {
     setRedState({toggleState:false,boxState:'outer-box',box1State:'box1',box2State:'box2'})
     setGreenState({toggleState:true,boxState: 'green-toggle-box',box1State: 'green-toggle-box1',box2State:'green-toggle-box2'})
     setShowStates(["yes","yes","no"])
    }
  }
    
  return (
    <Fragment>
     <div className="container">
     <div>
     <Toggle state={greenState} toggle={toggle} colour="green"></Toggle>
     <Toggle state={blueState} toggle={toggle} colour="blue"></Toggle>
     <Toggle state={redState} toggle={toggle} colour="red"></Toggle>
     </div>
     <div>
       <Names name="Fulfilling Career"></Names>
       <Names name="High Salary"></Names>
       <Names name="Work/life balance"></Names>
    </div>
     </div>
    </Fragment>
  )
}

export default App
