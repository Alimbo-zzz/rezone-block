import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { anim } from '@/scripts';

export default ({className, title, desc, preview, ...props}) => {
	const {src, alt} = preview;

	const secOps = {
		initial: 'hidden', 
		whileInView: 'visible',
		viewport: {amount: 0.2, once: true}
	}

	return (<>
		<motion.section {...secOps} {...props} className={clsx(cls.wrap, className)}>
			<div data-cont className={cls.cont}>
				<motion.div  variants={anim.scaleIn} className={cls.preview}><img src={src} alt={alt} /></motion.div>
				<motion.h2 custom={{turn: 'bottom'}} variants={anim.fadeIn} data-title='sec' className={cls.title}>{title}</motion.h2>
				<motion.article variants={anim.fadeIn} className={cls.desc}>{desc}</motion.article>
			</div>
		</motion.section>
	</>);
}
