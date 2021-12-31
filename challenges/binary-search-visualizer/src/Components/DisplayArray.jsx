import { Fragment } from 'react'

const DisplayArray = (props)=>{

    const pointers = [{name: 'Low',value:props.state.low},{name: 'Mid',value:props.state.mid},{name: 'High',value:props.state.high} ]

    return (
    <Fragment>
    <input onChange={props.onInputHandler} placeholder="Enter array values in increasing order separated by space"  className="array-text" ref={props.inpTxtState}></input> 
    <div className="array-elements">
       {props.inpArr.map((data,index)=><div key={index} className="box">{data}</div>)}
    </div>
    <div className="array-index">
       {props.inpArr.map((data,index)=>{ let active ; if(props.state.low==index || props.state.high==index || props.state.mid==index) active= true; 
          return <div key={index} className={active ? 'box-index-active':'box-index'}>[{index}]</div>})}
    </div>

    <div>   
    <div className="pointers">
    <div>
    {pointers.map((data,index)=>{  
                  return (          
                  <div key={index} className="pointer">
                  <div className="pointer-name">{data.name}</div>
                  <div className="pointer-value">{data.value}</div>
                  </div>
                  )})}
    </div>
    </div>
    </div>
    </Fragment>    
    )
}

export default DisplayArray