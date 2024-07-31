import React from 'react'

interface CustomIconComponentProps {
	className?: string
	width?: number | string
	height?: number | string
	fill?: string
	viewBox?: string
	style?: React.CSSProperties
}

const DeleteSvg: React.ForwardRefRenderFunction<
	HTMLSpanElement,
	Omit<CustomIconComponentProps, 'ref'>
> = (props, ref) => (
	<span ref={ref} className='h-icon h-icon-delete'>
		<svg
			viewBox='0 0 1024 1024'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			{...props}
		>
			<path
				fill={props.fill ?? 'currentColor'}
				d='M160 256h-64a31.168 31.168 0 0 1-23.04-8.96A31.168 31.168 0 0 1 64 224c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 96 192h256V96c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 384 64h256c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04V192h256c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96h-64v672a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96H192a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04V256z m448-64V128h-192v64h192z m-384 704h576V256h-576v640z m192-128a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04v-320c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 416 384c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04v320a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96z m192 0a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04v-320c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 608 384c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04v320a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96z'
			></path>
		</svg>
	</span>
)

const Delete: React.ForwardRefExoticComponent<
	Omit<CustomIconComponentProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, CustomIconComponentProps>(DeleteSvg)

export default Delete
