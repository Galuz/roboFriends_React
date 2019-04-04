//componente sin funcionalidad. 

import React from 'react';

// const Hello = (props) => { //props = al parametro que se manda desde index. 
//     return(
//         <div>
//             <h1>Hola {props.saludos}</h1>
//             <h2>Hola {props.otracosa}</h2>
//         </div>
//     );
// }

//otra forma de hacerlo. 
const Hello = ({saludos, otracosa}) => {
    return(
        <div>
            <h1>Hola {saludos}</h1>
            <h2>Hola {otracosa}</h2>
        </div>
    );
}

export default Hello;
