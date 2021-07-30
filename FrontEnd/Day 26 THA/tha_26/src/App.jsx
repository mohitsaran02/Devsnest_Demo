import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store";
import Form from './components/form'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Form</h2>
        <Form />
      </div>
    </ Provider>
  );
}

export default App;