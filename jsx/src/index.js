import React from 'react';

import ReactDom from 'react-dom';

function getButtonText() {
	return 'Click on Me!'
}



const App = () => {

	const buttonText ={ text: 'Click on Me!'} ;
	const style = {backgroundColor: 'blue', color: 'white'};
	const labelText ='Enter nme:';

	return (
		<div>
  			<label className="label" htmlFor="name">{labelText}</label>
  			<input id="name" type="text"/>
			<button style={style}>{buttonText.text}</button>
		</div>
	);
};
	
ReactDom.render(
	<App />,
	document.querySelector('#root')
);