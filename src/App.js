import './styles/App.css';
import Home from './components/Home';
import Time from './components/Time';


function App() {
  return (
    <div className="App">
      <Time/>
      <Home url = "https://jsonplaceholder.typicode.com/users"/>
    </div>
  );
}

export default App;
