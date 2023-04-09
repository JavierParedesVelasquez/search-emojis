import { useState } from "react";

// Recuperar con desestructuracion los parametros que hemos enviado 
const Items = ({ title, emoji, darkMode }) => {
    // Crear estado para que aparezca el mensajito de que se ah copiado
    const [copy, setCopy] = useState(false);

    // Funcion handlecopy para al darle click se copie el emoji y se pueda pegar donde sea
    // Cada ves que se de click en el icono
    const handleCopy = () => {
        // Una ves entre al handleCopy va cambiar el estado a true
        setCopy(true);
        navigator.clipboard.writeText(emoji)//se le pasa en parametro lo que queremos que se copie
        // Lo que recibe es una funcion y el tiempo
        setTimeout(() => {
            // Llamamos al estado
            setCopy(false);//primer parametro
        }, 3000);//segundo parametro tiempo (3s)  
    }

    return (
        <article className={`card-emoji ${darkMode ? "dark-mode" : ""}`}>
            <p
                className="emoji-icon"
                onClick={handleCopy}
            >{emoji}</p>
            <h4>{title}</h4>
            {
                // Si copy es true me cargas la parte del parrafo
                copy && <p className="copied">Copied!</p>
            }
        </article>
    );
}

export default Items;