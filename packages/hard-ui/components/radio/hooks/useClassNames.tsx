import cs from 'classnames'
import { useMemo } from 'react'
import { ConfigProps } from '../../config-provider'

interface ClassNamesProps {
	className?: string
	checked: boolean
	disabled: boolean
	getPrefixCls: ConfigProps['getPrefixCls']
}

export const useClassNames = (props: ClassNamesProps) => {
	const { className, disabled, checked, getPrefixCls } = props

	return useMemo(() => {
		const prefixCls = getPrefixCls?.('radio')

		const wrapCls = cs(
			prefixCls,
			{
				'is-checked': checked,
				'is-disabled': disabled
			},
			className
		)

		return {
			wrapCls,
			inputWrapCls: `${prefixCls}__input`,
			originalCls: `${prefixCls}__original`,
			innerlCls: `${prefixCls}__inner`,
			labalCls: `${prefixCls}__label`
		}
	}, [className, disabled, checked])
}
