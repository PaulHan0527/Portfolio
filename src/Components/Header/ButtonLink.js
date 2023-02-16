import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const ButtonLink = (props) => {


    return (
        <>
            <Button className='menu-button' 
                    sx={ { backgroundColor: 'transparent', 
                           "&:hover" : {backgroundColor: 'transparent'} } }
                    disableRipple
                    disabled={props.selected}
                    onClick={() => {props.setSelected(props.link)}}>
              <Link to={props.link} style={ { textDecoration: 'none' } }>
                <span className={'menu-button' + (props.selected ?'-selected':'')}>
                    {props.name}
                </span>
              </Link>
            </Button>
        </>
    )
}
export default ButtonLink;