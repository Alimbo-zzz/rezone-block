import React from 'react';
import cls from './style.module.scss'
import { Intro, About, Catalog, Contacts, Facts, Team, Reviews } from './components'
import { Footer } from '@/templates';


export default (props) => {

	return (<>
		<div className={cls.wrap}>
			<Intro />
			<main>
				<About />
				<Facts />
				<Catalog />
				<Team />
				{/* <Reviews/> */}
				<Contacts />
			</main>
			<Footer />
		</div>
	</>);
}
