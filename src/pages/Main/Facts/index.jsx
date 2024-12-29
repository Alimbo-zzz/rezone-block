import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';
import { anim } from '@/scripts';
import { motion } from 'framer-motion';


export default ({className}) => {



	const data = [
		{
			title: "Высокая надёжность",
			text: 'Наши решения проверены временем и выдерживают любые испытания',
		},
		{
			title: "Проверенное качество",
			text: 'Каждый элемент проходит строгий контроль качества на каждом этапе производства',
		},
		{
			title: "Инновационный подход",
			text: 'Мы внедряем передовые технологии для создания решений, которые служат десятилетиями',
		},
		{
			title: "Репутация и опыт",
			text: 'Доверие наших клиентов — главная награда. Работаем только с проверенными материалами',
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
					{data.map((el, i) => <motion.div custom={i * 0.3} variants={anim.scaleIn} data-box key={i}>						
						<h4 >{el.title}</h4>
						<p>{el.text}</p>
					</motion.div>)}
				</div>
				<div data-block='desk'>
					<img src="images/facts.png" alt="preview" />
					<ul className={cls.grid}>
						{data.map((el,i) => 
							<motion.li  {...secOps} viewport={{once: true, amount: 0.6}} key={i} className={cls.grid__item}>
								<motion.div variants={anim.scaleIn} data-icon><Icon name='arrow'/></motion.div>
								<motion.h4 variants={anim.fadeIn} custom={{turn: 'right', delay: 0.8}} >{el.title}</motion.h4>
								<motion.p variants={anim.fadeIn} custom={{turn: 'bottom', delay: 0.6}}>{el.text}</motion.p>
							</motion.li>
						)}
					</ul>
				</div>
			</div>
		</motion.section>
	</>);
}
