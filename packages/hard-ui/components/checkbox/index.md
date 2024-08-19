---
category: Components
title: 单选框 Radio # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 6 # 分组排序，值越小越靠前
---

# Switch 按钮

`Radio` 组件我们推荐使用 `Group` 组件包裹，`Group` 提供 `value` 用作单选框值的选择，`Radio` 使用 `value` 用于指定当前单选框的值。

## 基础功能

<code src="./demo/basic.tsx"></code>

## 禁用状态

<code src="./demo/disabled.tsx"></code>

## 单选框组

生成单选框组。设置 `direction="vertical"` 可以展示竖向的单选框组

<code src="./demo/group.tsx"></code>
