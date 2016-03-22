import React from 'react';
import ReactDOM from 'react-dom';

import Hhello from './hello.jsx';

main();

function main() {
    ReactDOM.render(<Hhello />, document.getElementById('app'));
}


/*
import React from 'react';
import ReactDOM from 'react-dom';

import hello from './hello.jsx';
import './main.css';

//document.body.appendChild(hello());

ReactDOM.render(<hello />, document.getElementById('app'));
require.ensure([],()=>{
	//import image from './image.jsx';
	var image = require('./image.jsx');
	document.body.appendChild(image.image);
});
*/
