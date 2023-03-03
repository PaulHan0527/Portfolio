import { useEffect, useState } from "react";
import CarouselViewitem from "./CarouselViewItem";
import projectsInfo from "./ProjectObjects";


const CarouselView = (props) => {

    const [current, setCurrent] = useState(0);
    const [previewSet, setPreviewSet] = useState(projectsInfo.slice(0,3))

    const goNext = () => {
        if(current < projectsInfo.length-1) {
            setCurrent(current+1);
        }
    }

    const goPrev = () => {
        if(current > 0) {
            setCurrent(current-1);
        }
    }

    useEffect(() => {
        if(current === 0) {
            setPreviewSet(projectsInfo.slice(0,3));
        }
        else if(current === 1) {
            setPreviewSet(projectsInfo.slice(0, current+3));
        }
        else if(current === projectsInfo.length - 1)  {
            setPreviewSet(projectsInfo.slice(projectsInfo.length-3, projectsInfo.length));
        }
        else if(current === projectsInfo.length - 2) {
            setPreviewSet(projectsInfo.slice(current-2, current+2));
        }
        else {
            setPreviewSet(projectsInfo.slice(current-2, current+3));
        }
    }, [current])


    return (
        <div className="projects-carouselview-container">
            <div onClick={goPrev}>Prev</div>
            {/* Change classname on condition : current === 0 
                and current === projectsInfo.length-1 */}
            {
                previewSet.map((element, i) => {
                    return <CarouselViewitem
                        name={element.name}
                        key={i}
                        active={current === element.index}
                        // really want to delete this index, figure it out
                    />
                })
            }
            <div onClick={goNext}>Next</div>
        </div>
    )
}
export default CarouselView;