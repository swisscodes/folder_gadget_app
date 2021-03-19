import React, {useContext} from 'react';
import {ShowChildren} from '../context/showchildren';

export default function Folder(props) {
    const {state, setState} = useContext(ShowChildren);
    const HandleClick = () => setState(!state);
    const direction = state ? "down" : "right";
    return (
        <div>
            <span onClick={HandleClick}>
            <i className="blue folder icon"></i>
            <i className={`caret ${direction} icon`}></i>
            </span>
                {props.name}
            <div style={{ marginLeft: "17px" }}>
                {state ? props.children : null}
            </div>
        </div>
        
    );
}