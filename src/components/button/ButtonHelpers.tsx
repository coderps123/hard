const ButtonTypes = [
	'default',
	'primary',
	'success',
	'info',
	'warning',
	'danger'
] as const
export type Buttontype = (typeof ButtonTypes)[number]

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number]
