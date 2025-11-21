import { createStore } from "redux";
function todoReducer(state,action){ 
    if(action.type=="add_todo"){
        const todotext=action.payload.todoText;
        return[
            ...state,
            {Text:todotext,isFinished:false,id:(state.length==0)?1:state(state.length-1).id+1}


        ]
    }else if(action.type=="edit_todo"){
       const todo=action.payload.todo; 
       const todotext=action.payload.todoText;
       return state.map(t=>{if(t.id==todo.id){
        t.text=todotext
       }
    return t;})
    }
    else if(action.type=="delete_todo"){
const todo=action.payload.todo;
return state.filter(t=>t.id!=todo.id)
    }

return state;


}


const response=createStore(todoReducer,[])