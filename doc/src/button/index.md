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

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx"></code>

## 禁用状态

按钮不可用状态。

<code src="./demo/disabled.tsx"></code>

## APi

<!-- 会生成api表格 -->

| 属性 | 类型      | 默认值    | 必填     | 说明  |
| ---- | --------- | --------- | -------- | ----- | -------- |
| type | 'primary' | 'default' | 'default | false | 按钮类型 |
