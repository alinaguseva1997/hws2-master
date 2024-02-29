import {ActionType} from "../../hw10/bll/loadingReducer";

const initState = {
    themeId: 1,
}
export type initStateType = typeof initState

export const themeReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
             return {...state, themeId: action.id}
         }
        default: {
            return state
        }
    }
}


export type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
