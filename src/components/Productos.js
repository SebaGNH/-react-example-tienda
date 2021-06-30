import React from 'react';
import styled from "styled-components";

const Productos = ({productos,AgregarProductoAlCarrito}) => {  /*  <-- Lo recibimos de tienda */
    /*  //Lo trasladamos a la carpeta App para poder llamarlo desde todos los componentes
        //Desde App lo enviamos y lo reciben los componentes
        const productos = [
        {id:1, nombre: "producto 1"},
        {id:2, nombre: "producto 2"},
        {id:3, nombre: "producto 3"},
        {id:4, nombre: "producto 4"}
    ]; */
    return (<div>

        <h3>Productos</h3>
        <DivContenedorProductos>
            {productos.map( (producto,index) => {
                return(
                    <DivProducto key={producto.id}>
                        <p>{producto.nombre}</p>
                        <ButtonBoton  
                            onClick={()=> AgregarProductoAlCarrito(producto.id,producto.nombre)} >
                            Agregar al carrito
                        </ButtonBoton> {/*Así ejecutamos la función que está en APP*/}
                    </DivProducto>
                )                
            })}
        </DivContenedorProductos>

</div>);
}


const DivContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /*Es para tener dos columnas, estos es ccs grid*/
    gap: 20px;
    padding: 20px 0;
`;

const DivProducto =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;

    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

const ButtonBoton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;

    &:hover {
        background: #1c6ab9;
    }
`;

export default Productos;

