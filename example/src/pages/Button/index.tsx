import { Button } from 'hard'

export const ButtonPage = () => {
	return (
		<div>
			{/* default */}
			<div>
				<Button>Default</Button>
				<Button type='primary'>Primary</Button>
				<Button type='success'>Success</Button>
				<Button type='warning'>Warning</Button>
				<Button type='danger'>Danger</Button>
				<Button type='info'>Info</Button>
			</div>

			{/* plain */}
			<div>
				<Button plain>Default</Button>
				<Button plain type='primary'>
					Primary
				</Button>
				<Button plain type='success'>
					Success
				</Button>
				<Button plain type='warning'>
					Warning
				</Button>
				<Button plain type='danger'>
					Danger
				</Button>
				<Button plain type='info'>
					Info
				</Button>
			</div>

			{/* round */}
			<div>
				<Button round>Default</Button>
				<Button round type='primary'>
					Primary
				</Button>
				<Button round type='success'>
					Success
				</Button>
				<Button round type='warning'>
					Warning
				</Button>
				<Button round type='danger'>
					Danger
				</Button>
				<Button round type='info'>
					Info
				</Button>
			</div>

			{/* circle */}
			<div>
				<Button circle>Default</Button>
				<Button circle type='primary'>
					Primary
				</Button>
				<Button circle type='success'>
					Success
				</Button>
				<Button circle type='warning'>
					Warning
				</Button>
				<Button circle type='danger'>
					Danger
				</Button>
				<Button circle type='info'>
					Info
				</Button>
			</div>
		</div>
	)
}
