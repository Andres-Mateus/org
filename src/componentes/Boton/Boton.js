import "./Boton.css"

const Boton = (props) => {

    return (
        <button className="boton">{props.children}</button>
        /* "children" refiere a los objetos dentro de la etiqueta que invoca este componente */
    );
}

export default Boton;