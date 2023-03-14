import logo from './logo.svg';
import ModuleDeployer from './components/ModuleDeployer';
import ConfigurationForm from './components/ConfigurationForm';
import './App.css';




function App() {
  const handleDeployClick = async () => {
    const response = await window.electronWorld.ping()

  }
  return (
    <div className="App">
      
      <h1>SIRH - Déployeur ForYou</h1>
      <ConfigurationForm/>
      <ModuleDeployer onClickDeploy={ handleDeployClick }/>

     
    </div>
  );
}

export default App;
