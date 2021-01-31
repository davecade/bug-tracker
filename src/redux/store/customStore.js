import reducer from '../reducer/reducer'

const createStore = reducer => {
    let state;

    const dispatch = action => {
        //-- Call the reducer to get the new state
        state = reducer(state, action)
    }

    const getState = () => {
        return state;
    }

    return {
        getState,
        dispatch
    }
}

export default createStore(reducer);