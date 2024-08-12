---
category: Components
title: Input # 组件的标题，会在菜单侧边栏展示
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

```tsx
import { Search } from '@hard-ui/icons'
import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div>
				<Input style={{ width: '340px', marginTop: '10px' }} size='large' placeholder='Please Input' />
				<Input style={{ width: '340px', marginTop: '10px', marginLeft: '10px' }} placeholder='Please Input' />
				<Input
					style={{ width: '340px', marginTop: '10px', marginLeft: '10px' }}
					size='small'
					placeholder='Please Input'
				/>
			</div>
			<div>
				<Input
					style={{ width: '340px', marginTop: '10px' }}
					size='large'
					placeholder='Please Input'
					addonBefore='http://'
					addonAfter='.com'
				/>
				<Input
					v-model='input1'
					style={{ width: '340px', marginTop: '10px', marginLeft: '10px' }}
					placeholder='Please Input'
					addonBefore='http://'
					addonAfter='.com'
				/>
				<Input
					style={{ width: '340px', marginTop: '10px', marginLeft: '10px' }}
					size='small'
					placeholder='Please Input'
					addonAfter={<Search />}
				/>
			</div>
		</div>
	)
}

export default App
```

## 密码框

<code src="./demo/index.tsx"></code>

## Input API

| 属性名    | 说明                   | 类型                | 默认值 |
| --------- | ---------------------- | ------------------- | ------ |
| type      | 类型                   | enum                | --     |
| size      | 尺寸                   | enum                | --     |
| plain     | 是否为朴素按钮         | boolean             | false  |
| text      | 是否为文字按钮         | boolean             | false  |
| bg        | 是否显示文字按钮背景色 | boolean             | false  |
| link      | 是否为连接按钮         | boolean             | false  |
| round     | 是否为圆角按钮         | boolean             | false  |
| circle    | 是否为圆形按钮         | boolean             | false  |
| loading   | 是否为加载中状态       | boolean             | false  |
| disabled  | 是否禁用               | boolean             | false  |
| icon      | 图标组件               | string / Component  | --     |
| htmlType  | 原生 `type` 属性       | enum                | button |
| onClick   | 点击事件               | Functon             | --     |
| children  | 子组件                 | Component           | --     |
| className | css 类名               | string              | --     |
| style     | css 样式               | React.CSSProperties | --     |
