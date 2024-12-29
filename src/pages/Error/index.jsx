import React from 'react';
import cls from './style.module.scss'
import { Link } from 'react-router-dom';
import { Button } from '@/ui';


export default (props) => {
	
	return (<>
		<div className={cls.wrap}>
			<h1><span>404</span> <br /> not found</h1>
			<p>Страница не найдена</p>
			<Button to='/'>На главную</Button>
		</div>
	</>);
}
