import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../Header/Header';

const RepositoryName = () => {
	const [state, satState] = useState('');
	const location = useLocation();
	//console.log(state);
	const arr = location.pathname.split('/');
	//console.log(arr);
	const nameRepo = arr[arr.length - 1];
	const nameUser = arr[arr.length - 2];
	const url = `https://raw.githubusercontent.com/${nameUser}/${nameRepo}/master/README.md`;

	useEffect(() => {
		//fetch
		fetch(url)
			.then((r) => r.text())
			.then((data) => {
				satState(data);
			});
	}, [url]);

	return (
		<div>
			<Header nameRepo={nameRepo} />
			<div id='description'>
				<ReactMarkdown>{state}</ReactMarkdown>
			</div>
		</div>
	);
};
export default RepositoryName;
