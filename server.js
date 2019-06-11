/**
 * Created by Mark on 3/19/2017.
 */
'use strict';

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
app.use(express.static('static'));



/*const homePanelsArr = [{
    title: "Dry Needling",
    image: "images/acu-image.jpg",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    breakClass: "col-xs-12 home-hr-1",
    listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
},
    {
        title: "Acupuncture Services",
        image: "images/acupuncture.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-2",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        title: "Herbal Medicine",
        image: "images/herbal-img.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-3 home-hr-1",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        title: "Energy Field Diagnosis",
        image: "images/energy-field.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-2",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        title: "Nutritional Counseling",
        image: "images/nutrition.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12 home-hr-1",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    },
    {
        title: "General Medicine",
        image: "images/acupuncture.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        breakClass: "col-xs-12",
        listText: [{id: 1, text: "foo"},{id:2, text:"bar"},{id:3, text:"baz"}]
    }];*/

app.get('/api/homeData', (req,res)=>{
    db.collection('homeContent').find().toArray().then(homeContent =>{
        const metadata = {total_count:homeContent.length};
        console.log('sending response now');
        res.json({_metadata: metadata, records: homeContent});
        console.log('response sent'); 
    }).catch(error =>{
        console.log(error);
        res.status(500).json({message: `internal server error: ${error}`});
    });
});



app.get('*', (req, res)=>{
    res.sendFile(path.resolve('static/index.html'));
});

// let db;
// MongoClient.connect('mongodb://localhost/jamie').then(connection =>{
//     db = connection;
//     app.listen(3000, () =>{
//         console.log('App started on port 3000');
//     });
// }).catch(error =>{console.log('ERROR', error)});

app.listen(3000, ()=> {
    console.log('non db app started on port 3000');
})
