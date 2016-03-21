
import {hello} from './hello.jsx';
import './main.css';

document.body.appendChild(hello());

require.ensure([],()=>{
	//import image from './image.jsx';
	var image = require('./image.jsx');
	document.body.appendChild(image.image);
});
