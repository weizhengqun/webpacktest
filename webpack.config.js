var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
//        publicPath: 'build/'
    },
    module: {
        loaders: [
		{
			test: /\.css$/,
			loader: "style!css"
		}, {
			test: /\.(js|jsx)$/,
			loader: "babel",
			query: {
				presets:['es2015']
			}
		}, {
			test: /\.png$/,
			loader: "url",
			query: {
				limit: 1024
			}
		}
        ]
    }
};
