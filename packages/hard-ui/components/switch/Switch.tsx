import React from 'react'
import styled from 'styled-components'

export interface SwitchProps {
	className?: string
	style?: React.CSSProperties
	disabled?: boolean
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
	console.log(props, ref)

	const WrapComp = styled.button`
		min-width: 60px;
		padding: 0;
		border: 1px solid red;
		> span {
			display: inline-flex;
			width: 14px;
			height: 14px;
			background-color: #ffffff;
			border-radius: 50px;
		}
	`

	return (
		<WrapComp className='h-switch'>
			<span className='h-switch-handle'></span>
		</WrapComp>
	)
})

export default Switch
