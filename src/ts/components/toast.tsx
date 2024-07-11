import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notify(text: string) {
	toast(text);
}

export default () => {
	return (
		<div>
			<button onClick={() => notify("Its really easy!")}>Notify !</button>
			<ToastContainer />
		</div>
	);
};