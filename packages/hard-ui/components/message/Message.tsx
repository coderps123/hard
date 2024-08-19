import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import React from 'react'
import Alert from '../alert'
import './style'

export interface MessageProps {
	className?: string
	style?: React.CSSProperties
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>((props, ref) => {
	console.log(props)

	const className = classNames(`${NAME_SPACE}-message`)

	return (
		<div ref={ref} className={className}>
			<Alert title='test'></Alert>
		</div>
	)
})

export default Message
