import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
	const [state, setState] = useState('');
	const navigate = useNavigate();

	const inputUser = (event) => {
		setState(event.target.value);
	};

	const urlClick = (event) => {
		event.preventDefault();
		navigate(`/UserName/${state}`);
		// 👇️ value of input field
		//console.log('handleClick 👉️', state);
		props.updateUrl(state);
	};

	return (
		<div className='styleForm'>
			<input
				type='text'
				id='#input-field'
				name='message'
				onChange={inputUser}
				value={state}
				autoComplete='off'
			/>
			<button type='button' id='search-button' onClick={urlClick}>
				Click
			</button>
		</div>
	);
};
export default Home;
