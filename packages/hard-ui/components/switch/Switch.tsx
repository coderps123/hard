import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import React, { useState } from 'react'
import { ButtonSizeType } from '../button/ButtonHelpers'
import './style'

export interface SwitchProps {
	className?: string
	style?: React.CSSProperties
	checked?: boolean
	disabled?: boolean
	size?: ButtonSizeType
	checkedChildren?: React.ReactNode
	unCheckedChildren?: React.ReactNode
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
	const { disabled = false, size = 'default', checkedChildren, unCheckedChildren } = props
	const [checked, setChecked] = useState<boolean>(() => !!props.checked)

	const className = classNames(
		`${NAME_SPACE}-switch`,
		{
			'is-checked': checked,
			'is-disabled': disabled,
			[`${NAME_SPACE}-switch-${size}`]: size !== 'default'
		},
		props.className
	)

	const handleClick = () => {
		if (disabled) return
		setChecked(!checked)
	}

	return (
		<button type='button' className={className} style={props.style} ref={ref} onClick={handleClick}>
			<span className={classNames(`${NAME_SPACE}-switch-handle`)}></span>
			{(checkedChildren || unCheckedChildren) && (
				<span className={classNames(`${NAME_SPACE}-switch-inner`)}>
					{checkedChildren && checked && checkedChildren}
					{unCheckedChildren && !checked && unCheckedChildren}
				</span>
			)}
		</button>
	)
})

export default Switch
