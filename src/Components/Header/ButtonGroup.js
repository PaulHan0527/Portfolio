import ButtonLink from "./ButtonLink";

const ButtonGroup = (props) => {

    return (
        <div className='menu-button-group'>
            <ButtonLink
              name="Home"
              link="/"
              selected={props.selected === props.menus[0]}
              setSelected={props.setSelected}
            />
            <ButtonLink
              name="Projects"
              link="/projects"
              selected={props.selected === props.menus[1]}
              setSelected={props.setSelected}
            />
            <ButtonLink
              name="Timeline"
              link="/timeline"
              selected={props.selected === props.menus[2]}
              setSelected={props.setSelected}
            />
            <ButtonLink
              name="About"
              link="/about"
              selected={props.selected === props.menus[3]}
              setSelected={props.setSelected}
            />
          </div>
    )
}
export default ButtonGroup;