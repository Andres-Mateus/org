import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método map -> arreglo.map( (equipo, index) => {
    // funcionalidad
    // return (<option></option>);
    //});
    

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value);
    }
    
    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                {/* Al primer option se le ponen esas propiedades para que solo sea como un placehoder de la lista */}
                <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
                {props.equipos.map( (equipo, index) => {
                    return (<option key={index} value={equipo}>{equipo}</option>);
                    /*React necesita llaves o key únicas por objeto para difenciar cada elemento */
                })}
            </select>
        </div>
    );
}

export default ListaOpciones;