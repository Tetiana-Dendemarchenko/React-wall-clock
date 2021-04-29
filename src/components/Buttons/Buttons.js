import './Buttons.css';
import NewYorkButton from "./AllCityButtons/NewYorkButton";
import TokyoButton from "./AllCityButtons/TokyoButton";
import LondonButton from "./AllCityButtons/LondonButton";
import KyivButton from "./AllCityButtons/KyivButton";
import BeijingButton from "./AllCityButtons/BeijingButton";
import ParisButton from "./AllCityButtons/ParisButton";
import {NavLink} from "react-router-dom";


const Buttons = () => {
    return (
        <div className='city-buttons'>
            <div><NavLink to='/kyiv'><KyivButton/></NavLink></div>
            <div><NavLink to='/newYork'><NewYorkButton/></NavLink></div>
            <div><NavLink to='/tokyo'><TokyoButton/></NavLink></div>
            <div><NavLink to='/london'><LondonButton/></NavLink></div>
            <div><NavLink to='/beijing'><BeijingButton/></NavLink></div>
            <div><NavLink to='/paris'><ParisButton/></NavLink></div>
        </div>
    )
}

export default Buttons