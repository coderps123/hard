import { Portal } from 'hard-ui'
import React, { useEffect, useRef } from 'react'

const App: React.FC = () => {
	const ref = useRef(null)

	useEffect(() => {
		console.log(ref)
	}, [])

	return (
		<Portal ref={ref} className='portal-test'>
			123
		</Portal>
	)
}

export default App
