# 多栏布局

:::tip 三栏布局，左右侧固定宽度，中间宽度自适应
有哪几种方法？分别基于什么原理？各自又有什么优缺点？
:::

## 浮动

> - 原理：元素浮动，脱离文档流
> - 注意事项：如果总宽度小于左右以及中间元素的内容宽度之和，布局会被破坏变的混乱
> - 优点：兼容性好

### 普通浮动

> - 要求：**需要将中间的元素放在最后，否则右边的元素会下沉到中间元素的下方，并且要使用 _margin_ 为中间元素设置宽度**
> - 缺点：影响 dom 渲染顺序，当三个元素高度不一致时显示丑陋

```html
<article class="layout float">
  <div class="left">左</div>
  <div class="right">右</div>
  <div class="center">中</div>
</article>
```

```css
.layout.float .left {
  float: left;
  width: 300px;
  background-color: red;
}
.layout.float .right {
  float: right;
  width: 300px;
  background-color: blue;
}
.layout.float .center {
  margin: 0 300px;
  background-color: green;
}
```

### 创建 BFC

> - 要求：**需要将中间的元素放在最后，使用 _overflow: hidden;_ 创建 BFC**
> - 缺点：影响 dom 渲染顺序，当三个元素高度不一致时显示丑陋
> - [BFC](/basic/2-box/)的内容会在第 2 章盒模型中详细讲解

```html
<article class="layout bfc">
  <div class="left">左</div>
  <div class="right">右</div>
  <div class="center">中</div>
</article>
```

```css
.layout.bfc .left {
  float: left;
  width: 300px;
  background-color: red;
}
.layout.bfc .right {
  float: right;
  width: 300px;
  background-color: blue;
}
.layout.bfc .center {
  overflow: hidden;
  background-color: green;
}
```

### 双飞翼布局

> - 要求：**需要将中间的元素包裹起来并放在最前**
> - 原理：利用负 _margin_ 值
> - 优点：可以使中间的元素优先渲染
> - 缺点：dom 结构稍复杂，当三个元素高度不一致时显示丑陋

```html
<div class="content">
  <div class="center">中</div>
</div>
<div class="left">左</div>
<div class="right">右</div>
```

```css
.content {
  float: left;
  width: 100%;
}
.center {
  margin: 0 300px;
  height: 100px;
  background-color: green;
}
.left {
  float: left;
  width: 300px;
  height: 100px;
  margin-left: -100%;
  background-color: red;
}
.right {
  width: 300px;
  float: right;
  height: 100px;
  margin-left: -300px;
  background-color: blue;
}
```

### 圣杯布局

> - 要求：**需要将中间的元素放在最后，使用 _overflow: hidden;_ 创建 BFC**
> - 原理：利用负 _margin_ 值
> - 优点：可以使中间的元素优先渲染
> - 缺点：css 结构稍复杂，当三个元素高度不一致时显示丑陋

```html
<article class="layout holy">
  <div class="center">中</div>
  <div class="left">左</div>
  <div class="right">右</div>
</article>
```

```css
.layout.holy {
  margin: 0 300px;
}
.layout.holy .left {
  position: relative;
  left: -300px;
  float: left;
  width: 300px;
  height: 100px;
  margin-left: -100%;
  background-color: red;
}
.layout.holy .right {
  position: relative;
  right: -300px;
  float: left;
  width: 300px;
  height: 100px;
  margin-left: -300px;
  background-color: blue;
}
.layout.holy .center {
  float: left;
  width: 100%;
  height: 100px;
  background-color: green;
}
```

## 绝对定位

> - 原理：元素绝对定位，脱离文档流
> - 注意事项：如果总宽度小于左右以及中间元素的内容宽度之和，右侧元素会覆盖中间内容
> - 优点：兼容性好，相比于浮动，可以不用改变元素顺序
> - 缺点：当三个元素高度不一致时显示丑陋

```html
<article class="layout position">
  <div class="left">左</div>
  <div class="center">中</div>
  <div class="right">右</div>
</article>
```

```css
.layout.position > div {
  position: absolute;
}
.layout.position .left {
  left: 0;
  width: 300px;
  background-color: blue;
}
.layout.position .right {
  right: 0;
  width: 300px;
  background-color: blue;
}
.layout.position .center {
  left: 300px;
  right: 300px;
  background-color: green;
}
```

## flex

> - 原理：_flex_ 弹性盒子布局
> - 注意事项：低版本浏览器兼容
> - 优点：简单实用，子元素高度会保持一致
> - 缺点：需要处理兼容性

```html
<article class="layout flex">
  <div class="left">左</div>
  <div class="center">中</div>
  <div class="right">右</div>
</article>
```

```css
.layout.flex {
  display: flex;
}
.layout.flex .left {
  width: 300px;
  background-color: blue;
}
.layout.flex .right {
  width: 300px;
  background-color: blue;
}
.layout.flex .center {
  flex: 1; /* 或者 flex-grow: 1; */
  background-color: green;
}
```

## table

> - 原理：模拟 _table_ 布局
> - 优点：兼容性好，子元素高度会保持一致
> - 缺点：无法设置栏间距

```html
<article class="layout table">
  <div class="left">左</div>
  <div class="center">中</div>
  <div class="right">右</div>
</article>
```

```css
.layout.table {
  display: table;
  width: 100%;
}
.layout.table > div {
  display: table-cell;
}
.layout.table .left {
  width: 300px;
  background-color: blue;
}
.layout.table .right {
  width: 300px;
  background-color: blue;
}
.layout.table .center {
  background-color: green;
}
```

## grid

> - 原理：_grid_ 网格布局
> - 优点：设置简单，专为网格类布局设计，高度由父元素控制
> - 缺点：浏览器兼容性差

```html
<article class="layout grid">
  <div class="left">左</div>
  <div class="center">中</div>
  <div class="right">右</div>
</article>
```

```css
.layout.grid {
  display: grid;
  width: 100%;
  grid-template-rows: 100px; /* 行高 */
  grid-template-columns: 300px auto 300px; /* 列数及列宽 */
}
.layout.grid .left {
  width: 300px;
  background-color: blue;
}
.layout.grid .right {
  width: 300px;
  background-color: blue;
}
.layout.grid .center {
  background-color: green;
}
```
