import { ACTIONS } from "../../ENUMS/ReducersActionsEnum"
import { STATUSES } from '../../ENUMS/StatusesEnum';


export const searchResultReducer = (state: any, action: any) => {
    if (action.type == ACTIONS.SET_SEARCH_RESULTS) {
        return { ...state, data: action.payload, status: STATUSES.IDLE }

    } else if (action.type == ACTIONS.SET_STATUS) {
        return { ...state, status: action.payload }
    }
}