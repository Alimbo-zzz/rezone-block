import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import {Navigation, Socials} from '@/components';
import { Icon } from '@/ui';
import { motion } from 'framer-motion';


export default ({className}) => {
	
	const anim = {
		hidden: {
			y: '-100%'
		},
		visible: {
			y: 0,
			transition: {
				ease: "easeOut",
				delay: 0.5,
				duration: 1,				
			}
		}
	}

	return (<>
		<motion.header viewport={{once: true}} initial='hidden' whileInView='visible' variants={anim} className={clsx(cls.wrap, className)}>
			<Icon className={cls.logo} name='logo-text'/>
			<hr />
			<Navigation/>
			<hr />
			<Socials/>
		</motion.header>
	</>);
}
