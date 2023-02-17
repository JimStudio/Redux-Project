import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { action } from './store/index';

function App() {
  const countere = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const increment = () => {dispatch(action.increment());};
  const decrement = () => {dispatch(action.decrement());};
  const addby = () => {dispatch(action.addBy(10));};
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{countere}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>Add By 10</button>
    </div>
  );
}

export default App;
