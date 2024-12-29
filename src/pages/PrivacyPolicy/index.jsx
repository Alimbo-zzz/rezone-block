import React from 'react';
import cls from './style.module.scss'
import md from './privacy-policy.md';
import { marked } from 'marked';



export default (props) => {
	
	return (<>
		<div dangerouslySetInnerHTML={{__html: marked(md)}} data-cont className={cls.wrap}>
			
		</div>
	</>);
}
