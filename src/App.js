import './App.scss';
import store from './redux/store/store'
import { bugAdded, bugRemoved } from './redux/actions/actions'


function App() {

  store.dispatch(bugAdded("bug 1"))

  console.log(store.getState())

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
    </div>
  );
}

export default App;
