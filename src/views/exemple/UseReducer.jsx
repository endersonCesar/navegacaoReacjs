import React,{useReducer} from 'react '

const initialState = {
    cart:[],
    poducts: [],
    user:null,
    number:0
}

function reducer(state,action){
    switch(action.type){
        case 'number_add2':
            return {...state,number:state.number+2}
        case 'login':
            return {...state,user:{name:action.payload}}
        default:
            return state
        
    }
}

const UseRedu = (props) =>{
    const [state,dispatch] = useReducer (reducer,initialState);

    return (
            <div>

                <div>
                    <button  onClick={()=>dispatch({type:'number_add2'})}>
                       +2
                    </button>
                    <button  onClick={()=>dispatch({type:'login',payload:'Maria'})}>
                       +2
                    </button>
                </div>
            </div>
    );
}