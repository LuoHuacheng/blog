# BFC

:::tip
什么是 BFC？如何生成？有什么作用？
:::

## 定义

BFC 是块级格式化上下文（Block formatting context）的缩写，具有 BFC 特性的元素可以看作是隔离的独立容器，容器里面的元素在布局上不会影响外面的元素，并且 BFC 具有普通容器所没有的一些特性

## 生成条件

- 根元素（html）
- float 不为 none 的元素
- overflow 不为 visible 的元素
- display 为 inline-block、flow-root、table-cell、table-caption 等 table 相关的元素
- position 不为 static、relative、sticky 的元素
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）

## 特性

- BFC 是页面上一个隔离的容器，容器内的子元素不会影响容器外的元素，反之亦然
- 内部的 box 会在垂直方向依次排列
- box 垂直方向的距离由 margin 决定，同一 BFC 的相邻 box 会发生 margin 重叠
- BFC 的区域不会与 float box 重叠
- 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此
- 计算 BFC 的高度时，浮动元素也参与计算

## 作用

1. 解决边距重叠

   > 处于同一个 BFC 下的盒子外边距会重叠，下方代码中的两个 div 之间的边距 margin 是 50，而不是 100，要解决这个问题，可以将它们放在不同的 BFC 中

   ```html
   <style>
     .box {
       width: 300px;
       height: 100px;
       margin: 50px;
       background-color: #ff6600;
     }
   </style>
   <body>
     <div class="box"></div>
     <div class="box"></div>
   </body>
   ```

2. 清除内部浮动

   > BFC 可以包含浮动的元素，利用 BFC 中的元素不影响 BFC 外面元素布局的特性来清除内部浮动

   ```html
   <style>
     .parent {
       border: 2px solid #f33;
       /* 添加此属性创建BFC来清除 child 的浮动 */
       /* overflow: hidden; */
     }
     .child {
       float: left;
       width: 300px;
       height: 100px;
       background-color: #ff6600;
     }
   </style>
   <body>
     <div class="parent">
       <div class="child"></div>
     </div>
   </body>
   ```

3. 多栏布局

   参考前一章中的[多栏布局](/basic/1-layout/column.html#创建-bfc)小节
