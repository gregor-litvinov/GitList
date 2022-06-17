import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UserName from './components/userName/userName';
import Home from './components/Title/Home';
import RepositoryName from './components/repositoryName/repositoryName';

import './App.css';

function App() {
	const updateUrl = (message) => {
		debugger;
	};
	return (
		<div className='App'>
			<BrowserRouter>
				<div>
					<Link to='/'>Home</Link>
					<Link to='/UserName'>UserName</Link>
					<Link to='/RepositoryName'>RepositoryName</Link>
				</div>
				<Routes>
					<Route path='/' element={<Home updateUrl={updateUrl} />} />
					<Route path='UserName' element={<UserName />} />
					<Route path='RepositoryName' element={<RepositoryName />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
