import React from 'react';
import { useState } from 'react';

const Home = (props) => {
	const [state, setState] = useState('');

	const inputUser = (event) => {
		setState(event.target.value);
	};

	const urlClick = (event) => {
		event.preventDefault();

		// 👇️ value of input field
		console.log('handleClick 👉️', state);
		props.updateUrl(state);
	};

	return (
		<div>
			<input
				type='text'
				id='message'
				name='message'
				onChange={inputUser}
				value={state}
				autoComplete='off'
			/>

			<h2>add URL: {state}</h2>

			<button onClick={urlClick}>Click</button>
			<button onClick={urlClick}>Click</button>
		</div>
	);
};
export default Home;
