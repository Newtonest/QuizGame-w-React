import { useMyContext } from "../../provider";
import './results.css'
export function Results () {
    const [state, setState] = useMyContext();
    return ( 
        <div className="results">
                <section className="results__results">
                   <p>TU PUNTUACION HA SIDO DE UN :<strong>{`${state}` + '%'}</strong></p>
                </section>
                <section className="results__msg">
                    <h1>
                        MUCHISIMAS GRACIAS POR JUGAR <br />
                        ESPERAMOS QUE TE HAYAS DIVERTIDO
                    </h1>
                </section>
                <section className="results_conocerme">
                    <ul>
                        <h1>Queres conocerme un poco mas?</h1>
                        <a href=""><li>Mi canal de youtube aqui</li></a>
                        <a href=""><li>Mi instagram aqui</li></a>
                        <a href=""><li>Github aqui</li></a>
                    </ul>
                    <div className="codigo-fuente">
                        <a href="https://github.com/Newtonest/QuizGame-w-React"> <p className="c">CODIGO FUENTE AQUI</p></a>
                    </div>
                   
                </section>
        </div>
    )
}