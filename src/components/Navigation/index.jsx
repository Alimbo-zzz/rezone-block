import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';

export default ({className, onClickItem=()=>{}, type='col'}) => {
	const list = [
		{ name: 'Главная', link: '#'},
		{ name: 'О компании', link: '#about'},
		{ name: 'Каталог', link: '#catalog'},
		{ name: 'Отзывы', link: '#reviews'},
		{ name: 'Контакты', link: '#contacts'},
	]
	
	return (<>
		<div data-type={type} className={clsx(cls.wrap, className)}>
			{list.map((el, i) => 
				<a href={el.link} onClick={onClickItem} name={el.name} className={cls.icon} key={i}>
					{el.name}
				</a>
			)}
		</div>
	</>);
}
