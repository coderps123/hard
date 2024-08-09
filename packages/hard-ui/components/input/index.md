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
import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Input style={{ width: '240px' }} />
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

```tsx
import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Input placeholder='placeholder' clearable style={{ width: '240px' }} />
			</div>
		</div>
	)
}

export default App
```

## 输入长度限制

使用 `maxlength` 属性, 来控制输入内容的最大字数。 "字符数"使用JavaScript字符串长度来衡量。

使用 `showCount` 控制是否展示字数

```tsx
import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		console.log('Change:', e.target.value)
	}
	return (
		<div>
			<div>
				<Input className='mb-10' showCount maxLength={20} onChange={onChange} />
				<Input className='mb-10' maxLength={20} onChange={onChange} />
				<Input className='mb-10' showCount onChange={onChange} />
			</div>
		</div>
	)
}

export default App
```

## 尺寸​

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

<code src="./demo/index.tsx"></code>
