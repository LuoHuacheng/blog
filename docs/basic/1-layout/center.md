# 元素居中

:::tip 给定一个元素如何居中
元素是行内元素还块元素？如果是块元素，宽高是否固定？
:::

## 水平居中

### 行内元素

给其父元素设置 _text-align: center;_

```css
.parent-line {
  text-align: center;
}
```

```html
<div class="parent-line">
  行内元素水平居中——text-align
</div>
```

### 块级元素

- 宽度固定的块级元素
  1. 给其本身设置 _margin: 0 auto;_
     ```css
     .item-center-margin {
       margin: 0 auto;
       width: 300px;
       border: 2px solid red;
     }
     ```
     ```html
     <div class="item-center-margin">
       宽度固定的块级水平居中——margin
     </div>
     ```
  2. 给其本身设置 _position_ 和 _负 margin_
     ```css
     .item-center-position-negative-margin {
       position: absolute;
       margin-left: -150px;
       width: 300px;
       border: 2px solid red;
     }
     ```
     ```html
     <div class="item-center-position-negative-margin">
       宽度固定的块级水平居中——position && negative-margin
     </div>
     ```
  3. 给其本身设置 _position_ 和 _margin_，和第一种相似
     ```css
     .item-center-position-margin {
       position: absolute;
       left: 0;
       right: 0;
       margin: auto;
       width: 300px;
       border: 2px solid red;
     }
     ```
     ```html
     <div class="item-center-position-margin">
       宽度固定的块级水平居中——position && margin
     </div>
     ```
- 宽度不固定的块级元素，两种思路，设置其本身或父元素的 _display_ 属性，设置 _position_ 和 _transform_
  1. 给其本身设置 _display: table;_
     ```css
     .item-center-table {
       display: table;
       margin: 0 auto;
       border: 2px solid red;
     }
     ```
     ```html
     <div class="item-center-table">
       宽度不固定的块级水平居中——table
     </div>
     ```
  2. 给其本身设置 _display: inline-block;_
     ```css
     .parent-inline-block {
       text-align: center;
     }
     .item-center-inline-block {
       display: inline-block;
       border: 2px solid red;
     }
     ```
     ```html
     <div class="parent-inline-block">
       <div class="item-center-inline-block">
         宽度不固定的块级水平居中——inline-block
       </div>
     </div>
     ```
  3. 给其父元素设置 _display: flex;_
     ```css
     .parent-flex {
       display: flex;
       justify-content: center;
     }
     .item-center-flex {
       border: 2px solid red;
     }
     ```
     ```html
     <div class="parent-flex">
       <div class="item-center-flex">
         宽度不固定的块级水平居中——flex
       </div>
     </div>
     ```
  4. 给其父元素设置 _display: grid;_
     ```css
     .parent-grid {
       display: grid;
       grid-template-columns: auto; /* 宽度为auto的一列 */
       justify-items: center;
       /* align-items: center; // 垂直居中 */
     }
     .item-center-grid {
       border: 2px solid red;
     }
     ```
     ```html
     <div class="parent-grid">
       <div class="item-center-grid">
         宽度不固定的块级水平居中——grid
       </div>
     </div>
     ```
  5. 给其本身设置 _position_ 和 _transform_
     ```css
     .item-center-position-transform {
       position: absolute;
       left: 50%;
       transform: translateX(-50%);
       border: 2px solid red;
     }
     ```
     ```html
     <div class="item-center-position-transform">
       宽度不固定的块级水平居中——position && transform
     </div>
     ```

## 垂直居中

### 行内元素

- 单行，给其本身设置 _line-height_ 或者 _paddig-top = padding-bottom_
  ```css
  .inline-center-vertical {
    line-height: 28px; /* 或者 padding: 10px 0; */
    border: 2px solid red;
  }
  ```
  ```html
  <span class="inline-center-vertical">
    单行文本居中——line-height || paddig-top = padding-bottom
  </span>
  ```
- 多行，给其本身设置 _table-cell_，父元素设置 _display: table_
  ```css
  .inline-parent-center-vertical {
    display: table;
    height: 300px; /* 父元素需要设置高度 */
    /* text-align: center; // 水平居中 */
    border: 2px solid red;
  }
  .inline-item-center-vertical {
    display: table-cell;
    vertical-align: middle;
  }
  ```
  ```html
  <div class="inline-parent-center-vertical">
    <span class="inline-multiple-center-vertical">
      多行文本居中——table && height && table-cell && vertical
    </span>
  </div>
  ```

### 块级元素

- 高度固定，可以参考[宽度固定的块级元素](#块级元素)中方法 2 和方法 3
- 高度不固定，可以参考[宽度不固定的块级元素](#块级元素)中方法 3、4、5 以及[行内元素](#行内元素-2)中的多行居中

## 水平垂直居中

- 宽高固定，可以参考[宽度固定的块级元素](#块级元素)中方法 2 和方法 3
- 高度不固定，可以参考[宽度不固定的块级元素](#块级元素)中方法 3、4、5 以及[行内元素](#行内元素-2)中的多行居中

:::tip 总结

- 宽高不固定的居中方法适用宽高不固定的元素
- 当对元素或其父元素设置过 _display_ 属性后，就已经改变了原始元素的块与行内属性
- 总体来说 _flex_ 与 _grid_ 布局方式可以很容易地解决居中问题，但鉴于 _grid_ 属性的兼容性，所以还是推荐使用 _flex_ 布局解决
  :::
