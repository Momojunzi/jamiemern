import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import querystring from 'querystring';
import 'whatwg-fetch';
import homePanelsArr from './homePanelsArr'

export default class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state ={modalData:[]}
    }
    componentDidMount(){
        this.loadData();
    }

    loadData(){
        let query = this.props.location.search.slice(1);
        let subjectQuery = querystring.parse(query);
        let subjectIndex = subjectQuery.arrayIndex;
        
        // fetch('/api/homeData').then(response =>{
        //     if(response.ok){
        //         response.json().then(data =>{
        //             this.setState({modalData: data.records[subjectIndex]});
        //             console.log(this.state.modalData);
        //         });
        //     }else{
        //         response.json().then(error =>{
        //             alert("Failed to fetch home content:" + error.message);
        //         });
        //     }
        // }).catch(err =>{
        //     alert("Error in fetching data from server:", err);
        // });

        this.setState({modalData: homePanelsArr[subjectIndex]})
    }

    render(){
        //let query = this.props.location.search.slice(1);
        //let subjectQuery = querystring.parse(query);
        return(
            <div>
            <h3>{this.state.modalData.title}</h3>
            <p>{this.state.modalData.modalText}</p>
            </div>
        )
    }
}

const ModalContent = (history) => {
    const back = (e) => {
        e.stopPropagation();
        history.goBack();
    };

    return(
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>
            <button type="button" onClick={back} />
        </div>
    )
};