import Timeline from '@mui/lab/Timeline';
import { Fade } from '@mui/material';
import TimelinesItem from './TimelinesItem';
import timelineInfo from './TimelineObjects';


const Timelines = (props) => {



    return (
        <div className="timeline-container">
            <Fade in={true}  style={{ transformOrigin: '0 0 0' }} timeout={800}>
            <Timeline position="left">
                {timelineInfo.map((element, i) => {
                    return (
                        <TimelinesItem
                            key={i}
                            item={element}
                        />
                    )
                })}
                
            </Timeline>
            </Fade>
        </div>
    )
}
export default Timelines;