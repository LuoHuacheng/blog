# 盒模型

:::tip 简述一下盒子模型
什么是盒子模型？怎么设置不同的盒模型？
:::

## 定义

- 盒模型是 CSS 规范中的一个模块，规定浏览器渲染时将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性。
- 盒模型从内到外分为 width/height -> padding -> border -> margin

## 如何设置

通过 CSS 属性 _box-sizing: content-box | border-box | inherit;_ 来设置

### W3C 标准盒模型

属性 width，height 只包含内容 content，不包含 border 和 padding，其 _box-sizing_ 属性是 _content-box_

### IE 怪异盒模型

属性 width，height 包含 border 和 padding，指的是 _content + padding + border_ ，其 _box-sizing_ 属性是 _border-box_

## 获取元素尺寸

- `dom.style.width/height` 只能获取内联样式
- `dom.currentStyle.width/height` 获取所有样式宽高，只有 IE 支持
- `window.getComputedStyle(dom)` 获取所有样式宽高，现代浏览器支持
- `dom.getBoundingClientRect()` 返回元素的宽高及相对于视口的位置

:::warning 注意
浏览器渲染页面是根据 html 页面头部的 _DOCTYPE_ 声明来执行的，所以开发时一定要声明页面的 _DOCTYPE_
:::
