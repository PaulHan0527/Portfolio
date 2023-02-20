import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const Timelines = (props) => {



    return (
        <div className="timeline-container">
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className='timeline-date'>
                            1996
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className='timeline-date'>
                            1996
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className='timeline-date'>
                            1996
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className='timeline-date'>
                            1996
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                </TimelineItem>
            </Timeline>
        </div>
    )
}
export default Timelines;