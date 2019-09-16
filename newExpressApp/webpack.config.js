const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/assets/javascripts/client.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'build')
    },
    devServer: {
        contentBase: 'build',
        hot: true,
        overlay: true,
        stats: {
            colors: true
        } 
    },
    module:{
        rules: [
            {
                test: /\.hbs$/,
                use: [
                        {
                            loader: 'handlebars-loader',
                            query: {
                                partialDirs: [
                                    path.join(__dirname, './src/views', 'partials')
                                ],
                            }
                        }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/layouts/main.hbs',
            title:'Node Tests'
        })
    ]
}