import { createReducer } from './lib'
import {SettingsState} from '../../model'
export type Actions = SetTheme
export enum ActionTypes {
  SETTINGS_SET_THEME_LIGHT = 'SETTINGS_SET_THEME_LIGHT',
  SETTINGS_SET_THEME_DARK = 'SETTINGS_SET_THEME_DARK',
}

export const setTheme = (theme: 'light' | 'dark') =>(state: SettingsState) => {
  return {...state, theme}
}

const initialState: SettingsState = {
  theme: 'light'
}

const reducerActions: {
  [s: string]: (state: SettingsState, actions:Actions) => SettingsState
} = {
  SETTINGS_SET_THEME_LIGHT: setTheme('light'),
  SETTINGS_SET_THEME_DARK: setTheme('dark'),
}

export default createReducer(initialState, reducerActions)


export interface SetTheme {
  type: ActionTypes.SETTINGS_SET_THEME_LIGHT | ActionTypes.SETTINGS_SET_THEME_DARK
  theme: 'light' | 'dark'
}



