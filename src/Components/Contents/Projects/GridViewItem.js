import Card from '@mui/material/Card';
import { Grow } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import "../contents.css"

const GridViewItem = (props) => {

    return (
        <Grow in={true}  style={{ transformOrigin: '0 0 0' }} 
        timeout={props.growTime}
        className='projects-gridview-item'>
            <Card>
                <CardContent>
                    {props.name}
                </CardContent>
            </Card>
        </Grow>
    )
}

export default GridViewItem;