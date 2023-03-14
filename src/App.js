import logo from './logo.svg';
import './App.css';

const func = async () => {
  const response = await window.electronWorld.ping()
  console.log(response) // prints out 'pong'
}


function App() {
  return (
    <div className="App">
      
      <h1 onClick={func}>Déployeur ForYou</h1>


     
    </div>
  );
}

export default App;
