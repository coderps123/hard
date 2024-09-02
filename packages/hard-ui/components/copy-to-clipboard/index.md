---
category: Components
title: 复制 CopyToClipboard # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 工具组件 # 所在分组的名称
  order: 2 # 分组排序，值越小越靠前
---

# CopyToClipboard 复制粘贴

<code src="./demo/basic"></code>

## API

| 属性名   | 说明           | 类型                                     | 默认值          |
| -------- | -------------- | ---------------------------------------- | --------------- |
| text     | 文本内容       | `string`                                 | `document.body` |
| options  | 复制的选项     | `Options`                                | `{ }`           |
| onCopy   | 复制的回调函数 | `(text: string, state: boolean) => void` | `() => {}`      |
| children | 子组件         | `Component`                              | --              |
