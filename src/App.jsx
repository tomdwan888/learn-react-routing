import React from 'react';
import SimpleSlider from './modules/simple-slider/simple-slider.jsx';
import Header from './modules/header/header.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = (props) => {
    return (
        <Router>
            <Header />
            <Route path="/slider">
                <SimpleSlider state={props.state.slider} />
            </Route>
        </Router>     
    );
}

export default App;