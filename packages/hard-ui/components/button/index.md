---
category: Components
title: Button 按钮 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```tsx
import { Button } from 'hard-ui'
import { Plus, Edit, Search, Delete } from '@hard-ui/icons'
import React from 'react'
import './style'

const App: React.FC = () => (
	<div>
		<div className='mb-10'>
			<Button>Default</Button>
			<Button type='primary'>Primary</Button>
			<Button type='success'>Success</Button>
			<Button type='info'>Info</Button>
			<Button type='warning'>Warning</Button>
			<Button type='danger'>Danger</Button>
		</div>

		<div className='mb-10'>
			<Button plain>Plain</Button>
			<Button type='primary' plain>
				Primary
			</Button>
			<Button type='success' plain>
				Success
			</Button>
			<Button type='info' plain>
				Info
			</Button>
			<Button type='warning' plain>
				Warning
			</Button>
			<Button type='danger' plain>
				Danger
			</Button>
		</div>

		<div className='mb-10'>
			<Button round>Round</Button>
			<Button type='primary' round>
				Primary
			</Button>
			<Button type='success' round>
				Success
			</Button>
			<Button type='info' round>
				Info
			</Button>
			<Button type='warning' round>
				Warning
			</Button>
			<Button type='danger' round>
				Danger
			</Button>
		</div>

		<div className='mb-10'>
			<Button icon={<Edit />} circle />
			<Button icon={<Edit />} type='primary' circle />
			<Button icon={<Edit />} type='success' circle />
			<Button icon={<Edit />} type='info' circle />
			<Button icon={<Edit />} type='warning' circle />
			<Button icon={<Edit />} type='danger' circle />
		</div>
	</div>
)

export default App
```

## 禁用状态​

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

```tsx
import { Button } from 'hard-ui'
import React from 'react'
import './style'

const App: React.FC = () => (
	<div>
		<div className='mb-10'>
			<Button disabled>Default</Button>
			<Button type='primary' disabled>
				Primary
			</Button>
			<Button type='success' disabled>
				Success
			</Button>
			<Button type='info' disabled>
				Info
			</Button>
			<Button type='warning' disabled>
				Warning
			</Button>
			<Button type='danger' disabled>
				Danger
			</Button>
		</div>
		<div>
			<Button plain disabled>
				Plain
			</Button>
			<Button type='primary' plain disabled>
				Primary
			</Button>
			<Button type='success' plain disabled>
				Success
			</Button>
			<Button type='info' plain disabled>
				Info
			</Button>
			<Button type='warning' plain disabled>
				Warning
			</Button>
			<Button type='danger' plain disabled>
				Danger
			</Button>
		</div>
	</div>
)

export default App
```

# 文字按钮​

没有边框和背景色的按钮。

```tsx
import { Button } from 'hard-ui'
import React from 'react'
import './style'

const App: React.FC = () => {
	const buttons = [
		{ type: '', text: 'plain' },
		{ type: 'primary', text: 'primary' },
		{ type: 'success', text: 'success' },
		{ type: 'info', text: 'info' },
		{ type: 'warning', text: 'warning' },
		{ type: 'danger', text: 'danger' }
	] as const
	return (
		<div>
			<div className='mb-10'>
				{buttons.map((button) => {
					return (
						<Button key={button.text} type={button.type} text>
							{button.text}
						</Button>
					)
				})}
			</div>
			<div className='mb-10'>
				{buttons.map((button) => {
					return (
						<Button key={button.text} type={button.type} text bg>
							{button.text}
						</Button>
					)
				})}
			</div>
			<div className='mb-10'>
				{buttons.map((button) => {
					return (
						<Button key={button.text} type={button.type} text disabled>
							{button.text}
						</Button>
					)
				})}
			</div>
		</div>
	)
}

export default App
```

# 图标按钮​

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

```tsx
import { Button } from 'hard-ui'
import { Plus, Edit, Search, Delete } from '@hard-ui/icons'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Button type='primary' icon={<Edit />} />
				<Button type='primary' icon={<Plus />} />
				<Button type='primary' icon={<Delete />} />
				<Button type='primary' icon={<Search />}>
					Search
				</Button>
				<Button type='primary'>
					Upload <Plus className='h-icon--right' />
				</Button>
			</div>
		</div>
	)
}

export default App
```

# 按钮组

```tsx
import { Plus, Delete, Edit } from '@hard-ui/icons'
import { Button } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Button.Group type='primary'>
				<Button icon={<Plus />}>Previous Page</Button>
				<Button>
					Next Page
					<Plus className='h-icon--right' />
				</Button>
			</Button.Group>

			<Button.Group className='ml-10'>
				<Button type='primary' icon={<Delete />}></Button>
				<Button type='primary'>
					<Edit />
				</Button>
				<Button type='primary'>
					<Plus />
				</Button>
			</Button.Group>
		</div>
	)
}

export default App
```

# 加载状态按钮

```tsx
import { Plus } from '@hard-ui/icons'
import { Button } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Button type='primary' loading>
					Primary
				</Button>
				<Button type='primary' loading icon={<Plus />}>
					Primary
				</Button>
			</div>
		</div>
	)
}

export default App
```

# 调整尺寸​

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

```tsx
import { Plus, Search } from '@hard-ui/icons'
import { Button } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-10'>
				<Button size='large'>Large</Button>
				<Button>Default</Button>
				<Button size='small'>Small</Button>
				<Button size='large' icon={<Search />}>
					Search
				</Button>
				<Button icon={<Search />}>Search</Button>
				<Button size='small' icon={<Search />}>
					Search
				</Button>
			</div>
			<div className='mb-10'>
				<Button size='large' round>
					Large
				</Button>
				<Button round>Default</Button>
				<Button size='small' round>
					Small
				</Button>
				<Button size='large' icon={<Search />} round>
					Search
				</Button>
				<Button icon={<Search />} round>
					Search
				</Button>
				<Button size='small' icon={<Search />} round>
					Search
				</Button>
			</div>
			<div>
				<Button icon={<Search />} size='large' circle />
				<Button icon={<Search />} circle />
				<Button icon={<Search />} size='small' circle />
			</div>
		</div>
	)
}

export default App
```

<!-- <API id="Button"></API> -->
