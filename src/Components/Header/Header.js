import ButtonGroup from "./ButtonGroup";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {

    const [selected, setSelected] = useState("/");

    let menus = ['/','/projects','/timeline','/about']


    return (
        <>
            <div style={{width: '500px'}}>
                <span className="header-header" onClick={()=>{setSelected("/")}}>
                    <Link to={"/"} style={ { textDecoration: 'none' } }>
                        Paul Han
                    </Link>
                </span>
            </div>
            <div className='spacer'></div>
            <ButtonGroup
                selected={selected}
                setSelected={setSelected}
                menus={menus}
            />
        </> 
    )
}

export default Header;