import './App.scss';
import store from './redux/store/customStore'
import * as actions from './redux/actions/actions'

store.dispatch(actions.bugAdded("Bug 1"))
console.log(store.getState())


function App() {


  return (
    <div className="App">
      <h1>Bug Tracker</h1>
    </div>
  );
}

export default App;
