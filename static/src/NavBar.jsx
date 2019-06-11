import React from 'react';
import {Router, Link} from 'react-router-dom';

class NavButton extends React.Component {
    render(){
        return (<button onClick={this.props.buttonHandler} type="button" className="navbar-toggle collapsed" aria-expanded="false" id="menu-button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>)
    }
}

const NavTitle = function(props) {
    return <a className="navbar-brand" href="#" >Jamie Hampton DAOM LAc</a>
};

const CollapsibleNav = function(props){
    return(
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-right navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bio">About Dr Hampton</Link></li>
                <li><Link to="/">Link</Link></li>
                <li><Link to="/">Link</Link></li>
            </ul>
        </div>
    )
};

class NavbarCombined extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavButton buttonHandler={this.props.buttonHandler} />
                        <NavTitle />
                    </div>
                    <CollapsibleNav />
                </div>
            </nav>

        )
    }
}

class MobileNav extends React.Component {
    render(){
        let navMargin = this.props.navMargin;
        const mobileNavStyle = {
            marginLeft: navMargin + 'vw'
        };
        return(
            <div  className="mobile-nav-link-container" id="mobile-nav-link-container" style={mobileNavStyle} >
                <ul className="nav navbar-nav">
                    <li className="normal-link "><Link to="/">Home</Link></li>
                    <li className="normal-link "><Link to="/bio">About Dr Hampton</Link></li>
                    <li className="normal-link "><Link to="/">Link</Link></li>
                    <li className="normal-link "><Link to="/">Link</Link></li>
                </ul>
            </div>
        )
    }
}

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navDisplayed: false,
            navMoving: true,
            navMargin: -51
        };
        this.mobileNavHandler = this.mobileNavHandler.bind(this);
        this.displayMobileMenu = this.displayMobileMenu.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
    }

    displayMobileMenu(){
        let displayed = this.state.navDisplayed;
        let navMargin = this.state.navMargin;
        if(displayed == false){
            this.setState({
                navMargin: this.state.navMargin + 3
            });
            requestAnimationFrame(this.displayMobileMenu);
        }
        if(navMargin >= 0 ) {
            this.setState({
                navDisplayed: true
            });
        }
    }

    hideMobileMenu() {
        let displayed = this.state.navDisplayed;
        let navMargin = this.state.navMargin;
        if(displayed == true){
            this.setState({
                navMargin: this.state.navMargin - 3
            });
            requestAnimationFrame(this.hideMobileMenu);
        }
        if(navMargin <= -48){
            this.setState({
                navDisplayed: false
            });
        }
    }

    mobileNavHandler(e){
        let navDisplayed = this.state.navDisplayed;
        if(navDisplayed == false){
            requestAnimationFrame(this.displayMobileMenu);
        }else {
            requestAnimationFrame(this.hideMobileMenu);
        }
    }

    render() {
        return (
            <header >
                <NavbarCombined  buttonHandler={this.mobileNavHandler}/>
                <MobileNav navMargin={this.state.navMargin}/>
            </header>
        )
    }
}