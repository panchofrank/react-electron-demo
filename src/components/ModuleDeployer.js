import ModuleRow from "./ModuleRow";

const ModuleDeployer = ({ onClickDeploy, moduleConfig }) => {
    return (
        <div>
            <table>
                <tr>
                <th>Module</th><th></th>
                </tr>

                { moduleConfig.map(module => (
                    <ModuleRow name={ module.name} key={module.name}/>
                ))}


              
            </table>
            <button onClick={ onClickDeploy }>Deployer</button>
        </div>
    );
}

export default ModuleDeployer;
