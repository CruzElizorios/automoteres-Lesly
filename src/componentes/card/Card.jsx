import "./Card.css"

export const Card = ({product}) =>{
    return (
    <div className="card">
        <img className="card-img" src={product.image} alt={product.model} />
        <h3 className="card-titulo" >{product.make} {product.model} </h3>
        <h4 className="card-price" >$ {product.price}</h4>
        <span className="card-subtitulo">Año: {product.year} Kms: {product.mileage}</span>
        <spam className="card-subtitulo">Transmisión: {product.transmission}</spam>
        <span className="card-subtitulo" style={{paddingBottom: 1 + 'rem'}} > Tipo de Combustible: {product.fuel_type}</span>
        <button>ver más</button>
    </div>
    )
}