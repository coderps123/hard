import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import '../index.scss'

export interface IconBaseProps {
	className?: string
	style?: React.CSSProperties
	width?: number | string
	height?: number | string
	fill?: string
	spin?: boolean
	viewBox?: string
	onClick?: React.MouseEventHandler
	onMouseDown?: React.MouseEventHandler
	icon: (props: IconProps) => React.JSX.Element
}

export interface IconProps extends Omit<IconBaseProps, 'icon'> {}

const InternalIconBase: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconBaseProps, 'ref'>> = (props, ref) => {
	const className = classNames(`${NAME_SPACE}-icon`, { 'is-spin': props.spin }, props.className)
	const svgProps = omit(props, ['className', 'style', 'icon', 'spin'])

	const { icon: IconSvgComp } = props

	return (
		<span ref={ref} className={className}>
			<IconSvgComp viewBox='0 0 1024 1024' width='1em' height='1em' fill='currentColor' {...svgProps} />
		</span>
	)
}

const BaseIcon: React.ForwardRefExoticComponent<Omit<IconBaseProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = React.forwardRef(InternalIconBase)

export default BaseIcon
