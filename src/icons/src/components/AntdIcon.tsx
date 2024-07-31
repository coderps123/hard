import React, { RefAttributes } from 'react'
import ReactIcon from './IconBase'

export interface AntdIconProps {
	rotate?: number
	spin?: boolean
	style?: React.CSSProperties
}

interface IconComponentProps extends AntdIconProps {
	icon: React.ReactNode
}

const AntdIcon: React.ForwardRefExoticComponent<
	RefAttributes<HTMLSpanElement> & IconComponentProps
> = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
	console.log(props)

	return (
		<span role='img' ref={ref}>
			<ReactIcon icon={props.icon} />
		</span>
	)
})

export default AntdIcon
