import ToggleButton from '@mui/material/ToggleButton';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useState } from "react";
import "../contents.css"
import GridView from "./GridView";
import CarouselView from './CarouselView';


const Projects = (props) => {

    const [gridView, setGridView] = useState(true);

    return (
        <div className="projects-container">
            <div className="projects-header">
                    <ToggleButton 
                        sx={ { backgroundColor: "white", 
                               borderRadius:"10px", 
                               marginRight: "10px",
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
                                marginRight: "10px",
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
                                }
                            } }
                        value='carousel' 
                        selected={!gridView} 
                        onClick={() => {setGridView(false)}}>
                        <ViewCarouselIcon/>
                    </ToggleButton>
            </div>
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