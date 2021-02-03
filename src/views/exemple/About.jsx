import React, {useEffect, useState} from "react";

function calcFatorial(num) {
    const params = parseInt(num)
    if(params<0) return -1
    if(params===0)  return 1
     
    return calcFatorial(params-1)*params
}


function parImpar(params) {
  const  num = parseInt(params)%2;
    if(num===0){
        return "Par"
    }else{
        return "Impar";
    }
}
function About() {


 const [number, setNumber] = useState(1)
 const [fatorial, setFatorial] = useState(1);
 const [numStatus,setNunStatus] = useState(1);
 const [status,setStatus]=useState("Impar");

 useEffect(function() {
    setFatorial(calcFatorial(number));
},[number])

useEffect(function () {
    setStatus(parImpar(numStatus))
},[numStatus])


    return (
        <div className="About">
            <div>
            <label>Fatorial: {fatorial}</label>
            <div>
            <input type="number" className="input" value={number} onChange={e=>setNumber(e.target.value)}/>
            </div>
            

            </div>
            
            <div>
                <label>Status: {status}</label>
                <div>
                <input type="number"  value={numStatus} onChange={e=>setNunStatus(e.target.value)}></input>
                </div>
            </div>

        </div>
    );

}
export default About