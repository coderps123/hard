---
category: Components
title: 警告提示 Alert # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 消息提醒 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

# Alert 警告提示

用于页面中展示重要的提示信息。

## 基础用法​

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `primary`。

<code src="./demo/basic.tsx"></code>

## 主题​

Alert 组件提供了两个不同的主题：`light` 和 `dark`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

<code src="./demo/theme.tsx"></code>

## 自定义关闭按钮​

你可以自定义关闭按钮为文字或其他符号。

你可以设置 `Alert` 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 `closable` 属性决定 `Alert` 组件是否可关闭， 该属性接受一个 `Boolean`，默认为 `false`。你可以设置 `closeText` 属性来代替右侧的关闭图标， 需要注意的是 `closeText` 必须是一个字符串。 当 `Alert` 组件被关闭时会触发 `close` 事件。

<code src="./demo/close.tsx"></code>

## 使用图标​

你可以通过为 `Alert` 组件添加图标来提高可读性。

通过设置 `showIcon` 属性来显示 `Alert` 的 `icon`，这能更有效地向用户展示你的显示意图。

<code src="./demo/showIcon.tsx"></code>

## 文字居中​

使用 `center` 属性来让文字水平居中。
<code src="./demo/center.tsx"></code>

## 带图标和描述​

在最后, 这是一个带有图标和描述的例子。
<code src="./demo/description.tsx"></code>
