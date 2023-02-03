import './row.css';
import { useMyContext } from '../../provider';

export function Row ({isCorrect, clicked, content, isGreen}) {
    const [state,setState] = useMyContext();
    
    return ( 
        <div 
        className={clicked?  isCorrect? 'container-green' : 'container-red':'container'}
        >
        {content}
        </div>
    )

   }
