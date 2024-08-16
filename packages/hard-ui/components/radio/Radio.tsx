import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import './style'
import React, { useState } from 'react'

export interface RadioProps {
	className?: string
	style?: React.CSSProperties
	checked?: boolean
	disabled?: boolean
	children?: React.ReactNode
}

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
	const { disabled = false, children } = props

	const [checked, setChecked] = useState<boolean>(() => !!props.checked)
	console.log(setChecked)

	const className = classNames(
		`${NAME_SPACE}-radio`,
		{
			'is-checked': checked,
			'is-disabled': disabled
		},
		props.className
	)

	return (
		<label ref={ref} htmlFor='' className={className}>
			<span className={`${NAME_SPACE}-radio__input`}>
				<input type='radio' className={`${NAME_SPACE}-radio__original`} />
				<span className={`${NAME_SPACE}-radio__inner`}></span>
			</span>
			{children && <span className={`${NAME_SPACE}-radio__label`}>{children}</span>}
		</label>
	)
})

export default Radio
