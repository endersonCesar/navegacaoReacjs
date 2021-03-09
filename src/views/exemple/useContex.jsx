import React, {useContext} from 'react'
import DataContext from '../../data/DataContext'
import {AppContext} from '../../data/Store'

export default function Context () {
    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number:context.state.number + delta
        })
    }
    const {number,text,setNumber} = useContext(AppContext)

    return (
        <div>

            <div>
                <span>{context.state.text}: </span>
                <span>{context.state.number}:</span>
                <div>
                    <button onClick={()=>addNumber(+1)}>+1</button>
                    <button onClick={()=>addNumber(-1)}>-1</button>
                </div>
            </div>
            <hr></hr>
            
            <div>
                <span>{text}: </span>
                <span>{number}:</span>
                <div>
                    <button onClick={()=>setNumber(number+1)}>+1</button>
                    <button onClick={()=>setNumber(number+1)}>-1</button>
                </div>
            </div>
        </div>
    )
}