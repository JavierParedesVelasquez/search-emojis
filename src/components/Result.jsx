// Importamos la funcion
import { searchEmoji } from '../helpers/searchEmoji';
import Items from './Items';

// Recuperamos el valor de valueEmoji usando desestructuracion
const Result = ({ valueEmoji, darkMode }) => {
    // Crear variable , incluimos la funcion, le pasamos como parametro el valueEmoji
    // Este array deberia contener todos los objetos de lo cual coincide
    const arrayEmojis = searchEmoji(valueEmoji);
    console.log(arrayEmojis);

    // Una ves tenemos el valor "valueEmoji" vamos a crear una funcion
    return (
        <section className="container results">
            {/* Iterar*/}
            {
                // verificar que el array no este vacio
                arrayEmojis && arrayEmojis.map(item => (
                    <Items
                        // Para una iteracion lo primero que se envia es un key
                        key={item.title}
                        title={item.title}
                        emoji={item.symbol}
                        darkMode={darkMode}
                    />
                ))
            }
        </section>
    );
}

export default Result;