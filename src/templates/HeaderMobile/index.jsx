import React, { useEffect, useState } from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon, MenuIcon } from '@/ui';
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components';

export default ({className}) => {
	const [isActive, setIsActive] = useState(false);
	const [fixed, setFixed] = useState(false);
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", (latest) => {
		if(latest > 300 && !fixed) setFixed(true);
		if(latest < 300 && fixed) setFixed(false);
	})

	const close = () => setIsActive(false);

	useEffect(()=>{
		document.addEventListener('click', close)
	}, [])
	
	return (<>
		<AnimatePresence>
			<motion.header onClick={e => e.stopPropagation()} data-fixed={fixed} data-active={isActive} className={clsx(cls.wrap, className)}>
				<div data-cont className={cls.content}>
					<a href="/"> <Icon name='logo'/> </a>
					<h4>Rezone Block</h4>
					<MenuIcon active={isActive} setter={setIsActive} />
				</div>
				<div data-cont>
					<hr />
				</div>
				<div data-cont className={cls.menu}>
					<Navigation onClickItem={close} type='mobile' />
				</div>
			</motion.header>
		</AnimatePresence>		
	</>);
}
