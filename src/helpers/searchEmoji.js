// Necesitamos la logica de busqueda para nuestra funcion por eso vamos a importar
// "emojiList" arreglo de todos los emojis
import emojiList from './emojiList.json';


// Crear una funcion 
// Nos llegaria el value
export const searchEmoji = (value) => {
    // Crear una variable
    //aqui estariamos convirtiendo el valor que nos llega para hacer la busqueda a minuscula
    const lowerValue = value.toLowerCase();
    // Crear un arreglo vacio
    const response = [];
    emojiList.map(item => {
        // Estamos recorriendo el items, ahora vamos a preguntar:
        // Si este string "keywords" de cada objeto incluye este value
        if(item.keywords.includes(lowerValue)){
            // Me hagas un push a mi arreglo response
            // Entonces estamos agregando a este arreglo todos los que coincidan de la palabra con sus keywords
            response.push(item);
        }
    })
    //slice(): quiero que me cortes el array de 0 al 24 para que asi aparezcan solo 24 resultados
    // return response.slice(0, 24);

    // Si value es igual a vacio quiero que me devuelvas todo el arreglo, pero sino quiero que me devuelvas el response con el slice
    return value  === "" ? response : response.slice(0,24);
}