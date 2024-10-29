
const getTurn = (turn='top', value=100) => {
	let ops = {
		top: {y: value},
		bottom: {y: -1 * value},
		right: {x: value},
		left: {x: -1 * value},
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
			transition: {delay: e?.delay || 0.5},
			opacity: 1,
			...getTurn(e?.turn, 0)
		})
	},
	scaleIn: {
		hidden: {
			opacity: 0,
			scale: 0.3
		},
		visible: (delay=0.5) => ({
			transition: {delay},
			opacity: 1,
			scale: 1,
		})
	}
}