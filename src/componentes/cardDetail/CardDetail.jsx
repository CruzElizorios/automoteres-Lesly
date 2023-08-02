
export const CardDetail = ({ prod }) => {
    return (
        <section>
            <div>
                <img src={prod.image} alt={prod.model} />
            </div>
            <div>
                <h3 className="card-titulo" >{prod.make} {prod.model} </h3>
                <h4 className="card-price" >$ {prod.price}</h4>
                <span className="card-subtitulo">Año: {prod.year} Kms: {prod.mileage}</span>
                <spam className="card-subtitulo">Transmisión: {prod.transmission}</spam>
                <span className="card-subtitulo" style={{ paddingBottom: 1 + 'rem' }} > Tipo de Combustible: {prod.fuel_type}</span>
            </div>
        </section>
    )
}
