import React from 'react';
import ReactDOM from 'react-dom/client';
import { SwiperComponent } from './components/swiper';
import Toast from './components/toast';
import { isWebp } from './modules/webp';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

const runScripts = () => isWebp();
runScripts();

const App = () => (
	<>
		<HeaderComponent />
		<h1>Hello, React with TypeScript!</h1>
		<SwiperComponent />
		<Toast />
		<img src="@img/cover.jpg" alt="dsasd" className='dsadsa' />
		<svg className="interactive">
			<use href="@img/interactive_icons.svg#material"></use>
		</svg>
		<FooterComponent />
	</>
);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);