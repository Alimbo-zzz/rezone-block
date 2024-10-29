import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';
import { motion } from 'framer-motion';
import { anim } from '@/scripts';

export default ({className, type='header'}) => {
	const list = [
		{ name: 'whatsapp', link: '#'},
		{ name: 'telegram', link: '#'},
		{ name: 'mail', link: '#'},
	]


	const secOps = {
		initial: 'hidden', 
		whileInView: 'visible',
		viewport: { once: true}
	}

	return (<>
		<motion.div {...secOps} data-type={type} className={clsx(cls.wrap, className)}>
			{list.map((el, i) => 
				<motion.a custom={(1000 + (i * 200)) / 1000} variants={anim.scaleIn} href={el.link} name={el.name} className={cls.icon} key={i}>
					<Icon name={el.name} />
				</motion.a>
			)}
		</motion.div>
	</>);
}
