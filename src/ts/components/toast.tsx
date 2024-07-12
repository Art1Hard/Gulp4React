import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notify(text: string) {
	toast.info('Вау так легко!', {
		className: "custom-toast",
		position: "top-right",
		autoClose: false,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
		transition: Slide,
	});
}

export default () => {
	return (
		<>
			<button onClick={() => notify("Its really easy!")}>Notify !</button>
			<ToastContainer />
		</>
	);
};