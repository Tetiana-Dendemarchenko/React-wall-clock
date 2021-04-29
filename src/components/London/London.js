import React from "react";
import {Circle} from "../../ui";
import {Mark, StyledClock} from "../StyledClock/StyledClock";
import Hands from '../../Hands';
import useClock from "../../useClock";

const marks = Array ( 12 ).fill ();

const Clock = ({ className }) => {
    const time = useClock ( 'london' );

    return (
        <StyledClock>
            <Circle size={300} className={className}>
                {marks.map ( (_, i) => (
                    <Mark key={i} size={300} rotation={i * 30 + "deg"}>
                        {i === 0 ? 12 : i}
                    </Mark>
                ) )}
                <Hands time={time} borderWidth={0}/>
            </Circle>
            <h4 className='city-name4'>London</h4>
        </StyledClock>
    );
};

export default Clock;
