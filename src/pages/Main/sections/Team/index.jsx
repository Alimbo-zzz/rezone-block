import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { InfoSection } from '@/components';

export default ({className}) => {
	
	const ops = {
		className,
		preview: {
			src: '/images/team.png',
			alt: 'company'
		},
		title: <>Немного <span>[о команде]</span></>,
		desc: <>
			<p>Команда <span>Rezone Block</span> состоит из опытных профессионалов с большим стажем работы в области производства строительных материалов. Мы гордимся своим коллективом и его вкладом в развитие компании.</p>
			<p>Каждый член нашей команды привносит уникальный опыт и знания, что позволяет нам эффективно решать задачи и достигать высоких стандартов качества. Мы постоянно обучаемся и адаптируемся к новым технологиям и требованиям рынка, что помогает нам оставаться конкурентоспособными.</p>
		</>
	}

	return <InfoSection {...ops} />;
}
