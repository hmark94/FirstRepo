import { useState } from "react";

function StateComponent() {
    //Kezdő érték adása a State-nek

    const [state, setState] = useState('Kezdo ertek');

    //console.log(state, setState);
        return (
            <div>
                Hello State: { state }
            </div>
        )
    }

export default StateComponent;