
import React from 'react';
import 'whatwg-fetch';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';
import querystring from 'querystring';
import homePanelsArr from './homePanelsArr'


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeJumbo />
                <HomeMessage />
                <HomeBreakBar elemClass="col-xs-12" />
                <HomeContent /*arr={homePanelsArr}*/ />
            </div>
        )
    }
}

class HomeJumbo extends React.Component {
    render() {
        return(
            <div className="jumbotron" id="jumbotron">
                <div className="container jumbo-div">

                </div>
            </div>
        )
    }
}

class HomeMessage extends React.Component {
    render() {
        return(
            <div className="col-xs-12">
                <h2 className="">Welcome to our clinic</h2>
                <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate
                </p>
            </div>
        )
    }
}

class HomeBreakBar extends React.Component {
    render() {
        return(<div className={this.props.elemClass}><hr/></div>)
    }
}

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeArr:[],
            panelClass: "col-xs-12 col-sm-6 col-md-4 home-section"
            };

        this.homeSectionWidth = this.homeSectionWidth.bind(this);

    }

    componentDidMount(){
        this.loadData();
        let mql = window.matchMedia("screen and (min-width: 480px) and (orientation: landscape)");
        this.homeSectionWidth(mql);
        mql.addListener(this.homeSectionWidth);
    }
    loadData() {
        // fetch('/api/homeData').then(response => {
        //     if(response.ok){
        //         response.json().then(data =>{
        //             console.log("total count of records:", data._metadata.total_count);
        //             console.log(data.records[0]._id);
        //             this.setState({homeArr: data.records});
        //         });
        //     }else{
        //         response.json().then(error =>{
        //             alert("Failed to fetch home content:" + error.message);
        //         });
        //     }
        // }).catch(err =>{
        //     alert("Error in fetching data from server:", err);
        // });
        this.setState({homeArr: homePanelsArr});
    }

    homeSectionWidth(mql){
        if (mql.matches){ // if media query matches
            this.setState ({
                panelClass: 'col-xs-6 col-sm-6 col-md-4 home-section'
            });
        }
        else{
            this.setState ({
                panelClass: "col-xs-12 col-sm-6 col-md-4 home-section"
            });
        }
    }

    render() {
        const homePanels = this.state.homeArr.map(item =><HomePanel key={item.title} title={item.title} image={item.image}
                                                                    text={item.text} panelList={item.listText}
                                                                    panelClass={this.state.panelClass} breakClass={item.breakClass}
                                                                    arrayIndex={item.arrayIndex} urlParam={item.urlParam}/>);
        return <div>{homePanels}</div>
    }
}

class HomePanel extends React.Component {

    render() {
        const bottomUlStyle = {
            marginTop: 25,
            padding: 0,

            color: "white",
            listStyleType: "none",
            fontWeight: "bold"

        };
        const bottomLiStyle ={
            border: "none",
            backgroundColor: "black",
            textAlign: "center",
            padding: 0
        };

        const panelList = this.props.panelList.map(item =><HomePanelList key={item.id} text={item.text} />);
        return(
            <div>
                <div className={this.props.panelClass}>
                    <h3 className="home-section-title">{this.props.title}</h3>
                    <img className="home-section-img img-responsive" src={this.props.image} alt="calming image"/>
                    <p className="">{this.props.text}</p>
                    <ul>{panelList}</ul>
                    <div className="col-xs-12" style={bottomUlStyle}>
                        <Link to={{pathname: "/subjects/"+this.props.urlParam, search:'?arrayIndex=' + this.props.arrayIndex, state: {modal: true}}} className="col-xs-3" style={bottomLiStyle}>more...</Link>
                        <button className="col-xs-4 col-xs-offset-1" style={bottomLiStyle}>appointments</button>
                        <button className="col-xs-3 col-xs-offset-1"  style={bottomLiStyle}>contact</button>
                    </div>
                </div>
                <HomeBreakBar elemClass={this.props.breakClass}/>
            </div>

        )
    }
}

class HomePanelList extends React.Component {
    render() {
        return <li>{this.props.text}</li>
    }
}



