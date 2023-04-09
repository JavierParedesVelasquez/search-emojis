// sfc

import { useState } from "react";

/*
    Cada ves que se va cambiando el input se va cambiar el estado  que tenemos aqui, 
    el estado local seria del Form, va ir cambiando cada ves que se type en el input
    y una ves que se de enter, entonces enter va llamar al onSubmit del form, lo cual es la funcion handleSearch la cual va ser que setee el valor, que nos envian desde nuestro App component
*/
// Se recupera setValueEmoji con desestructuracion "{}"
const Form = ({ setValueEmoji, toggleDarkMode, darkMode }) => {
    // Como recuperar el valor de nuestro input 
    // Creando un estado
    const [value, setValue] = useState('');//Valor inicial va ser vacio

    // Crear una validacion
    const [error, setError] = useState(false);
    // Cons + numero de la funcion 
    const handleSearch = e => {
        e.preventDefault();//para evitar que nuestra accion de submit recarge
        if (value === '') {//si value es igual a vacio
            setError(true);//quiero que me setees el valor a true, quiere decir que hay un error
            setTimeout(() => setError(false), 2000);
            return;//para que ya no ejecute el codigo que esta debajo
        }
        setValueEmoji(value);//Vamos a setear nuestro valor, pasarle el value como parametro
        console.log(value);
    }
    const allEmojis = () => {
        setValueEmoji('');//setear por vacio
    }

    return (
        // Vamos a usar este estado para añadir o no una clase, para cargar una clase adicional
        <section className={`form ${darkMode ? "dark-mode" : ""}`}>
            {/* Anadiendo formulario */}
            {/* Al momento de dar enter entonces el formulario va llamar a la funcion que es onSubmit */}
            {/* Esta funcion va llamar a otra funcion la cual es handleSearch */}
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="some emoji word..."
                    // Cada ves que se cambie el input lo que va ser el onChange es
                    // Del onChange se va recuperar un evento lo cual va ser el parametro
                    // Llamamos a la funcion que es setValue, el cual va recibir como parametro el evento del cual vamos a sacar el valor
                    // Una vez tengamos todo eso estamos seteando el valor del input que se ah ingresado en nuestro estado(value)
                    onChange={e => setValue(e.target.value)}
                />
                <button
                    type="button"
                    onClick={allEmojis}//trae la funcion emojis
                >All</button>
                <div className="toggle-box" onClick={toggleDarkMode}>
                    <div className="toggle-circle">

                    </div>
                </div>
            </form>
            {
                // Si error es true nos va ejecutar el texto
                error && <p className="error">Input is empy</p>
            }
        </section>
    );
}

export default Form;