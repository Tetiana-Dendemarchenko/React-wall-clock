import styled from 'styled-components';

export const Mark = styled.div`
  position: absolute;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0) rotate(${(props) => props.rotation || '0deg'});
  transform-origin: center 140px;
`;

export const StyledClock = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin: 90px 90px;
  text-align: center;
  font-size: 20px;
  background-color: rgba(242, 0, 0, 0.8);
  border-radius: 50%;
  border: 4px solid red;
  box-shadow: -8px 8px 15px rgba(225, 0, 0, 0.5),
  20px 20px 20px rgba(0, 0, 0, 0.2),
    inset -8px -8px 15px rgba(225, 0, 0, 0.5),
  inset 20px 20px 20px rgba(0, 0, 0, 0.2);
`;
