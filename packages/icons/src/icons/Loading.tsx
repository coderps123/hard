import React from 'react'
import '../index.css'

interface CustomIconComponentProps {
	className?: string
	width?: number | string
	height?: number | string
	fill?: string
	viewBox?: string
	style?: React.CSSProperties
}

const IconSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<CustomIconComponentProps, 'ref'>> = (
	props,
	ref
) => {
	return (
		<span ref={ref} className='h-icon h-icon-plus'>
			<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
				<path
					d='M512 64c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04v192a31.168 31.168 0 0 1-8.96 23.04A31.168 31.168 0 0 1 512 320a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04v-192c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 512 64z m0 640c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04v192a31.168 31.168 0 0 1-8.96 23.04A31.168 31.168 0 0 1 512 960a31.168 31.168 0 0 1-23.04-8.96 31.168 31.168 0 0 1-8.96-23.04v-192c0-9.344 3.008-17.024 8.96-23.04A31.168 31.168 0 0 1 512 704z m448-192a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96h-192a31.168 31.168 0 0 1-23.04-8.96A31.168 31.168 0 0 1 704 512c0-9.344 3.008-17.024 8.96-23.04a31.168 31.168 0 0 1 23.04-8.96h192c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04zM320 512a31.168 31.168 0 0 1-8.96 23.04 31.168 31.168 0 0 1-23.04 8.96h-192a31.168 31.168 0 0 1-23.04-8.96A31.168 31.168 0 0 1 64 512c0-9.344 3.008-17.024 8.96-23.04a31.168 31.168 0 0 1 23.04-8.96h192c9.344 0 17.024 3.008 23.04 8.96 5.952 6.016 8.96 13.696 8.96 23.04zM195.008 195.008a33.408 33.408 0 0 1 23.04-8.96c8.64 0 16 2.944 22.016 8.96l135.936 136c6.016 6.656 9.024 14.208 9.024 22.528 0 8.32-3.2 15.616-9.536 21.952a30.08 30.08 0 0 1-21.952 9.536 32.96 32.96 0 0 1-22.528-8.96L195.008 240a29.952 29.952 0 0 1-8.96-22.016c0-8.64 2.944-16.32 8.96-22.976z m452.992 452.992a31.104 31.104 0 0 1 22.464-9.984c8.32 0 15.872 3.328 22.528 9.984l136 136c6.016 6.016 8.96 13.312 8.96 22.016a30.72 30.72 0 0 1-9.472 22.464 30.912 30.912 0 0 1-22.464 9.536 29.888 29.888 0 0 1-22.08-8.96l-136-136.064a31.104 31.104 0 0 1-9.984-22.464c0-8.32 3.328-15.808 9.984-22.464l0.064-0.064z m180.992-452.992c6.016 6.656 8.96 14.336 8.96 23.04 0 8.64-2.944 16-8.96 22.016l-136 135.936a32.832 32.832 0 0 1-22.464 9.024 30.272 30.272 0 0 1-22.08-9.536 30.08 30.08 0 0 1-9.472-21.952c0-8.32 3.008-15.872 8.96-22.528l136-136a29.952 29.952 0 0 1 22.08-8.96c8.64 0 16.32 2.944 22.976 8.96z m-452.992 452.992a31.104 31.104 0 0 1 10.048 22.464c0 8.32-3.392 15.872-10.048 22.528L240 828.992a29.952 29.952 0 0 1-22.016 8.96 30.72 30.72 0 0 1-22.528-9.472 30.912 30.912 0 0 1-9.472-22.464c0-8.704 2.944-16 8.96-22.08l136.064-136a31.104 31.104 0 0 1 22.464-9.984c8.32 0 15.808 3.328 22.528 9.984v0.064z'
					fill={props.fill ?? 'currentColor'}
				></path>
			</svg>
		</span>
	)
}

const Icon: React.ForwardRefExoticComponent<
	Omit<CustomIconComponentProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, CustomIconComponentProps>(IconSvg)

export default Icon
