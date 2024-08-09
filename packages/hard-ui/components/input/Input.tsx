import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import { CircleClose } from '@hard-ui/icons'
import classNames from 'classnames'
import { isFunction } from 'radash'
import React, { useCallback, useMemo, useState } from 'react'
import { ButtonSizeType } from '../button/ButtonHelpers'
import './style'

interface InputProps {
	value?: string | number
	className?: string
	style?: React.CSSProperties
	placeholder?: string
	disabled?: boolean
	clearable?: boolean
	showCount?: boolean
	maxLength?: number
	size?: ButtonSizeType
	addonAfter?: React.ReactNode
	addonBefore?: React.ReactNode
	onBlur?: React.FocusEventHandler<HTMLInputElement>
	onFocus?: React.FocusEventHandler<HTMLInputElement>
	onChange?: React.FocusEventHandler<HTMLInputElement>
	onInput?: React.FocusEventHandler<HTMLInputElement>
}

const InternalInput: React.ForwardRefRenderFunction<HTMLInputElement, Omit<InputProps, 'ref'>> = (props, ref) => {
	const [value, setValue] = useState<string | number>(props.value || '')

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
			return false
		}
		if (props.maxLength && evt.target.value.length <= props?.maxLength) {
			setValue(evt.target.value)
		} else {
			setValue(evt.target.value)
		}
		if (isFunction(props.onChange)) {
			props?.onChange(evt)
		}
	}
	const handleInput = (evt: React.FocusEvent<HTMLInputElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
			return false
		}
		if (props.maxLength && evt.target.value.length <= props?.maxLength) {
			setValue(evt.target.value)
		} else {
			setValue(evt.target.value)
		}
		if (isFunction(props.onInput)) {
			props?.onInput(evt)
		}
	}

	const className = classNames(
		`${NAME_SPACE}-input`,
		{
			'is-disabled': props.disabled,
			'is-focus': isFocus,
			[`${NAME_SPACE}-input--${props.size}`]: props.size && props.size !== 'default'
		},
		props.className
	)
	const wrapperClassName = classNames(`${NAME_SPACE}-input__wrapper`)
	const innerClassName = classNames(`${NAME_SPACE}-input__inner`)

	const handleClose = useCallback(() => {
		// 清除内容
		setValue('')
	}, [])
	// 后缀
	const suffixNode = useMemo(() => {
		const className = classNames(`${NAME_SPACE}-input__suffix`)
		if (!props.disabled && props.clearable) {
			return (
				<span className={className}>
					<CircleClose onClick={handleClose} />
				</span>
			)
		}
		if (!props.disabled && props.showCount) {
			const countInner = props.maxLength ? `${(value + '').length} / ${props.maxLength}` : (value + '').length
			return (
				<span className={className}>
					<span className={classNames(`${NAME_SPACE}-input__suffix-inner`)}>
						<span className={classNames(`${NAME_SPACE}-input__count`)}>
							<span className={classNames(`${NAME_SPACE}-input__count-inner`)}>{countInner}</span>
						</span>
					</span>
				</span>
			)
		}
		return null
	}, [props.disabled, props.maxLength, value, props.clearable, handleClose])

	const addonBeforeNode = useMemo(() => {
		return (
			props.addonBefore && <span className={classNames(`${NAME_SPACE}-input__addon-before`)}>{props.addonBefore}</span>
		)
	}, [props.addonBefore])

	const addonAfterNode = useMemo(() => {
		return (
			props.addonAfter && <span className={classNames(`${NAME_SPACE}-input__addon-after`)}>{props.addonAfter}</span>
		)
	}, [props.addonAfter])

	return (
		<div className={className} style={props.style}>
			{addonBeforeNode}
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
			{addonAfterNode}
		</div>
	)
}

const Input: React.ForwardRefExoticComponent<Omit<InputProps, 'ref'> & React.RefAttributes<HTMLInputElement>> =
	React.forwardRef(InternalInput)

export default Input
