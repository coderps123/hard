---
category: Components
title: 挂载 Portal # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 工具组件 # 所在分组的名称
  order: 0 # 分组排序，值越小越靠前
---

# Portal 挂载

可以将组件挂载到任意的 `document` 标签下，默认挂载到 `document.body`

## API

| 属性名    | 说明     | 类型                           | 默认值          |
| --------- | -------- | ------------------------------ | --------------- |
| attach    | 类型     | `window.HTMLElement \| string` | `document.body` |
| children  | 子组件   | `Component`                    | --              |
| className | css 类名 | `string`                       | --              |
