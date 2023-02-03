import './row.css';
import { useMyContext } from '../../provider';

export function Row ({isCorrect, clicked, content, isGreen}) {
    const [state,setState] = useMyContext();
    const handleUpdate = () => {
        if(isCorrect === true) {
            setState(state + 33)
        }
    }
    return ( 
        <div 
        className={clicked?  isCorrect? 'container-green' : 'container-red':'container'}
        onClick={handleUpdate}
        >
        {content}
        </div>
    )

   }
