import {Task} from '../../model'
import {ADD_TASK, DELETE_TASK} from '../actions'
export default function taskRedudcer(state: Task[] = [], action:any){
  let newState: Task[] = [];
  switch(action.type){
    case ADD_TASK:
      newState = [...state,action.payload.task]
      return newState;
    case DELETE_TASK:
        return state.filter(task => task.id !== action.payload.id);
    default:
        return state;  
  } 
}
