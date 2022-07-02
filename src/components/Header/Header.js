import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
	const nameRepo = props.nameRepo;
	const navigate = useNavigate();

	const navigateClick = (event) => {
		event.preventDefault();
		navigate(-1);
	};

	return (
		<div>
			<div id='repository-name'>{nameRepo}</div>

			<button id='go-back' type='button' onClick={navigateClick}>
				back
			</button>
		</div>
	);
};
export default Header;
