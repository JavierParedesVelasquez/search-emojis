import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Result from './components/Result';

function App() {
  // A form.jsx se le quiere mandar un estado desde App.jsx
  // Creando estado
  // El estado de setValueEmoji se le tiene que pasar a Form
  // valueEmoji queremos buscar con este valor
  const [valueEmoji, setValueEmoji] = useState('fruit');//Como valor inicial

  // Manejar otro estado
  const [darkMode, setDarkMode] = useState(false);

  // Crear una funcion 
  // Cada vez que se llame a esta funcion va cambiar de estado
  const toggleDarkMode = () => {
    // Aqui le deberiamos de enviar el nuevo valor que queremos para nuestro darMode
    setDarkMode(current => !current);//aca le estamos diciendo que el valor actual que seria el false, quiero que lo cambies por la negacion(true), y funciona al contrario, si el valor actual es true lo cambia a false
  }


  return (
    <div className={`App ${darkMode ? "darkbg" : ""}`}>
      {/* Vamos a llamar a nuestro componente Header */}
      <Header />
      {/* Este estado a medida que se valla actualizandose deacuerdo al form, lo que va ir es cambiando el valor(valueEmoji). y ese valor lo vamos a mandar al componente que muestre los emojis  */}
      {/* Enviamos este set del estado y en el form lo recuperamos */}
      <Form
        setValueEmoji={setValueEmoji}
        toggleDarkMode={toggleDarkMode}//la queremos llamar nuestro form donde esta nuestro toggle
        darkMode={darkMode}//le enviamos a todos los componentes donde quieres que cambie de estilo
      />
      {/* Una vez tengamos el result vamos a enviarle el valueEmoji como parametro */}
      <Result
        valueEmoji={valueEmoji}
        darkMode={darkMode}
      />
      <Footer />
    </div>
  )
}

export default App;
