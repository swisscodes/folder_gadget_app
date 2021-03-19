import React, {useContext} from 'react';
import ShowContext from '../context/show-context';


export default function Folder(props) {

    // const {state, setState} = useContext(ShowChildren);
    // const HandleClick = (event) => {
    //     console.log(event.target.id, 'eventttt')
    //     //setState(!state)
    // }
    //console.log(props, 'console----')
    const context = useContext(ShowContext)
    return (
        <div>
            <span onClick={context.clicked}> <i id={props.name} className="blue folder icon"></i> </span>
                {props.name}
            <div style={{ marginLeft: "17px" }}>
                {((context.show && props.name === context.folderName) && props.children)}
            </div>
        </div>

        
    );
}