import React, { useState } from 'react';
import styled from "styled-components";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import Tienda from "./components/Tienda";
import Error404 from "./components/Error404";
import Carrito from "./components/Carrito";
import {NavLink,Switch,Route} from "react-router-dom";



const App = () => {
    const productos = [
        {id:1, nombre: "producto 1"},
        {id:2, nombre: "producto 2"},
        {id:3, nombre: "producto 3"},
        {id:4, nombre: "producto 4"}
    ];
    const [carrito, cambiarCarrito] = useState([
    /*  { id:1, cantidad:2, nombre: "Producto 1" },
        { id:2, cantidad:1, nombre: "Producto 2" },
        { id:3, cantidad:5, nombre: "Producto 3" } */
    ]); /*  <-- Iniciamos con el carrito limpio */
    
    const AgregarProductoAlCarrito = (idProductoAAgregar,nombreProductoAAgregar) =>{
        //SI el carrito está limpio agrega un elemento
        if (carrito.length ===0) {
            cambiarCarrito([{id:idProductoAAgregar, cantidad:1, nombre: nombreProductoAAgregar}]);
        } else {
            //Clonamos el carrito
            const nuevoCarrito = [...carrito];

            //Filter ejecuta la función del return por cada uno de los elementos
            //Si el producto está en el carrito "true" y si la longitud es mayor a "0" lo guardamos en la variable "yaEnCarrito"
            const yaEnCarrito = nuevoCarrito.filter( (productosEnCarrito) => {/*Identificamos a cada uno de los elementos como "productosEnCarrito"*/
                return productosEnCarrito.id === idProductoAAgregar;
            }).length > 0;  // almacena true o false en "yaEnCarrito"

            //console.log(yaEnCarrito);
            if (yaEnCarrito) {      // si ya está en carrito lo actualizamos
                nuevoCarrito.forEach( (productosEnCarrito, index)=> {
                    if (productosEnCarrito.id ===idProductoAAgregar) {
                        const cantidad = nuevoCarrito[index].cantidad;
                        nuevoCarrito[index] = {
                                                id:idProductoAAgregar, 
                                                nombre: nombreProductoAAgregar, 
                                                cantidad: cantidad +1 
                                            };
                    }
                });
            }else{ // si no está en el carrito, etonces agregamos el primer elemento = "1"
                nuevoCarrito.push({
                                    id:idProductoAAgregar, 
                                    nombre: nombreProductoAAgregar, 
                                    cantidad: 1
                });
            }
            //Actualizamos el carrito, ponemos lo de nuevo carrito en cambiar carrito para que quede en carrito
            cambiarCarrito(nuevoCarrito); 
        }
        

    };
    return ( 
        <DivContenedor>
                <NavMenu>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/tienda">Tienda</NavLink>
            </NavMenu>
        <main>
            <Switch>  {/*Aquí adentro ponemos todas las rutas de nustro switch*/}
                {/*Con Route definimos las rutas*/}
                <Route path="/" exact={true} component={Inicio}/> {/*exact={true} <-- funcionarán las pestañas*/}
                <Route path="/Blog" component={Blog}/>
                <Route path="/Tienda">
                    <Tienda 
                    productos={productos}
                    AgregarProductoAlCarrito={AgregarProductoAlCarrito}
                    />  {/*De esta manera los enviamos a Tienda*/}
                </Route>
                <Route component={Error404}/> {/*Cuando no encuentre alguna ruta de path muestra esta*/}
            </Switch>
        </main>
        <aside>
            <Carrito carrito={carrito}/>
        </aside>
        </DivContenedor>
);
}



/*  <-- Los nombres deben iniciar con Mayúsculas */
const DivContenedor = styled.div` 
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const NavMenu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;

    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }

    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
