import {createContext } from 'react';


 const ShowContext = createContext();

export default ShowContext;


// export default function UserProvider(props) {
//     const [state, setState] = useState(false);

//     return (
//         <ShowChildren.Provider value={{state, setState}}>
//             {props.children}
//         </ShowChildren.Provider>
//     )
// }