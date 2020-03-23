import {UserActionTyeps} from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTyeps.SET_CURRENT_USER,
    payload: user
})