import React from 'react';
import {
	Landing,
	Dashboard,
	Profile,
	Admin,
	Test,
	Opening
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/test" element={<Test />} />
					<Route exact path="/admin" element={<Admin />} />
					<Route exact path="/opening" element={<Opening />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;