import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../contents.css"

const GridViewItem = (props) => {

    return (
        <Card className='projects-gridview-item'>
            <CardContent>
                {props.name}
            </CardContent>
        </Card>
    )
}

export default GridViewItem;