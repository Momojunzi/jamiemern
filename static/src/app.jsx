'use strict';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import BioSection from './bio.jsx';
import Modal from './Modal.jsx';
import ModalSwitch from './ModalSwitch.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const RoutedApp = () =>(
    <Router>
        <div>
            <NavBar/>
            <Redirect from="/" to="/home" />
            <Route exact path="/" component={Home}/>
            <Route path ="/home" component={Home} />
            <Route path="/bio" component={BioSection} />
            <Route path="/subjects/:id" component={Modal}/>
        </div>
    </Router>


);
    

ReactDOM.render(
    <RoutedApp />, document.getElementById('app'));

if(module.hot) {
    module.hot.accept();
}