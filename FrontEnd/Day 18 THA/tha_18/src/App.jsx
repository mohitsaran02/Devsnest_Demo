import Block from './components/chessBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {
          [...Array(169)].map(function (item, i) {
            return <Block key={i} />
          })
        }
      </div>
    </div>
  );
};


export default App;
