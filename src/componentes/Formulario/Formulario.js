import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton.js";
import { useState } from "react";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;
    
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        }
        console.log("Se envian los datos: ");
        console.log(datosAEnviar);
        registrarColaborador(datosAEnviar);
        
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();
        //En nuevas versiones de JS, si no se escribe "nombreVariable: valorVariable" y solo "valorVariable" se entiende que el nombre y el valor so iguales.
        crearEquipo({titulo, colorPrimario: color});
    }

    /* 
    onSubmit - evento que proporciona una acción (utilizando un función) determinada a la hora de enviar información. 

    Existen muchos más eventos de HTML que modifican el funcionamiento base de nuestros componentes de HTML.
    */

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para agregar un nuevo colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresar Nombre" required={true} valor={nombre} actualizarValor={actualizarNombre}></Campo>
                <Campo titulo="Puesto" placeholder="Ingresar Puesto" required valor={puesto} actualizarValor={actualizarPuesto}></Campo>
                {/*  "required={true}" = " required" */}
                <Campo titulo="Foto" placeholder="Ingresar Foto" required valor={foto} actualizarValor={actualizarFoto}></Campo>
                <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos}></ListaOpciones>
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para agregar un nuevo equipo.</h2>
                <Campo titulo="Titulo" placeholder="Ingresar Titulo" required={true} valor={titulo} actualizarValor={actualizarTitulo}></Campo>
                <Campo titulo="Color" placeholder="Ingresar Color en Hex" required valor={color} actualizarValor={actualizarColor}
                type="color"
                ></Campo>
                <Boton>
                    Registrar equipo
                </Boton>
            </form>
        </section>
    );
}

export default Formulario;