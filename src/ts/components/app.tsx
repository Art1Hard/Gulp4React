import React from 'react';
import HeaderComponent from './header';
import FooterComponent from './footer';
import { SwiperComponent } from './swiper';
import Toast from './toast';
import Head from './head';

export const App = () => (
	<>
		<Head title='Главная точно' />
		<HeaderComponent />
		<h2>Окрашиваемый спрайт</h2>
		<SwiperComponent />
		<Toast />
		<img src="@img/cover.jpg" alt="dsasd" className='dsadsa' />
		<svg className="colored-icon">
			<use href="@img/sprite.svg#quality"></use>
		</svg>
		<FooterComponent />
	</>
);