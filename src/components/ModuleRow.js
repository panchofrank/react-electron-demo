function ModuleRow(props) {
    return (
        <tr>
        <td>{props.name}</td><td><input type="checkbox"></input></td>
        </tr>
    );
}

export default ModuleRow;