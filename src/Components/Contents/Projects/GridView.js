import "../contents.css"
import GridViewItem from "./GridViewItem";
import projectsInfo from "./ProjectObjects";


const GridView = (props) => {
    
    return (
        <div className="projects-gridview-container">
            {projectsInfo.map((element, i) => {
                return (
                    <GridViewItem
                        key={i}
                        name={element.name}
                        growTime={(200 * i) + 200}
                    />
                )
            })}
        </div>
    )
}

export default GridView;