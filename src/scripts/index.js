

export const varables = {
	phone: {
		text: "+7 (928) 710-70-70",
		link: "tel:+79287107070",
		number: "+79287107070"
	},
	email: {
		text: "rezoneblock@mail.ru",
		link: "mailto:rezoneblock@mail.ru"
	},
	address: {
		text: "Урвань, Кабардино-Балкарская Республика",
		link: "https://yandex.ru/maps?whatshere%5Bpoint%5D=43.826486%2C43.473695&whatshere%5Bzoom%5D=16.0&ll=43.826972961425774%2C43.47390040781871&z=16.0&si=qjhh24wntjq2gmjuf9crdfpdj4"
	}
}



const getTurn = (turn = 'top', value = 100) => {
	let ops = {
		top: { y: value },
		bottom: { y: -1 * value },
		right: { x: value },
		left: { x: -1 * value },
	}
	return ops?.[turn] || null;
}

export const anim = {
	fadeIn: {
		hidden: (e) => ({
			opacity: 0,
			...getTurn(e?.turn, e?.value)
		}),
		visible: (e) => ({
			transition: { delay: e?.delay || 0.5 },
			opacity: 1,
			...getTurn(e?.turn, 0)
		})
	},
	scaleIn: {
		hidden: {
			opacity: 0,
			scale: 0.3
		},
		visible: (delay = 0.5) => ({
			transition: { delay },
			opacity: 1,
			scale: 1,
		})
	}
}