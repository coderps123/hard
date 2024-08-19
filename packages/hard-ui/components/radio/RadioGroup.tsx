import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import { isFunction } from 'radash'
import React, { useState } from 'react'

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
	const { children, disabled } = props

	const className = classNames(`${NAME_SPACE}-radio-group`, {})

	const [value, setValue] = useState(props.value)

	const onChange = (value: any) => {
		setValue(value)
		if (isFunction(props.onChange)) {
			props.onChange(value)
		}
	}

	return (
		<RadioGroupContext.Provider value={{ value, disabled, onChange }}>
			<div ref={ref} className={className} style={props.style}>
				{children}
			</div>
		</RadioGroupContext.Provider>
	)
})

export default RadioGroup
