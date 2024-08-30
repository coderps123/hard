import cs from 'classnames'
import { useMemo } from 'react'
import { ConfigProps } from '../../config-provider'
import { AlertProps } from '../Alert'

interface ClassNamesProps extends AlertProps {
	getPrefixCls: ConfigProps['getPrefixCls']
	prefix: ConfigProps['prefix']
}

export const useClassNames = (props: ClassNamesProps) => {
	const { className, type, effect, center, description, children, getPrefixCls, prefix } = props

	const isBigIcon = useMemo(() => (description || children ? 'is-big' : ''), [description, children])

	return useMemo(() => {
		const prefixCls = getPrefixCls('alert')

		const wrapCls = cs(prefixCls, {
			[`${prefixCls}--${type}`]: true,
			[`is-${effect}`]: true,
			'is-center': center,
			className
		})
		const contentCls = `${prefixCls}__content`
		const titleCls = cs(`${prefixCls}__title`, { 'with-description': description })
		const descriptionCls = `${prefixCls}__description`
		const iconCls = cs(`${prefix}-icon ${prefixCls}__icon`, isBigIcon)
		const closeTextCls = `${prefixCls}__close-btn is-customed`
		const closeBtnCls = `${prefix}-icon ${prefixCls}__close-btn`

		return {
			wrapCls,
			contentCls,
			titleCls,
			descriptionCls,
			iconCls,
			closeTextCls,
			closeBtnCls
		}
	}, [className, type, effect, center, description, children])
}
