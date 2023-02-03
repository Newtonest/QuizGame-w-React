import { useMyContext } from "../../provider"
export function Results () {
    const [state, useState] = useMyContext();
    return ( 
        <div>
            {state}
        </div>
    )
}