import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { InfoSection } from '@/components';

export default ({className}) => {
	
	const ops = {
		className,
		preview: {
			src: 'images/company.png',
			alt: 'company'
		},
		title: <>Компания <span>[Rezone Block]</span></>,
		desc: <>
			<p><span>Rezone&nbsp;Block</span> — предприятие, специализирующееся на&nbsp;изготовлении высококачественных строительных материалов, таких как пеплоблоки, евроблоки и ФБС-блоки.</p> 
			<p>Компания предоставляет прочные и надёжные строительные блоки для различных типов строений и&nbsp;строительных проектов. Используя современные технологии производства, Rezone Block гарантирует долговечность и надежность своей продукции.</p>
		</>
	}

	return <InfoSection id='about' {...ops} />;
}
