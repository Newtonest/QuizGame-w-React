import  Provider  from '../../provider';
import { Results } from '../results/results';
import { Row } from '../../components/row/row';
import './acces.css'
export function Acces() {
    return (
        <Provider>
          <Results/>
        </Provider>
    )
}