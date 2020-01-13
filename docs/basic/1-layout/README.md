# 页面布局

> **题目：三栏布局，左右侧固定宽度，中间宽度自适应**


## 浮动

  ```html
  <article class="layout float">
    <div class="left">左</div>
    <div class="center">中</div>
    <div class="right">右</div>
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
    background-color: green;
  }
  ```

## 绝对定位
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
    flex: 1;
    background-color: green;
  }
  ```

## table
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
    grid-template-rows: 100px; // 行高
    grid-template-columns: 300px auto 300px; // 列数及列宽
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
