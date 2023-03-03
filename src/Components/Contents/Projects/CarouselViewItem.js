

const CarouselViewitem = (props) => {


    return (
        <div>
            {props.name + (props.active ? " active": "")}
        </div>
    )
}
export default CarouselViewitem;