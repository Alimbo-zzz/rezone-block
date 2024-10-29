import React, { useState, useRef } from 'react';
import cls from './style.module.scss'
import clsx from 'clsx';
import { Icon } from '@/ui';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { motion } from 'framer-motion';
import { anim } from '@/scripts';

export default ({className}) => {
	const [swiperData, setSwiperData] = useState({})
	const swiper = useRef({});

	const slides = [1,2,3,4,5,6]

	const secOps = {
		initial: 'hidden', 
		whileInView: 'visible',
		viewport: { once: true}
	}

	
	return (<>
		<motion.section {...secOps} id='reviews' className={clsx(cls.wrap, className)}>
			<div data-cont className={cls.cont}>
				<motion.h2 variants={anim.scaleIn} data-title='center'>Отзывы</motion.h2>
				
				<div className={cls.slider}>
					<Swiper onSwiper={e => {swiper.current = e; setSwiperData({...e});}} onSlideChange={e => setSwiperData({...e})} className={cls.swiper}>
						{slides.map((el, i) => <SwiperSlide className={cls.swiper__slide} key={i}>
							<div className={cls.review}>
								<div className={cls.review__preview}>
									<img src="/images/avatar.png" />
								</div>
								<p className={cls.review__text}>Недавно мы приобрели бетонные блоки у компании Rezone Block, и остались очень довольны качеством продукции и уровнем сервиса. С самого начала нашей работы с ними командa была готова ответить на все наши вопросы и предоставить детальную информацию о различных типах блоков, которые они предлагают</p>
								<div className={cls.review__box}>
									<h4 className={cls.review__name}>Фрэнк Кинни</h4>
									<span className={cls.review__job}>Строитель</span>
								</div>
							</div>
						</SwiperSlide>)}
					</Swiper>
					
					<button onClick={() => swiper.current?.slidePrev()} disabled={swiperData?.isBeginning} className={cls.arrow} data-btn='prev'><Icon name='slide-l'/></button>
					<button onClick={() => swiper.current?.slideNext()} disabled={swiperData?.isEnd} className={cls.arrow} data-btn='next'><Icon name='slide-r'/></button>

					<div className={cls.pag}>
						{slides.map((el, i) => <button data-active={swiperData?.activeIndex == i} onClick={() => swiper.current?.slideTo(i)} key={i} className={cls.pag__item}/>)}
					</div>
				</div>
				
			</div>
		</motion.section>
	</>);
}
