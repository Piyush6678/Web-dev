import { bindActionCreators, createStore } from "redux";
const ADD_TODO="add_todo"
const DEL_TODO="delete_todo"
const EDIT_TODO="edit_todo"


function todoReducer(state,action){ 
    if(action.type==ADD_TODO){
        const todotext=action.payload.todoText;
        return[
            ...state,
            {Text:todotext,isFinished:false,id:(state.length==0)?1:state(state.length-1).id+1}


        ]
    }else if(action.type==EDIT_TODO){
       const todoId=action.payload.todoId; 
       const todotext=action.payload.todoText;
       return state.map(t=>{if(t.id==todoId){
        t.text=todotext
       }
    return t;})
    }
    else if(action.type==DEL_TODO){
const todoId=action.payload.todo;
return state.filter(t=>t.id!=todoId)
    }

return state;


}
const addTodo=(todoText)=>
    ({
        type:ADD_TODO,
        payload:{todoText}
    }
)
const deleteTodo=(id)=>
    ({
        type:DEL_TODO,
        payload:{todoId:id}
    }
)

const actions=bindActionCreators({addTodo,deleteTodo})
const response=createStore(todoReducer,[])
console.log(response)
// {
//   dispatch: [Function: dispatch],
//   subscribe: [Function: subscribe],
//   getState: [Function: getState],
//   replaceReducer: [Function: replaceReducer],
//   '@@observable': [Function: observable]
// }