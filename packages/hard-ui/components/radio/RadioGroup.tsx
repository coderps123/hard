import cs from 'classnames'
import { isFunction } from 'radash'
import React, { useContext, useState } from 'react'
import { ConfigContext } from '../config-provider'

export interface RadioGroupProps {
	className?: string
	style?: React.CSSProperties
	children?: React.ReactNode
	value?: any
	disabled?: boolean
	onChange?: (value: any) => void
}

export const RadioGroupContext = React.createContext<Pick<RadioGroupProps, 'value' | 'disabled' | 'onChange'>>({})

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
	// props
	const { children, disabled, className, style } = props

	// Context
	const { getPrefixCls } = useContext(ConfigContext)

	const wrapCls = cs(getPrefixCls('radio-group'), className)

	const [value, setValue] = useState(props.value)

	const onChange = (value: any) => {
		setValue(value)
		if (isFunction(props.onChange)) {
			props.onChange(value)
		}
	}

	return (
		<RadioGroupContext.Provider value={{ value, disabled, onChange }}>
			<div ref={ref} className={wrapCls} style={style}>
				{children}
			</div>
		</RadioGroupContext.Provider>
	)
})

export default RadioGroup
