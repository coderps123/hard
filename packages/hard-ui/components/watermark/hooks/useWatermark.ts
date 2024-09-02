import { WatermarkProps } from '../Watermark'

export interface WatermarkOpions extends Omit<WatermarkProps, 'className' | 'style' | 'children'> {}

const defaultOptions = {
	rotate: -20,
	zIndex: 1,
	width: 100,
	gap: [100, 100],
	fontStyle: {
		fontSize: '16px',
		color: 'rgba(0, 0, 0, 0.15)',
		fontFamily: 'sans-serif',
		fontWeight: 'normal'
	},
	getContainer: () => document.body
}
console.log(defaultOptions)

const useWaterMark = (params: WatermarkOpions) => {
	console.log(params)

	const generatorWaterMark = () => {}

	// getCanvensData()

	return {
		generatorWaterMark
	}
}

export default useWaterMark
