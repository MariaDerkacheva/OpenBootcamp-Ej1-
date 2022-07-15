import React, { Component } from 'react'
import ComponenteB from './B';

// ------------------  creo el objeto ------------------ //
 class ComponenteA extends Component {
  constructor (props){
    super(props);
        this.nombre =props.nombre
        this.apellido =props.apellido
        this.email =props.email
        this.conectado =props.conectado
    
  }

  render() {
    return (
      <div>
        <ComponenteB // -- llamo al componenteB y le paso las props ------- //
            nombre= { this.nombre}
            apellido= { this.apellido}
            email= { this.email}
            conectado= { this.conectado}
            ></ComponenteB>
      </div>
    )
  }
}
export default ComponenteA;


