import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';
import { Socials } from '@/components';
import { motion } from 'framer-motion';
import { anim, varables } from '@/scripts';

export default ({ className }) => {

	const secOps = {
		initial: 'hidden',
		whileInView: 'visible',
		viewport: { once: true, amount: 0.2, }
	}

	return (<>
		<motion.section {...secOps} id='contacts' className={clsx(cls.wrap, className)}>
			<div data-cont className={cls.cont}>
				<motion.h2 variants={anim.fadeIn} custom={{ turn: 'left' }} data-title='sec'>Наши <span>[контакты]</span></motion.h2>
				<div className={cls.links}>
					<motion.a variants={anim.fadeIn} custom={{ turn: 'bottom', delay: 0.5 }} className={cls.links__item} href={varables.phone.link} target='_blank'><Icon name='phone' /> {varables.phone.text}</motion.a>
					<motion.a variants={anim.fadeIn} custom={{ turn: 'bottom', delay: 0.6 }} className={cls.links__item} href={varables.email.link} target='_blank'><Icon name='mail' /> {varables.email.text}</motion.a>
					<motion.a variants={anim.fadeIn} custom={{ turn: 'bottom', delay: 0.7 }} className={cls.links__item} href={varables.address.link} target='_blank'><Icon name='mark' /> {varables.address.text}</motion.a>
					<motion.div variants={anim.fadeIn} custom={{ turn: 'bottom', delay: 0.8 }} className={cls.links__item}><Icon name='clock' /> пн - пт: 9:00 - 18:00</motion.div>
				</div>
				<motion.p variants={anim.scaleIn}>Мы всегда рады ответить на ваши вопросы и&nbsp;помочь с выбором бетонных блоков, которые подойдут именно вам. Свяжитесь с&nbsp;нами любым удобным способом!</motion.p>
				<Socials className={cls.soc} type='contacts' />
				<motion.a href={varables.address.link} target='_blank' variants={anim.scaleIn} className={cls.map}>
					<img src="images/map.png" />
				</motion.a>
			</div>
		</motion.section>
	</>);
}
