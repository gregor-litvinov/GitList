import './App.css';
import TitleImput from './components/TitleImput'
import GitList from './components/GitList/GitList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input></input>
        <button>Go</button>
        <GitList/>
      </header>
    </div>
  );
}

export default App;
