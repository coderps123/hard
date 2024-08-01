import React from 'react'

interface CustomIconComponentProps {
	className?: string
	width?: number | string
	height?: number | string
	fill?: string
	viewBox?: string
	style?: React.CSSProperties
}

const PlusSvg: React.ForwardRefRenderFunction<
	HTMLSpanElement,
	Omit<CustomIconComponentProps, 'ref'>
> = (props, ref) => {
	return (
		<span ref={ref} className='h-icon h-icon-plus'>
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
					d='M512 96a32 32 0 0 0-32 32v352H128a32 32 0 0 0 0 64h352V896a32 32 0 0 0 64 0V544H896a32 32 0 0 0 0-64H544V128a32 32 0 0 0-32-32z'
				></path>
			</svg>
		</span>
	)
}

const Plus: React.ForwardRefExoticComponent<
	Omit<CustomIconComponentProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, CustomIconComponentProps>(PlusSvg)

export default Plus
