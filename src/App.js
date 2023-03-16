import {useState, useEffect} from 'react';
import ModuleDeployer from './components/ModuleDeployer';
import ConfigurationForm from './components/ConfigurationForm';
import './App.css';




function App() {
  const [ foryouModules, setForyouModules] = useState( []);
  

  useEffect(() => {
    window.electronWorld.readModuleConfig()
      .then(result => {
          setForyouModules(result);
      });

  }, []);
  const handleDeployClick = async () => {

    const response = await window.electronWorld.copyFiles();

  }

  return (
    <div className="App">
      
      <h1>SIRH - Déployeur ForYou</h1>
     
      <ConfigurationForm/>
      <ModuleDeployer onClickDeploy={ handleDeployClick } moduleConfig= { foryouModules } />

     
    </div>
  );
}

export default App;
