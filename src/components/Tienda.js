import React from 'react';
import Productos from "./Productos";

const Tienda = ({productos, AgregarProductoAlCarrito}) => {/*  <-- Así extraemos los productos*/
    return ( <div>
        <h1>Tienda</h1>
        <Productos
            productos={productos}
            AgregarProductoAlCarrito={AgregarProductoAlCarrito}   
        /> {/*Lo enviamos al componente Productos*/}
    </div> 
);
}

export default Tienda;