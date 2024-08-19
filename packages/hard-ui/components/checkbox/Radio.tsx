import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import { isFunction } from 'radash'
import React, { useContext, useEffect, useState } from 'react'
import { RadioGroupContext } from './RadioGroup'
import './style'

export interface RadioProps {
	className?: string
	style?: React.CSSProperties
	value?: string | number | boolean
	disabled?: boolean
	children?: React.ReactNode
}

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
	const { children, value } = props

	const radioGroupContext = useContext(RadioGroupContext)

	const initChecked = value !== undefined && value !== null && radioGroupContext.value === value

	const [checked, setChecked] = useState<boolean>(initChecked)

	useEffect(() => {
		setChecked(initChecked)
	}, [radioGroupContext.value, value])

	const disabled = !!props.disabled || !!radioGroupContext.disabled

	const className = classNames(
		`${NAME_SPACE}-radio`,
		{
			'is-checked': checked,
			'is-disabled': disabled
		},
		props.className
	)

	const handleClick = () => {
		if (disabled) return
		setChecked(!checked)
		if (isFunction(radioGroupContext.onChange)) {
			radioGroupContext.onChange(value)
		}
	}

	return (
		<label ref={ref} htmlFor='input' className={className} onClick={handleClick}>
			<span className={`${NAME_SPACE}-radio__input`}>
				<input type='radio' className={`${NAME_SPACE}-radio__original`} />
				<span className={`${NAME_SPACE}-radio__inner`}></span>
			</span>
			{children && <span className={`${NAME_SPACE}-radio__label`}>{children}</span>}
		</label>
	)
})

export default Radio
