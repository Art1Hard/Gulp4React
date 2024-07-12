import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { DictinComponent } from './components/dictin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { isWebp } from './modules/webp';
const runScripts = () => isWebp();
runScripts();

function Main() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/about' element={<DictinComponent />} />
			</Routes>
		</Router>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);