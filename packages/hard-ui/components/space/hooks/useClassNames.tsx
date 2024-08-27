import cs from 'classnames'
import { useMemo } from 'react'
import { ConfigProps } from '../../config-provider'
import { SpaceProps } from '../Space'

interface ClassNamesProps extends SpaceProps, Partial<ConfigProps> {}

export const useClassNames = (props: ClassNamesProps) => {
	const { className, direction, wrap, align, getPrefixCls } = props

	return useMemo(() => {
		const prefixCls = getPrefixCls?.('space')

		const wrapCls = cs(
			prefixCls,
			{
				[`is-${direction}`]: direction,
				[`is-wrap`]: wrap,
				[`is-${align}`]: direction === 'vertical' && align
			},
			className
		)

		return {
			wrapCls,
			itemCls: `${prefixCls}-item`,
			splitCls: `${prefixCls}-split`
		}
	}, [className, direction, wrap, align])
}
