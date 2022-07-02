import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserName from './components/userName/userName';
import Home from './components/Title/Home';
import RepositoryName from './components/repositoryName/repositoryName';

import './App.css';

function App() {
	const updateUrl = (message) => {};
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home updateUrl={updateUrl} />} />
					<Route path='/UserName/:id'>
						<Route path=':RepositoryName' element={<RepositoryName />} />
						<Route index element={<UserName />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
