import "./Campo.css";

const Campo= (props) => {

    // const [valor, actualizarValor] = useState("");

    //Se define un valor predeterminado si no se le asigna uno desde donde se llama
    const { type = "text" } = props;

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value);
    }

    const placeholderModificado = `${props.placeholder}...`;

    //value, permite manejar cómo se muestran los valores de nuestros elementos de manera dinámica.
    //onChange, es un evento HTML que genera una acción cuando el elemento presenta un cambio, como: cambia el texto (el tipo de cambio depende de la manera en que puede cambiar el elemento).
    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
            />
        </div>
    );
}

export default Campo;