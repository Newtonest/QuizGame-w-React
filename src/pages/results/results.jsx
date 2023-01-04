import { useMyContext } from "../../provider";
export function Results(){
    const [state, setState] = useMyContext();
    return ( <p>{state + '%'}</p> );
}