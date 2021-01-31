import reducer from '../reducer/reducer'

const createStore = reducer => {
    let state;
    let listeners = []

    const subscribe = listener => {
        listeners.push(listener)
    }

    const dispatch = action => {
        //-- Call the reducer to get the new state
        state = reducer(state, action)

        // -- When we disptach, we have to also notify our subscribers
        for(let i = 0; i<listeners.length; i++) {
            listeners[i]()
        }
    }

    const getState = () => {
        return state;
    }

    return {
        subscribe,
        getState,
        dispatch
    }
}

export default createStore(reducer);