---
category: Components
title: 输入框 Input # 组件的标题，会在菜单侧边栏展示
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

```tsx
import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div>
				<Input.Password value='1234' style={{ width: '240px' }} />
				<Input.Password
					value='1234'
					visibilityToggle={{
						visible: true,
						onVisibleChange(visible) {
							console.log(visible)
						}
					}}
					iconRender={(visible) => (visible ? 123 : 456)}
					style={{ width: '240px' }}
				/>
			</div>
		</div>
	)
}

export default App
```

## 文本域

<code src='./demo/index.tsx'> </code>

## Input API

| 属性名             | 说明                   | 类型                            | 默认值    |
| ------------------ | ---------------------- | ------------------------------- | --------- |
| value              | 值                     | `string` \| `number`            | --        |
| type               | 类型                   | `HTMLInputTypeAttribute`        | `text`    |
| size               | 尺寸                   | `large` \| `default` \| `small` | `default` |
| placeholder        | 水印                   | `string`                        | --        |
| disabled           | 是否禁用               | `boolean`                       | `false`   |
| clearable          | 是否展示清除图标       | `boolean`                       | `false`   |
| showCount          | 是否展示字数           | `boolean`                       | `false`   |
| maxLength          | 最大输入长度           | `boolean`                       | `false`   |
| suffix             | 后缀                   | `ReactNode`                     | `false`   |
| addonAfter         | 设置后置标签           | `ReactNode`                     | --        |
| addonBefore        | 设置前置标签           | `ReactNode`                     | --        |
| onBlur             | 输入框失焦时的回调     | `function(e)`                   | --        |
| onFocus            | 输入框焦时的回调       | `function(e)`                   | --        |
| onChange           | 输入框内容变化时的回调 | `function(e)`                   | --        |
| onInput            | 输入框内容变化时的回调 | `function(e)`                   | --        |
| onAddonBeforeClick | 前置标签点击时的回调   | `function(e)`                   | --        |
| onAddonAfterClick  | 后置标签点击时的回调   | `function(e)`                   | --        |
| children           | 子组件                 | `Component`                     | --        |
| className          | css 类名               | `string`                        | --        |
| style              | css 样式               | `React.CSSProperties`           | --        |

## Input.Password API

| 属性名           | 说明             | 类型                            | 默认值                                         |
| ---------------- | ---------------- | ------------------------------- | ---------------------------------------------- |
| visibilityToggle | 是否显示切换图标 | `boolean` \| `VisibilityToggle` | `true`                                         |
| iconRender       | 自定义切换按钮   | `(visible) => ReactNode`        | `(visible) => (visible ? <View /> : <Hide />)` |
