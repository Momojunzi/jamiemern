import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import BioSection from './bio.jsx';
import Modal from './Modal.jsx';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
class ModalSwitch extends React.Component {
    constructor(props){
        super(props);
        this.previousLocation = this.props.location;

    }

    componentWillUpdate(nextProps) {
        const {location} = this.props;
        if(
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ){
            this.previousLocation = this.props.location
        }
    }

    render() {
        const location = this.props;
        const isModal = (
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );
        return(
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <Route path ="/home" component={Home} />
                    <Route path="/bio" component={BioSection} />
                </Switch>
                {isModal ? <Route path="/subjects/:id" component={Modal} /> : null}
            </div>
        )
    }
}

export default ModalSwitch;