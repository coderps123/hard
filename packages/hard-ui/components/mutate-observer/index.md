---
category: Components
title: 监听 MutateObserver # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 工具组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

# MutateObserver 监听子节点

用于监听指定的 `DOM` 节点所发生的变化。

## 组件方式

<code src='./demo/component'></code>

## hook 方式

<code src='./demo/hook'></code>

## API

| 属性名   | 说明                        | 类型                                                                | 默认值           |
| -------- | --------------------------- | ------------------------------------------------------------------- | ---------------- |
| options  | 监听选项                    | `MutationObserverInit`                                              | `defaultOptions` |
| onMutate | 监听事件回调                | `(mutations: MutationRecord[], observer: MutationObserver) => void` | `() => {}`       |
| children | 子组件，需要监听的 DOM 节点 | `React.ReactElement`                                                | --               |
