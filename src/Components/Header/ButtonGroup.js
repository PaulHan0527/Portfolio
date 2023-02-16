import { useState } from "react";
import ButtonLink from "./ButtonLink";

const ButtonGroup = (props) => {
    const [selected, setSelected] = useState("/");

    let menus = ['/','/projects','/timeline','/about']
    return (
        <div className='menu-button-group'>
            <ButtonLink
              name="Home"
              link="/"
              selected={selected === menus[0]}
              setSelected={setSelected}
            />
            <ButtonLink
              name="Projects"
              link="/projects"
              selected={selected === menus[1]}
              setSelected={setSelected}
            />
            <ButtonLink
              name="Timeline"
              link="/timeline"
              selected={selected === menus[2]}
              setSelected={setSelected}
            />
            <ButtonLink
              name="About"
              link="/about"
              selected={selected === menus[3]}
              setSelected={setSelected}
            />
          </div>
    )
}
export default ButtonGroup;