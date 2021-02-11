import React,{useEffect,useState, useRef} from "react";

export default function  HookUseRef() {

    const [valor1,setValor1] = useState("");
    const [valor2,setValor2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(function () {
      count.current++;  
      myInput2.current.focus();
    },[valor1]);

    useEffect(function () {
        count.current++;  
        myInput1.current.focus();
      },[valor2]);
    return (
        <div >
            <span>Cotador:  {valor1} - {count.current}</span>
            <hr></hr>
            <div>
                <input type="text" ref={myInput1}value={valor1} onChange={e=>setValor1(e.target.value)}></input>
            </div>

            <hr/>
            <div>
                <input type="text" ref={myInput2} value={valor2} onChange={e=>setValor2(e.target.value)}></input>
            </div>
    
        </div>
    );
}