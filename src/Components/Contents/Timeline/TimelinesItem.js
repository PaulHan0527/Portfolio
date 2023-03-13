import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent  from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useState } from 'react';

const TimelinesItem = (props) => {
    
    const [itemHovered, setItemHovered] = useState(false);

    return (
        <TimelineItem onMouseEnter={() => {setItemHovered(true)}}
                      onMouseLeave={() => {setItemHovered(false)}}>
            <TimelineOppositeContent>
                {itemHovered 
                ? <div className='timeline-item-container' onClick={() => console.log(typeof(props.item.year))}>
                    hovered
                  </div>
                : <div className='timeline-item-container'>
                    {props.item.year}
                </div>}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
        </TimelineItem>
    )
}
export default TimelinesItem;