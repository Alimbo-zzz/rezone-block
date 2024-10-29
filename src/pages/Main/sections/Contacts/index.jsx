import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';
import { Socials } from '@/components';
import { motion } from 'framer-motion';
import { anim } from '@/scripts';

export default ({className}) => {

	const secOps = {
		initial: 'hidden', 
		whileInView: 'visible',
		viewport: { once: true, amount: 0.2,}
	}

	return (<>
		<motion.section {...secOps} id='contacts' className={clsx(cls.wrap, className)}>
			<div data-cont className={cls.cont}>
				<motion.h2 variants={anim.fadeIn} custom={{turn: 'left'}} data-title='sec'>Наши <span>[контакты]</span></motion.h2>
				<div className={cls.links}>
					<motion.a variants={anim.fadeIn} custom={{turn: 'bottom', delay: 0.5}} className={cls.links__item} href="tel:+79994921293" target='_blank'><Icon name='phone'/> +7 (999) 459-23-42</motion.a>
					<motion.a variants={anim.fadeIn} custom={{turn: 'bottom', delay: 0.6}} className={cls.links__item} href="mailto:info@yourcompany.com" target='_blank'><Icon name='mail'/> info@yourcompany.com</motion.a>
					<motion.a variants={anim.fadeIn} custom={{turn: 'bottom', delay: 0.7}} className={cls.links__item} href="#" target='_blank'><Icon name='mark'/> ул. Строителей, д. 10, офис 5</motion.a>
					<motion.div variants={anim.fadeIn} custom={{turn: 'bottom', delay: 0.8}} className={cls.links__item}><Icon name='clock'/> пн - пт: 9:00 - 18:00</motion.div>
				</div>
				<motion.p variants={anim.scaleIn}>Мы всегда рады ответить на ваши вопросы и&nbsp;помочь с выбором бетонных блоков, которые подойдут именно вам. Свяжитесь с&nbsp;нами любым удобным способом!</motion.p>
				<Socials className={cls.soc} type='contacts'/>
				<motion.div variants={anim.scaleIn} className={cls.map}>
					<img src="images/map.png"  />
				</motion.div>
			</div>
		</motion.section>
	</>);
}
