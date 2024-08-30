import { MutateObserver } from 'hard-ui'
import React, { useState } from 'react'

const App: React.FC = () => {
	const [className, setClassName] = useState('aaa')

	setTimeout(() => {
		setClassName('bbb')
	}, 2000)

	const callback: MutationCallback = (mutations, observer) => {
		console.log(mutations, observer)
	}

	return (
		<MutateObserver onMutate={callback}>
			<div>
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
		</MutateObserver>
	)
}

export default App
