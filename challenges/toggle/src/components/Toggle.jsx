import './Toggle.css'

const Toggle=(props)=>{

      return ( 
      <div className="toggle-container">
      <div className={props.state.boxState}>    
      <div onClick={()=>{props.toggle(props.colour)}} className={props.state.box1State}>
      </div>
      <div onClick={()=>{props.toggle(props.colour)}} className={props.state.box2State}>
      </div>
      </div>
      </div>
      )

}

export default Toggle