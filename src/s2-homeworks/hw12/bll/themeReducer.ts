import {ActionType} from "../../hw10/bll/loadingReducer";

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        // case 'SET_THEME_ID' {
        //     return
        // }
        default:
            return state
    }
}


export type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
