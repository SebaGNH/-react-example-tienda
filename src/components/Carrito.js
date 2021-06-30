import React,{useState} from 'react'; /*  <-- useState ya que el carrito es un estado que va a cambiar */
import styled from "styled-components";

const Carrito = ({carrito}) => {
      //Lo migramos a la carpeta APP y borramos el contenido ya que era para maquetar
        //Eliminamos useState del import ya que no lo vamos a usar
/*         const [carrito, cambiarCarrito] = useState([
        { id:1, cantidad:2, nombre: "Sal 1" },
        { id:2, cantidad:1, nombre: "Producto 2" },
        { id:3, cantidad:5, nombre: "Producto 3" }
    ]); */
    return (<>

        <h3>Carrito de compras</h3>

        {carrito.length > 0?
            carrito.map( (producto) => {
                return(
                    <DivProducto key={producto.id}>
                        <PNombreProducto >
                            {producto.nombre}
                        </PNombreProducto>
                        Cantidad: {producto.cantidad}
                    </DivProducto>
                    
                )
        })
        :
            <p>Todavía no se han cargado productos al carrito</p>
        }
        

</>);
}
const DivProducto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ededf3;
    font-size: 14px;
`;

const PNombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;
export default Carrito;