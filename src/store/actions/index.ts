import {Task} from "../../model"

export interface BaseAction {
  type : string;
  payload: any;
}


export const ADD_TASK = 'tasks:addTask';
export const DELETE_TASK = 'tasks:deleteTask';



export enum A {
  CreateToken = 'CreateToken'
}

export function login(username:string, password:string):BaseAction {
  return {
    type: A.CreateToken,
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
