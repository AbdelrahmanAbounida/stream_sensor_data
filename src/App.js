import './App.css';
import DataPlotter from './DataPlotter'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Plotting Sensor Data Stream <span className="heart">✌️</span>  in the browser 
        </p>
        <DataPlotter />
      </header>
    </div>
  );
}

export default App;
