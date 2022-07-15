import React, { useState}  from "react";
import PropTypes from "prop-types";

function ComponenteB(props) {
// ----------------usamos el useState para cambiar el estado ---------------- //
//  [variavle q dar el valor ,da nuevo valor/estado] = useState(paso props conectado y comparo)
    const [estado, setCambioEstado] = useState(props.conectado === true ? "Contacto En Línea" : "Contacto No Disponible")


    //---- funciones que cambian el estado por botones ---- // 
    const conect = () => {
        //metodo para que actualice el state
        setCambioEstado("Contacto En Línea")
    }

    const desconect = () => {
        //metodo para que actualice el state
        setCambioEstado("Contacto No Disponible")
    }

    return (
        <div>
            {/* --------------------- se va imprimir en pantalla --------------------- */}

            <h3>Nombre: {props.nombre}</h3>
            <h3>Apellido: {props.apellido}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Estado de la conexion: {estado}</h3>
            <div>
             {/* ----------------- botones ejecutan las funciones ----------------- */}
                <button onClick={conect}>Conectado</button>
                <button onClick={desconect}>Desconectado</button>
            </div>
        </div>   
    )  
};

ComponenteB.propTypes ={
    nombre:PropTypes.string,
    apellido:PropTypes.string,
    email:PropTypes.string,
    conectado:PropTypes.bool
};

export default ComponenteB;

