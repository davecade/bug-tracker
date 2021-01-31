import './App.scss';
import store from './redux/store/store'
import { bugAdded, bugRemoved, bugResolved } from './redux/actions/actions'


function App() {

  store.subscribe(() => {
    console.log("Store changed!", store.getState())
  })

  store.dispatch(bugAdded("bug 1"))
  store.dispatch(bugAdded("bug 2"))
  store.dispatch(bugAdded("bug 3"))
  store.dispatch(bugAdded("bug 4"))
  store.dispatch(bugAdded("bug 5"))

  store.dispatch(bugResolved(1))
  store.dispatch(bugResolved(3))

  //console.log(store.getState())

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
    </div>
  );
}

export default App;
