---
category: Components
title: Input 输入框 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 2 # 分组排序，值越小越靠前
---

# Input 按钮

## 基础用法

```tsx
import { Button, Input } from 'hard-ui'
import React, { useState } from 'react'

const App: React.FC = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<div className='mb-4'>
				<Input value={count} style={{ width: '240px' }} />
				<Button onClick={() => setCount(count + 1)}>+1</Button>
			</div>
		</div>
	)
}

export default App
```

## 禁用状态​

通过 `disabled` 属性指定是否禁用 `Input` 组件

```tsx
import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Input placeholder='placeholder' disabled style={{ width: '240px' }} />
			</div>
		</div>
	)
}

export default App
```

## 一键清空​

使用 `clearable` 属性即可得到一个可一键清空的输入框

<code src="./demo/index.tsx"></code>
