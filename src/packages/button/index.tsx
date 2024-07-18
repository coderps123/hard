import './index.scss'

import React from 'react'

type Props = {
	type?: 'primary' | 'success' | 'info' | 'warning' | 'error'
}

export const Button = (props: Props) => {
	const { type = 'default' } = props
	console.log(type)

	return (
		<>
			<button>按钮</button>
		</>
	)
}
