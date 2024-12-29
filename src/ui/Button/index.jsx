import React from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

export default ({className, type='button', href, to, children, ...props}) => {
	
	const ops = {
		className: clsx(cls.btn, className),
		...props,
	}

	if(to) return <HashLink to={to} {...ops}>{children}</HashLink>;
	if(href) return <a to={href} {...ops}>{children}</a>;
	return <button type={type} {...ops}>{children}</button>;
}
