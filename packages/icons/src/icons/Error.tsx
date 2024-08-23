import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import IconBase, { IconProps } from '../components/IconBase'

const Svg = (props: IconProps) => {
	return (
		<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
			<path d='M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-938.666667C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z m198.698667 625.365334a42.666667 42.666667 0 0 1-60.330667 0L512 572.330667l-138.368 138.368a42.666667 42.666667 0 0 1-60.330667-60.330667L451.669333 512 313.301333 373.632a42.666667 42.666667 0 0 1 60.330667-60.330667L512 451.669333l138.368-138.368a42.624 42.624 0 1 1 60.330667 60.330667L572.330667 512l138.368 138.368a42.666667 42.666667 0 0 1 0 60.330667z'></path>
		</svg>
	)
}

const InternalSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconProps, 'ref'>> = (props, ref) => {
	const className = classNames(props.className, `${NAME_SPACE}-icon-error`)
	return <IconBase icon={Svg} {...omit(props, ['className'])} className={className} ref={ref} />
}

const Error: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = React.forwardRef(InternalSvg)

export default Error
