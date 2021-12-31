const DisplayPointers =(props)=>{

    function search (){
        
        let target=searchKey.current.value 
 
        if(counter<Math.sqrt(inpArr.length+1)){
        setCounter(counter+1) 
        if(target==inpArr[state.mid]) 
        {
            return state.mid}
        else if(target<inpArr[state.mid]) {
            let high=state.mid-1
            setState({...state,high:high,mid:Math.floor((state.low+high)/2),disabled:true})
        }
        else if(target>inpArr[state.mid]) {
            let low=state.mid+1
            setState({...state,low:low,mid:Math.floor((low+state.high)/2),disabled:true})
       }
       else return state.low;
      }
     }

    return (   
     <div>   
    <div className="container">
    <div>    
    <div className="index-holder">
    <div className="index">Low</div>
    <div className="value">{props.state.low}</div>
    </div>
    <div className="index-holder">
    <div className="index">Mid</div>
    <div className="value">{props.state.mid}</div>
    </div>
    <div className="index-holder">
    <div className="index">High</div>
    <div className="value">{props.state.high}</div>
    </div>
    </div>

    <div>
    <div className="index-holder">
    <div className="index">Key</div>
    <div className="value">
          <input className="search-key-text" disabled={props.state.disabled} ref={props.searchKey}></input>
    </div>
    </div>
    <div className="index-holder">
    <div className="index">Index</div>
    <div className="value">{props.keyPosition}</div>
    </div>
    </div>
   </div>
    
   <div>
          <div className="index-holder">
             <button className="next-button" onClick={()=>{if(!props.keyPosition) 
              {
              props.setKeyPosition(props.search())
              }
              }}>Next</button>
          </div>  
          <div className="index-holder">
           <button className="next-button" onClick={props.reset()}>Refresh</button>
          </div>
          </div>
      </div>
 

    )
}

export default DisplayPointers;