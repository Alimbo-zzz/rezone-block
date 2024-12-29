import React, { useEffect, useRef, useState } from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { anim } from '@/scripts';



const variants = {
	"show": {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.2,
		}
	},
	"hide": {
		opacity: 0,
		scale: 0.4,
		transition: {
			duration: 0.2
		},
	},
	"text-show": {
		opacity: 1,
		x: 0,
	},
	"text-hide": {
		opacity: 0,
		x: 100,
	},
	"tag-show": {
		opacity: 1,
		scale: 1,
	}
}


export default ({ className }) => {
	const [data, setData] = useState([
		{
			title: 'Пеплоблоки',
			tags: ['устойчивость к влаге и температурным перепадам', 'высокая прочность'],
			text: 'Строительные блоки, изготовленные из пепла, цемента и воды. Они ускоряются стройку в несколько раз, имеют идеальную геометрию и низкую нагрузку на фундамент',
			preview: 'images/blocks/пеплоблок.png'
		},
		{
			title: 'Евроблоки',
			tags: ['легкость', 'теплоизоляция', 'звукоизоляция'],
			text: 'Изготавливается из тех же материалов, что и пеплоблок. Евроблок легче и при изготовлении используются другие технологии',
			preview: 'images/blocks/евроблок.png'
		},
		{
			title: 'ФБС-блоки',
			tags: ['улучшенная прочность', 'повышенные теплоизоляционные характеристики'],
			text: 'Фундаментные блоки - используются для создания прочных и надежных фундаментов в различных типах строений',
			preview: 'images/blocks/фбс.png'
		},
	])
	const [activeItem, setActiveItem] = useState(0);
	const [previewVisible, setPreviewVisible] = useState(true)
	const [preview, setPreview] = useState(data[activeItem].preview)
	const timeoutPreview = useRef(null);

	useEffect(() => {
		setPreviewVisible(false);
		clearTimeout(timeoutPreview.current);
		timeoutPreview.current = setTimeout(() => {
			setPreviewVisible(true);
		}, 200);
		if (previewVisible) return;
	}, [activeItem])

	useEffect(() => {
		if (previewVisible) setPreview(data[activeItem].preview)
	}, [previewVisible, activeItem])

	const secOps = {
		initial: 'hidden',
		whileInView: 'visible',
		viewport: { once: true, amount: 0.2, }
	}

	return (<>
		<motion.section {...secOps} id='catalog' className={clsx(cls.wrap, className)}>
			<img src="images/texture.png" alt="texture" />
			<div data-cont className={cls.cont}>
				<motion.h2 variants={anim.fadeIn} custom={{ turn: 'left' }} data-title>Каталог</motion.h2>
				<div className={cls.preview}>
					<AnimatePresence mode='wait' initial={false}>
						{
							previewVisible && <motion.img
								src={preview}
								variants={variants}
								animate="show"
								exit="hide"
								alt='preview'
							/>
						}
					</AnimatePresence>
					<Icon data-icon='rt' name='rt' />
					<Icon data-icon='lb' name='lb' />
				</div>
				<div className={cls.info}>
					<div className={cls.info__head}>
						{data.map((el, i) =>
							<div
								key={i}
								onClick={() => setActiveItem(i)}
								data-active={activeItem === i}
								className={cls.pag}

							>{el.title}</div>
						)}
					</div>
					<div className={cls.info__tags}>
						<AnimatePresence mode='wait' initial={false}>
							{data[activeItem].tags.map((el, i) => <motion.div
								className={cls.tag}
								key={el}
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
							>{el}</motion.div>)}
						</AnimatePresence>
					</div>
					<AnimatePresence mode='wait' initial={false}>
						{
							previewVisible && <motion.div
								variants={variants}
								animate={'text-show'}
								initial={'text-hide'}
								exit={'text-hide'}
								className={cls.info__content}>
								{data[activeItem].text}
							</motion.div>
						}
					</AnimatePresence>
				</div>
				<article className={cls.text}>
					<motion.p variants={anim.fadeIn} custom={{ turn: 'bottom', delay: 1 }}>Продукция компании <span>Rezone Block</span> изготавливается с использованием высококачественного сырья и современных технологий. Все блоки проходят строгий контроль качества на каждом этапе производства, что гарантирует их долговечность и соответствие строительным нормам.</motion.p>
					<motion.p variants={anim.fadeIn} custom={{ turn: 'bottom', delay: 1.1 }}>Цены на продукцию могут варироваться в зависимости от объёма и типа блоков. Для получения точной стоимости рекомендуется связаться с менеджером.</motion.p>
				</article>
			</div>
		</motion.section>
	</>);
}
