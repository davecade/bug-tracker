import './App.scss';
import store from './redux/store/store'
import * as actions from './redux/actionTypes/actionTypes'

function App() {

  const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
  })

  store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug1"
    }
  })

  unsubscribe();

  store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
      id: 1
    }
  })

  console.log(store.getState())

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
    </div>
  );
}

export default App;
