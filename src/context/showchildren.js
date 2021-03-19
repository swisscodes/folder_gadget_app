import {createContext, useState} from 'react';


export const ShowChildren =  createContext();


export default function UserProvider(props) {
    const [state, setState] = useState(false);

    return (
        <ShowChildren.Provider value={{state, setState}}>
            {props.children}
        </ShowChildren.Provider>
    )
}