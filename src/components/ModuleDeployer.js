import ModuleRow from "./ModuleRow";

const ModuleDeployer = ({ onClickDeploy }) => {
    return (
        <div>
            <table>
                <tr>
                <th>Module</th><th></th>
                </tr>
         
                <ModuleRow name="Accident"/>
            
                <ModuleRow name="Télétravail"/>
                <ModuleRow name="Ma synthèse de journée"/>
              
            </table>
            <button onClick={ onClickDeploy }>Deployer</button>
        </div>
    );
}

export default ModuleDeployer;
