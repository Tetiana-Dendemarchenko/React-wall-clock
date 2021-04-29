import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Kyiv from "./components/Kyiv/Kyiv";
import Beijing from "./components/Beijing/Beijing";
import Paris from "./components/Paris/Paris";
import Tokyo from "./components/Tokyo/Tokyo";
import London from "./components/London/London";
import NewYork from "./components/NewYork/NewYork";

import Buttons from "./components/Buttons/Buttons";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <h3 className='pageTitle'>World Wall Clock - Homework 9</h3>
            <div className="App">
                <BrowserRouter>
                    <Buttons />
                    <div className='clock-box'>
                        <Route path='/kyiv' component={Kyiv}/>
                        <Route path='/beijing' component={Beijing}/>
                        <Route path='/paris' component={Paris}/>
                        <Route path='/tokyo' component={Tokyo}/>
                        <Route path='/london' component={London}/>
                        <Route path='/newYork' component={NewYork}/>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);