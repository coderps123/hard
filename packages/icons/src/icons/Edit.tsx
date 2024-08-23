import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import IconBase, { IconProps } from '../components/IconBase'

const Svg = (props: IconProps) => {
	return (
		<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
			<path d='M832 512c0-9.344 3.008-17.024 8.96-23.04a31.168 31.168 0 0 1 23.04-8.96c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04v352a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96h-704a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04v-704c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 160 128H512c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04a31.168 31.168 0 0 1-8.96 23.04A31.168 31.168 0 0 1 512 192H192v640h640V512z m-361.984 41.984l52.992-6.976 324.032-324.992a30.08 30.08 0 0 0 8.512-30.528 29.76 29.76 0 0 0-22.528-22.464 29.824 29.824 0 0 0-31.04 8L476.992 500.992l-6.976 52.992z m421.952-422.016c18.688 18.688 28.032 41.216 28.032 67.52 0 26.304-9.344 49.152-28.032 68.48L561.088 599.04a35.328 35.328 0 0 1-19.008 10.048l-105.024 14.976a30.208 30.208 0 0 1-27.008-9.472 32.128 32.128 0 0 1-8.96-27.52l14.976-104.96a26.176 26.176 0 0 1 8.96-18.048l332.032-331.968a94.144 94.144 0 0 1 67.52-28.032c25.6 0 48.128 9.344 67.456 28.032z'></path>
		</svg>
	)
}

const InternalSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconProps, 'ref'>> = (props, ref) => {
	const className = classNames(props.className, `${NAME_SPACE}-icon-edit`)
	return <IconBase icon={Svg} {...omit(props, ['className'])} className={className} ref={ref} />
}

const Edit: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = React.forwardRef(InternalSvg)

export default Edit
