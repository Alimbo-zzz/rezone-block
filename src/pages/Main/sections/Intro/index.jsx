import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Button } from '@/ui';
import { Socials } from '@/components';
import { createPortal } from 'react-dom';
import { HeaderDesktop, HeaderMobile } from '@/templates';
import { motion } from 'framer-motion';
import { anim } from '@/scripts';


export default ({className}) => {

	const secOps = {
		initial: 'hidden', 
		whileInView: 'visible',
		viewport: { once: true}
	}
	
	return (<>
		{createPortal(<HeaderMobile/>, document.querySelector('#templates'))}
		<motion.section {...secOps} className={clsx(cls.wrap, className)}>
			<div data-cont className={cls.bar} style={{position: 'relative', width: '100%'}}>
				<HeaderDesktop className={cls.bar__line}/>				
			</div>
			<div className={cls.head}>
				<div data-cont className={cls.head__content} >
					<motion.h1 custom={{ turn: 'right' }} variants={anim.fadeIn}>Пепельные блоки на&nbsp;заказ <br /> в&nbsp;Кабардино-Балкарии</motion.h1>
					<motion.p custom={{ turn: 'left' }} variants={anim.fadeIn}>Для офисов, квартир и&nbsp;больших домов. Учтём все пожелания и&nbsp;выполним заказ в&nbsp;срок 30&nbsp;календарных дней с&nbsp;гарантией N-лет.</motion.p>
				</div>
			</div>
			<motion.div custom variants={anim.fadeIn} data-cont className={cls.body}>
				<Button data-btn='phone' href='tel:+79994921293'>Связаться с нами</Button>
				<Button data-btn='desktop' to='#contacts'>Связаться с нами</Button>
				<Socials className={cls.body__socials}/>
			</motion.div>
			
		</motion.section>
	</>);
}
