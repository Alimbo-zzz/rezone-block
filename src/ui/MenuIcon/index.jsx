import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';

export default ({className, active, setter}) => {
	
	return (<>
		<button onClick={() => setter(prev => !prev)} type='button' data-active={active} className={clsx(cls.wrap, className)}>
			<span data-line='1'/>
			<span data-line='2'/>
			<span data-line='3'/>
		</button>
	</>);
}
