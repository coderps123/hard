import classNames from 'classnames'
import { useMemo } from 'react'
import { NAME_SPACE } from '../../../config'
import { AlertProps } from '../Alert'

interface ClassNamesProps extends AlertProps {}

export const useClassNames = (props: ClassNamesProps) => {
	const { className, type, effect, center, description, children } = props

	const isBigIcon = useMemo(() => (description || children ? 'is-big' : ''), [description, children])

	return useMemo(() => {
		const wrapCls = classNames(`${NAME_SPACE}-alert`, {
			[`${NAME_SPACE}-alert--${type}`]: true,
			[`is-${effect}`]: true,
			'is-center': center,
			className
		})
		const contentCls = `${NAME_SPACE}-alert__content`
		const titleCls = classNames(`${NAME_SPACE}-alert__title`, { 'with-description': description })
		const descriptionCls = `${NAME_SPACE}-alert__description`
		const iconCls = classNames(`${NAME_SPACE}-icon ${NAME_SPACE}-alert__icon`, isBigIcon)
		const closeTextCls = `${NAME_SPACE}-alert__close-btn is-customed`
		const closeBtnCls = `${NAME_SPACE}-icon ${NAME_SPACE}-alert__close-btn`

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
