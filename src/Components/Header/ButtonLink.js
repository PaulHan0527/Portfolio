import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../Contents/contents.scss';


const ButtonLink = (props) => {


    return (
        <>
            <Button className="menu-button"
                    disableRipple
                    disabled={props.selected}
                    onClick={() => {props.setSelected(props.link)}}>
              <Link to={props.link} style={ { textDecoration: 'none' } }>
                <span className={'menu-button' + (props.selected ?'-selected':'')} data-hover={props.name}>
                    {props.name}
                </span>
              </Link>
            </Button>
        </>
    )
}
export default ButtonLink;