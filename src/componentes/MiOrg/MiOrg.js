import "./MiOrg.css";

const MiOrg = (props) => {

    //Estao - hooks
    //useState
    //useState(initialValue) - recibe un valor inicial, el cual devuelve un objeto que permite actualizar el estado de una variable.

    //const [nombreVariable, funcionQueActualiza] = useState(valorIncial)

    // const [mostrar, actulizarMostrar] = useState(true);

    // const manejarClick = () =>{
    //     console.log(mostrar);
    //     actulizarMostrar(!mostrar);
    // }

    return (<section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>);
}

export default MiOrg;