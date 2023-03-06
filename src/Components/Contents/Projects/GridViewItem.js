import { Box, Fade } from '@mui/material';


const GridViewItem = (props) => {

    return (
        <Box className="projects-gridview-item" timeout={500}>
            <Fade in={true} timeout={500}>
                <img 
                    className='projects-gridview-item-img'
                    src="https://placekitten.com/640/360" 
                    alt=''/>
            </Fade>
        </Box>
    )
}

export default GridViewItem;