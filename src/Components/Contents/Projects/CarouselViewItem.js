

const CarouselViewitem = (props) => {


    return (
        <div className={"projects-carouselview-item"+(props.active ? " active" : "")}>
            {props.name + (props.active ? " active": "")}
        </div>
    )
}
export default CarouselViewitem;