import React, { useCallback, useMemo, useState } from 'react'
import { InputProps } from './Input'
import classNames from 'classnames'
import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import { isFunction } from 'radash'
import { CircleClose } from '@hard-ui/icons'

export interface TextAreaProps
	extends Omit<
		InputProps<HTMLTextAreaElement>,
		'type' | 'size' | 'addonBefor' | 'addonAfter' | 'onAddonBeforeClick' | 'onAddonAfterClick'
	> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
	const { maxLength, showCount } = props

	const [value, setValue] = useState(props.value)
	const [focus, setFocus] = useState<boolean>(false)
	const isFocus = useMemo(() => focus, [focus])
	console.log(isFocus)

	const handleBlur = (evt: React.FocusEvent<HTMLTextAreaElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
		}
		setFocus(false)
		if (isFunction(props.onBlur)) {
			props?.onBlur(evt)
		}
	}
	const handleFocus = (evt: React.FocusEvent<HTMLTextAreaElement>) => {
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
	const handleChange = (evt: React.FocusEvent<HTMLTextAreaElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
			return false
		}
		if (isFunction(props.onChange)) {
			props?.onChange(evt)
		}
		if (props.maxLength) {
			if (evt.target.value.length <= props?.maxLength) {
				setValue(evt.target.value)
			}
		} else {
			setValue(evt.target.value)
		}
	}
	const handleInput = (evt: React.FocusEvent<HTMLTextAreaElement>) => {
		if (props.disabled) {
			evt.stopPropagation()
			evt.preventDefault()
			return false
		}
		if (isFunction(props.onInput)) {
			props?.onInput(evt)
		}
		if (props.maxLength) {
			if (evt.target.value.length <= props?.maxLength) {
				setValue(evt.target.value)
			}
		} else {
			setValue(evt.target.value)
		}
	}

	const countInner = useMemo(() => {
		if (showCount) {
			return maxLength ? (maxLength ? `${(value + '').length} / ${maxLength}` : (value + '').length) : ''
		}
	}, [showCount, maxLength, value])

	const omitedProps = {
		...props
	}
	console.log(omitedProps)

	const className = classNames(
		`${NAME_SPACE}-textarea`,
		{
			'is-disabled': props.disabled
		},
		props.className
	)
	const innerClassName = classNames(`${NAME_SPACE}-textarea__inner`)

	const handleClose = useCallback(() => {
		// 清除内容
		setValue('')
	}, [])

	// 后缀图标
	const suffixNode = useMemo(() => {
		const className = classNames(`${NAME_SPACE}-textarea__suffix`)
		if (!props.disabled && props.clearable) {
			return (
				<span className={className}>
					<CircleClose onClick={handleClose} />
				</span>
			)
		}
		return null
	}, [props.disabled, props.suffix, props.maxLength, value, props.clearable, handleClose])

	return (
		<div className={className} style={props.style} data-count={countInner}>
			<textarea
				value={value}
				className={innerClassName}
				ref={ref}
				rows={4}
				placeholder={props.placeholder}
				disabled={props.disabled}
				onBlur={handleBlur}
				onFocus={handleFocus}
				onChange={handleChange}
				onInput={handleInput}
			></textarea>
			{suffixNode}
		</div>
	)
})

export default TextArea
