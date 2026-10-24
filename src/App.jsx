// Permite Acceder al estado del coponete
import { useState } from "react";

import discos from "./data/discos";
import "./App.css";


const App = () => {
    // // código javascript
    // Pongo el estado y la función, también agrega el valor inicial de la página
    const [pagina, setPagina] = useState(0);
    const siguientedisco = () => {
        if (pagina + 1 < discos.length) {
            setPagina(
                pagina + 1
            );
        }
    };
    const anteriordisco = () => {
        if (pagina > 0) {
            setPagina(
                pagina - 1
            );
        }
    };
    return (
        // // código JSX (estrusctura que ve el usuario)
        <div className="contenedor">
            <h1>Música</h1>

            <div className="tarjeta-disco">
                <h2>{discos[pagina].titulo}</h2>

                {/* contador de la siguiente paguina */}

                <p className="pagina">Página {pagina + 1} de {discos.length}</p>

                <img key={pagina}
                    className="imagen-disco"
                    src={discos[pagina].imagen}
                    alt={discos[pagina].titulo}
                    width="300"
                />

                <p className="descripcion">{discos[pagina].descripcion}</p>

                <div className="botones">
                    <button
                        onClick={anteriordisco}
                        disabled={pagina === 0}
                    >
                        Anterior
                    </button>

                    <button
                        onClick={siguientedisco}
                        disabled={pagina + 1 === discos.length}

                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

// // la exportación de la función
export default App;