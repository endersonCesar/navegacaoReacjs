import React, { useMemo, useState} from "react";

function sum(a,b) {
    const future = Date.now() + 2000
    while(Date.now()<future){}
    return a + b
}

export default function Memo(){
    const [n1,setN1] = useState(0);
    const [n2,setN2] = useState(0);
    const [n3,setN3] = useState(0);

    const result = useMemo(()=>sum(n1,n2),[n1,n2])
    return(
        <div >
            
        <hr></hr>
        <div>
            <input type="number" value={n1} onChange={e=>setN1(e.target.value)}></input>
        </div>

        <hr/>
        <div>
            <input type="number"  value={n2} onChange={e=>setN2(e.target.value)}></input>
        </div>

        <hr/>
        <div>
            <input type="number"  value={n3} onChange={e=>setN3(e.target.value)}></input>
        </div>
        <hr/>
        <span>{result}</span>

    </div>
    );
}