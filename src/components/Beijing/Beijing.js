import React from "react";
import styled from "styled-components";
import useClock from "../../useClock";
import {Circle} from "../../ui";
import Hands from '../../Hands';
import './Beijing.css';

const Mark = styled.div`
  position: absolute;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0) rotate(${props => props.rotation || "0deg"});
  transform-origin: center 140px;
`;

const marks = Array(12).fill();

const Clock = ({className, size}) => {
    const time = useClock('beijing');

    return (
        <div>
            <Circle size={300} className={className}>
                {marks.map((_, i) => (
                    <Mark key={i} size={300} rotation={i * 30 + "deg"}>
                        {i === 0 ? 12 : i}
                    </Mark>
                ))}
                <Hands time={time} borderWidth={0}/>
            </Circle>
            <h4 className='city-name2'>Beijing</h4>
        </div>
    );
};

const StyledClock = styled(Clock)`
  position: relative;
  margin-left: 85px;
  margin-top: 85px;
  background-color: rgba(242, 0, 0, 0.8);
  border-radius: 50%;
  border: 4px solid red;
  box-shadow: -8px 8px 15px rgba(225, 0, 0, 0.5),
  20px 20px 20px rgba(0, 0, 0, 0.2),
    inset -8px -8px 15px rgba(225, 0, 0, 0.5),
  inset 20px 20px 20px rgba(0, 0, 0, 0.2);
`;

export default StyledClock;
