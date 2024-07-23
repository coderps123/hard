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

<code src="./demo/base.tsx"></code>

## 禁用状态

按钮不可用状态。

<code src="./demo/disabled.tsx"></code>

## 文字按钮

没有边框和背景色的按钮。

<code src="./demo/text.tsx"></code>

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加 标签来添加图标， 你也可以使用自定义图标。

<code src="./demo/icon.tsx"></code>

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 `<Button.Group>` 对多个按钮分组。

<code src="./demo/group.tsx"></code>
