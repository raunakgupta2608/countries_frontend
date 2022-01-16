
import './App.css';
import Countries from './components/Countries';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Countries />
      </div>
    </Provider>
  );
}

export default App;
