import React from 'react'

 function name(props) {
    console.log("render....")
    return(
        <div>
            <button onClick={()=>props.inc(6)}>+6</button>
            <button onClick={()=>props.inc(12)}>+12</button>
            <button onClick={()=>props.inc(24)}>+24</button>
        </div>
    );
}

export default React.memo(name);