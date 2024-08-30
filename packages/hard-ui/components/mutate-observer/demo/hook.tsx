import React, { useRef, useState } from 'react'
import { useMutateObserver } from '../hooks'

// 原生示例
const App: React.FC = () => {
	const [className, setClassName] = useState('aaa')

	setTimeout(() => {
		setClassName('bbb')
	}, 2000)

	const callback: MutationCallback = (mutations, observer) => {
		console.log(mutations, observer)
	}

	const ref = useRef<HTMLDivElement>(null)

	useMutateObserver(ref, callback)

	return (
		<div ref={ref}>
			<div className={className}>
				{className === 'aaa' ? (
					<div>aaa</div>
				) : (
					<div>
						<p>bbb</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
