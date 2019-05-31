import {Task} from "../../model"

export interface BaseAction {
  type : string;
  payload: any;
}

export const actionIds = {
  GET_NUMBER_REQUEST_START: '[0] Request a new number to the NumberGenerator async service.',
  GET_NUMBER_REQUEST_COMPLETED: '[1] NumberGenerator async service returned a new number.',
}

export const ADD_TASK = 'tasks:addTask';
export const DELETE_TASK = 'tasks:deleteTask';



export enum A {
  CreateToken = 'CreateToken'
}

export const numberRequestStartAction = () : BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_START,
  payload: null,
 });


export function login(username:string, password:string):BaseAction {
  return {
    type:'createToken',
    payload:{
      username,
      password
    }
  }
}

export function addTask(newTask: Task){
  return {
    type: ADD_TASK,
    payload:{
      task:newTask
    }
  }
}

export function deleteTask(id: number) {
  return {
      type: DELETE_TASK,
      payload: {
          id
      }
  }
}
