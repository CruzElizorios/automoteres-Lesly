import { useState, useEffect } from "react";
import data from "../../data/products-car.json"
import { Card } from "../card/Card";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
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