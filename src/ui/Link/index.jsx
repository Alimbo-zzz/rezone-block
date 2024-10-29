import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';

export default ({className}) => {
	
	return (<>
		<div className={clsx(cls.wrap, className)}>

		</div>
	</>);
}
