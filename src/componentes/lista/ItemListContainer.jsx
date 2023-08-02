import { useState, useEffect } from "react";
import { Card } from "../card/Card";
import { pedirDatos } from "../../service/pedirDatos";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
        })
    }, [])
    


    return (
        <section>
            <h1 className="titulo">Vehiculos</h1>
            <div className="contenedor-cards">
                {
                    productos.length > 0 &&
                    productos.map((producto) => {
                        return (
                            <Card key={producto.id} product={producto} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ItemListContainer