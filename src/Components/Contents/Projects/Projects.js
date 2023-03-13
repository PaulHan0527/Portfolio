import ToggleButton from '@mui/material/ToggleButton';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useState } from "react";
import GridView from "./GridView";
import CarouselView from './CarouselView';
import { Fade } from '@mui/material';


const Projects = (props) => {

    const [gridView, setGridView] = useState(true);

    return (
        <div className="projects-container">
            <Fade in={true}  style={{ transformOrigin: '0 0 0' }} 
        timeout={700}>
            <div className="projects-header" align="right">
                    <ToggleButton 
                        sx={ { backgroundColor: "white", 
                               borderRadius:"10px", 
                               marginRight: "10px",
                               marginTop: "20px",
                               opacity: 0.7,
                               "&.Mui-selected": {
                                    backgroundColor: "white",
                                    opacity: 1,
                                    boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
                               },
                               "&:hover": {
                                    backgroundColor: "white",
                                    opacity: 1,
                                    transition: "0.5s ease"
                               },
                               "&.Mui-selected:hover": {
                                    backgroundColor: "white",
                                    opacity: 1,
                               }
                            } }
                        value='grid' 
                        selected={gridView} 
                        onClick={() => {setGridView(true)}}>
                        <ViewModuleIcon/>
                    </ToggleButton>
                    <ToggleButton 
                        sx={ { backgroundColor: "white", 
                                borderRadius:"10px", 
                                marginRight: "30px",
                                marginTop: "20px",
                                opacity: 0.7,
                                "&.Mui-selected": {
                                    backgroundColor: "white",
                                    opacity: 1,
                                    boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
                                },
                                "&:hover": {
                                    backgroundColor: "white",
                                    opacity: 1,
                                    transition: "0.5s ease"
                                },
                                "&.Mui-selected:hover": {
                                    backgroundColor: "white",
                                    opacity: 1,
                                }
                            } }
                        value='carousel' 
                        selected={!gridView} 
                        onClick={() => {setGridView(false)}}>
                        <ViewCarouselIcon/>
                    </ToggleButton>
            </div>
            </Fade>
            {
                gridView 
                ?
                <GridView/>
                :
                <CarouselView/>
            }
        </div>
    )
}
export default Projects;