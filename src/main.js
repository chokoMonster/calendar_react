import React from 'react';
import ReactDOM from 'react-dom';

import App from './Container';
import Kalender from './Kalender.js';

/*export const load = () => {
  ReactDOM.render(<Container />, document.getElementById('demo2'));
  ReactDOM.render(<Header />, document.getElementById('headerDemo'));
};*/
 
document.addEventListener('DOMContentLoaded', function() {
	console.log("hallo");
	//ReactDOM.render(React.createElement(Timeline), document.getElementById('mount'));	
	//ReactDOM.render(<Kalender/>, document.getElementById('mount'));
	
	ReactDOM.render(<App />, document.getElementById('mount'));
});


//load();