import React, { useCallback, useState }  from 'react'
import Button from "./useCallbackButton";
export default function UseCallback(){
    
    const [count,setCout] = useState(0);

    const inc =useCallback(function (delta) {
        setCout(current =>current +delta)
    },[setCout])

    return (
        <div>
            <span>{count}</span>
            <Button inc={inc}></Button>
        </div>
    );
}