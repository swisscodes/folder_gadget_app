import React, {useContext} from 'react';
import {ShowChildren} from '../context/showchildren';

export default function Folder(props) {
    const {state, setState} = useContext(ShowChildren);
    const HandleClick = () => setState(!state);
    return (
        <div>
            <span onClick={HandleClick}><i className="blue folder icon"></i></span>
                {props.name}
            <div style={{ marginLeft: "17px" }}>
                {state ? props.children : null}
            </div>
        </div>

        
    );
}