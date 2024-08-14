import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import React from 'react'

export interface SwitchProps {
	className?: string
	style?: React.CSSProperties
	disabled?: boolean
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
	const className = classNames(`${NAME_SPACE}-switch`, props.className)

	return (
		<button className={className} type='button' ref={ref}>
			<div></div>
		</button>
	)
})

export default Switch
