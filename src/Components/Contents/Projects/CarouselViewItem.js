import { useEffect, useState } from "react";


const CarouselViewitem = (props) => {

    let classname = "";

    if (props.active) {
        classname = "carouselview-item active";
    }
    else if (props.prev) {
        classname = "carouselview-item prev";
    }
    else if (props.next) {
        classname = "carouselview-item next";
    }
    else {
        classname = "carouselview-item inactive"
    }



    return (
        <div className={classname} onClick={() => {
            if (props.prev) {
                props.clickPrev();
            }
            else if (props.next) {
                props.clickNext();
            }
        }}>
            {props.name}
        </div>
    )

}
export default CarouselViewitem;