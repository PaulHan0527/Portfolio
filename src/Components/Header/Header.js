import ButtonGroup from "./ButtonGroup";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {

    const [selected, setSelected] = useState("/");

    let menus = ['/','/projects','/timeline','/about']


    return (
        <>
            <div>
                <span className="header-header">
                    {/* <Link to={"/"} style={ { textDecoration: 'none' } }>
                        PlaceHolder
                    </Link> */}
                    PlaceHolder
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