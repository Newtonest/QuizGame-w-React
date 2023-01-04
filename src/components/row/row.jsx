import './row.css';
import { useMyContext } from '../../provider';
export function Row ({isCorrect, clicked, content}) {
  

    return ( 
        <div 
        className={clicked? isCorrect? 'container-green'  : 'container-red' :'container'}>
        {content}
        </div>
    )

   }
