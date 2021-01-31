// -- You can import the action types as per below
// -- import { BUG_ADDED, BUG_REMOVED } from "../actionTypes/actionTypes"
// -- Or you can import them as actions.
import * as actions from '../actionTypes/actionTypes'

let lastID = 0

const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastID,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        
        case actions.BUG_RESOLVED:
            return state.map(bug => { 
                if(bug.id===action.payload.id) {
                    return {
                        ...bug,
                        resolved: true
                    }
                } else return bug
                
            })

        default:
            return state
    }
}

export  default reducer;