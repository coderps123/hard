import { isFunction } from 'radash'
import React, { useContext, useEffect, useState } from 'react'
import { ConfigContext } from '../config-provider'
import { useClassNames } from './hooks'
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
	// props
	const { children, value, className } = props

	// Context
	const { getPrefixCls } = useContext(ConfigContext)
	const radioGroupContext = useContext(RadioGroupContext)

	const initChecked = value !== undefined && value !== null && radioGroupContext.value === value
	const [checked, setChecked] = useState<boolean>(initChecked)

	useEffect(() => {
		setChecked(initChecked)
	}, [radioGroupContext.value, value])

	const disabled = !!props.disabled || !!radioGroupContext.disabled

	// classname
	const { wrapCls, inputWrapCls, originalCls, innerlCls, labalCls } = useClassNames({ getPrefixCls, className, disabled, checked })

	const handleClick = () => {
		if (disabled) return
		setChecked(!checked)
		if (isFunction(radioGroupContext.onChange)) {
			radioGroupContext.onChange(value)
		}
	}

	return (
		<label ref={ref} htmlFor='input' className={wrapCls} onClick={handleClick}>
			<span className={inputWrapCls}>
				<input type='radio' className={originalCls} />
				<span className={innerlCls}></span>
			</span>
			{children && <span className={labalCls}>{children}</span>}
		</label>
	)
})

export default Radio
