---
category: Components
title: Button css in js 实现 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

# Button 按钮

常用的操作按钮。

## 基础用法

<code src="./demo/basic.tsx"></code>

## 禁用状态​

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<code src="./demo/disabled.tsx"></code>

## 图标按钮​

<code src="./demo/icon.tsx"></code>

## 圆形按钮

<code src="./demo/circle.tsx"></code>

## 加载状态按钮

因时间原因待补充：后续将icons库全部改为可配置，通过props控制图标旋转动画。

<code src="./demo/loading.tsx"></code>

## 按钮组

<code src="./demo/group.tsx"></code>

## Button API

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

## Button.Group API

| 属性名    | 说明     | 类型                | 默认值 |
| --------- | -------- | ------------------- | ------ |
| type      | 类型     | enum                | --     |
| size      | 尺寸     | enum                | --     |
| children  | 子组件   | Component           | --     |
| className | css 类名 | string              | --     |
| style     | css 样式 | React.CSSProperties | --     |

<code src="./demo/basic.tsx"></code>

```

```
