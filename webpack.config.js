/**
 * Created by Mark on 4/3/2017.
 */
const path = require('path');
const webpack = require('webpack');

module.exports ={
    entry:{
        app:'./static/src/app.jsx',
        vendor:['react', 'react-dom', 'whatwg-fetch', 'react-router-dom']
    },
    output:{
        path:path.resolve(__dirname,'./static' ),
        filename:'app.bundle.js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.js'})
    ],
    module:{
        rules:[
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options:{
                    presets:['react','es2015']
                }
            }
        ]

    },
    devServer:{
        port: 8000,
        contentBase:'static',
        proxy:{
            '/api/*':{
                target:'http://localhost:3000'
            }
        },
        historyApiFallback: true
    }
};