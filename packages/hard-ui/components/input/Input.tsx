import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import { CircleClose } from '@hard-ui/icons'
import classNames from 'classnames'
import { isFunction } from 'radash'
import React, { useMemo, useState } from 'react'
import './style'

interface InputProps {
	value?: string | number
	className?: string
	style?: React.CSSProperties
	placeholder?: string
	disabled?: boolean
	clearable?: boolean
	onBlur?: React.FocusEventHandler<HTMLInputElement>
	onFocus?: React.FocusEventHandler<HTMLInputElement>
	onChange?: React.FocusEventHandler<HTMLInputElement>
	onInput?: React.FocusEventHandler<HTMLInputElement>
}

const InternalInput: React.ForwardRefRenderFunction<HTMLInputElement, Omit<InputProps, 'ref'>> = (props, ref) => {
	const value = useMemo(() => props.value, [props.value])

	const [focus, setFocus] = useState<boolean>(false)
	const isFocus = useMemo(() => focus, [focus])

	const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
		}
		setFocus(false)
		if (isFunction(props.onBlur)) {
			props?.onBlur(evt)
		}
	}
	const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
			return false
		}
		setFocus(true)
		if (isFunction(props.onFocus)) {
			props?.onFocus(evt)
		}
	}
	const handleChange = (evt: React.FocusEvent<HTMLInputElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
		}
		if (isFunction(props.onChange)) {
			props?.onChange(evt)
		}
	}
	const handleInput = (evt: React.FocusEvent<HTMLInputElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
		}
		if (isFunction(props.onInput)) {
			props?.onInput(evt)
		}
	}

	const className = classNames(
		`${NAME_SPACE}-input`,
		{
			'is-disabled': props.disabled,
			'is-focus': isFocus
		},
		props.className
	)
	const wrapperClassName = classNames(`${NAME_SPACE}-input__wrapper`)
	const innerClassName = classNames(`${NAME_SPACE}-input__inner`)

	const suffixNode = (() => {
		// const className = classNames(`${NAME_SPACE}-input__suffix`)
		return <CircleClose />
	})()

	return (
		<div className={className} style={props.style}>
			<div className={wrapperClassName}>
				<input
					className={innerClassName}
					type='text'
					ref={ref}
					value={value}
					placeholder={props.placeholder}
					disabled={props.disabled}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={handleChange}
					onInput={handleInput}
				/>
				{suffixNode}
			</div>
		</div>
	)
}

const Input: React.ForwardRefExoticComponent<Omit<InputProps, 'ref'> & React.RefAttributes<HTMLInputElement>> =
	React.forwardRef(InternalInput)

export default Input
