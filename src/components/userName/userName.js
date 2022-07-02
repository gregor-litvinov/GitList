import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const UserName = () => {
	const [state, satState] = useState([]);
	const location = useLocation();
	//console.log(state);
	const arr = location.pathname.split('/');
	//console.log(arr);
	const name = arr[arr.length - 1];
	const url = `https://api.github.com/users/${name}/repos`;
	const navigate = useNavigate();

	const navigateClick = (event) => {
		event.preventDefault();
		navigate(-1);
	};

	useEffect(() => {
		//fetch
		fetch(url)
			.then((r) => r.json())
			.then((data) => {
				satState(data);
			});
	}, [url]);
	return (
		<div>
			<button type='button' onClick={navigateClick}>
				beack
			</button>
			<div>
				{state.map((it) => {
					return (
						<div>
							<Link to={`/userName/${name}/${it.name}`}>{it.name}</Link>
							{/* /userName/id/RepositoryName */}
						</div>
					);
					//<div>{it.name}</div>;
				})}
			</div>
		</div>
	);
};

export default UserName;
//https://api.github.com/users/gregor-litvinov/repos
