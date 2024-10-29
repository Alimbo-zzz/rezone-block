import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default ({className, type='button', href, to, children, ...props}) => {
	
	const ops = {
		className: clsx(cls.btn, className),
		...props,
	}

	if(to) return <Link to={to} {...ops}>{children}</Link>;
	if(href) return <a href={href} {...ops}>{children}</a>;
	return <button type={type} {...ops}>{children}</button>;
}
