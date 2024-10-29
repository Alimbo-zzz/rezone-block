import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Navigation } from '@/components';
import { Icon } from '@/ui';
import { Link } from 'react-router-dom';

export default ({className}) => {
	
	return (<>
		<footer className={clsx(cls.wrap, className)}>
			<div data-cont className={cls.cont}>
				<div data-block="top">
					<span>© 2024 Rezone Block</span>
					<p>Надежность в каждом блоке,<br />строим будущее вместе!</p>
					<Link to={'/privacy-policy'}>Политика конфиденциальности</Link>
				</div>
				<hr />
				<div data-block="bot">
					<Navigation type='row'/>
					<Icon name='logo-text'/>
				</div>
			</div>
		</footer>
	</>);
}
