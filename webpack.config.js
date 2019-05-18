// Imports: Dependencies
const path = require('path');
require('@babel/register')

// Webpack Condiguration
const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundled.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}