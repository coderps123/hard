import cs from 'classnames'
import { useContext, useMemo } from 'react'
import { ConfigProps } from '../../config-provider'
import { ButtonProps } from '../Button'
import { ButtonGroupContext } from '../ButtonGroup'

interface ClassNamesProps extends ButtonProps, Partial<ConfigProps> {}

export const useClassNames = (props: ClassNamesProps) => {
	const { className, type, size, plain, round, circle, disabled, text, bg, loading, getPrefixCls } = props

	const buttonGroupContext = useContext(ButtonGroupContext)

	const buttonType = useMemo(() => type ?? buttonGroupContext?.type ?? 'default', [type, buttonGroupContext?.type])
	const buttonSize = useMemo(() => size ?? buttonGroupContext?.size ?? 'default', [size, buttonGroupContext?.size])

	return useMemo(() => {
		const prefixCls = getPrefixCls?.('button')

		const wrapCls = cs(
			prefixCls,
			{
				[`${prefixCls}--${buttonType}`]: buttonType !== 'default' && buttonType,
				[`${prefixCls}--${buttonSize}`]: buttonSize !== 'default' && buttonSize,
				'is-plain': plain,
				'is-round': round,
				'is-circle': circle,
				'is-disabled': disabled,
				'is-text': text,
				'is-has-bg': bg,
				'is-loading': loading
			},
			className
		)

		return {
			wrapCls
		}
	}, [className, buttonType, buttonSize, plain, round, circle, disabled, text, bg, loading])
}
