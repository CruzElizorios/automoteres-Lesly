import data from "../data/products-car.json";

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve(data);
        }, 500)
    })
}

// export const pedirCardPorID = (id) => {
//   return new Promise((resolve,reject) =>{
//     const item = data.find( (e) => e.id === id)

//   })
//}
