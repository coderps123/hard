import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import IconBase, { IconProps } from '../components/IconBase'
import '../index.css'

const Svg = (props: IconProps) => {
	return (
		<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
			<path d='M908.288 694.784h-85.333333v-293.546667c0-174.208-138.752-315.904-309.333334-315.904s-309.333333 141.696-309.333333 315.904v293.546667h-85.333333v-293.546667C118.954667 180.010667 296.021333 0 513.621333 0s394.666667 180.010667 394.666667 401.237333v293.546667zM513.621333 1024c-77.568 0-140.672-63.488-140.672-141.525333v-22.229334h85.333334v22.229334c0 31.018667 24.832 56.192 55.338666 56.192s55.338667-25.216 55.338667-56.192v-22.229334h85.333333v22.229334c0 78.037333-63.104 141.525333-140.672 141.525333zM1.621333 694.784h1024v85.333333h-1024z'></path>
		</svg>
	)
}

const InternalSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconProps, 'ref'>> = (props, ref) => {
	const className = classNames(props.className, `${NAME_SPACE}-icon-info`)
	return <IconBase icon={Svg} {...omit(props, ['className'])} className={className} ref={ref} />
}

const Info: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = React.forwardRef(InternalSvg)

export default Info
