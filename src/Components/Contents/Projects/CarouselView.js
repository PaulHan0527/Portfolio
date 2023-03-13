import { useState, useEffect } from "react";
import CarouselViewitem from "./CarouselViewItem";
import projectsInfo from "./ProjectObjects";


const CarouselView = (props) => {

    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(projectsInfo.length - 1);
    const [next, setNext] = useState(1);

    const goToNum = (number) => {
        if(number === -1) {
            setCurrent(projectsInfo.length - 1);
            return;
        }
        if(number === projectsInfo.length) {
            setCurrent(0);
            return;
        }
        setCurrent(number);
        return;
    }

    const clickPrev = () => {
        goToNum(current-1);
    }
    const clickNext = () => {
        goToNum(current+1);
    }

    useEffect(() => {
        if(current === 0) {
            setPrev(projectsInfo.length - 1);
            setNext(current + 1);
            return;
        }

        if(current === projectsInfo.length - 1) {
            setPrev(current - 1);
            setNext(0);
            return;
        }

        setPrev(current - 1);
        setNext(current + 1);
        return;
    }, [current])
    

    return (
        <div className="projects-carouselview-container">
            <div className="carouselview-items">
                {
                    projectsInfo.map((element, i) => {
                        return (
                            <CarouselViewitem
                                element={element}
                                name={element.name}
                                key={i}
                                index={i}
                                active={i === current}
                                prev={i === prev}
                                next={i === next}
                                clickPrev={clickPrev}
                                clickNext={clickNext}
    
                                goToNum={goToNum}
                            />
                        )
                    })
                }


                {/* <div className="carouselview-item prev" onClick={() => {goToNum(current-1)}}>
                    {projectsInfo[prev].name}
                </div>
                <div className="carouselview-item active">
                    {projectsInfo[current].name}
                </div>
                <div className="carouselview-item next" onClick={() => {goToNum(current+1)}}>
                    {projectsInfo[next].name}
                </div> */}
            </div>
        </div>
    )
}
export default CarouselView;