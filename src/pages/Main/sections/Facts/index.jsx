import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';
import { anim } from '@/scripts';
import { motion } from 'framer-motion';


export default ({className}) => {

	const dataPhone = [
		<>Реализуем любые нестандартные решения для уюта вашего дома</>,
		<>Наши цены ниже, чем у&nbsp;остальных компаниях на N %</>,
		<>больше N% клиентов пользуются продуктом нашего изготовления</>,
		<>Блоки обладают отличной несущей способностью и&nbsp;долговечностью</>,
	]

	const dataDesk = [
		{
			text: 'Реализуем любые нестандартные решения для уюта вашего дома',
			span: 'N-лет на рынке'
		},
		{
			text: 'Наши цены ниже, чем у остальных компаниях',
			span: 'На N%'
		},
		{
			text: 'Довольных клиентов пользуются продуктом нашего изготовления',
			span: (<><i>{">"} </i> {"N"}</>)
		},
		{
			text: 'Блоки обладают отличной несущей способностью	и долговечностью',
			span: 'Гарантия N-лет'
		},
	]

	const secOps = {
		initial: 'hidden', 
		whileInView: 'visible',
		viewport: { once: true, amount: 0.2,}
	}
	
	return (<>
		<motion.section {...secOps} className={clsx(cls.wrap, className)}>
			<div data-cont className={cls.cont}>
				<motion.h2 variants={anim.fadeIn} custom={{turn: 'left'}} data-title>Факты о нас</motion.h2>
				<div data-block='mobile'>
					{dataPhone.map((el, i) => <motion.p custom={i * 0.3} variants={anim.scaleIn} key={el}>{el}</motion.p>)}
				</div>
				<div data-block='desk'>
					<img src="/images/facts.png" alt="preview" />
					<ul className={cls.grid}>
						{dataDesk.map(el => 
							<motion.li  {...secOps} viewport={{once: true, amount: 0.6}} key={el.span} className={cls.grid__item}>
								<motion.div variants={anim.scaleIn} data-icon><Icon name='arrow'/></motion.div>
								<motion.p variants={anim.fadeIn} custom={{turn: 'bottom', delay: 0.6}}>{el.text}</motion.p>
								<motion.span variants={anim.fadeIn} custom={{turn: 'right', delay: 0.8}} >{el.span}</motion.span>
							</motion.li>
						)}
					</ul>
				</div>
			</div>
		</motion.section>
	</>);
}
