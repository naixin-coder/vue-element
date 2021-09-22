<!--
 * @Author: 刘林
 * @Date: 2021-09-22 15:18:37
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-22 17:02:17
-->
<template>
  <ul class="list">
    <li class="list-item">
      <div class="list-content">
        <div class="title"> <slot name="title"></slot>{{title}}</div>
        <div class="content"><slot name="content"></slot>{{content}}</div>
      </div>
      <div class="more"><solt name="more">{{more}}</solt></div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
  more:String
})
</script>

<style lang="less" scoped>
  .list {
    width: 100%;
    list-style-type: none;
    margin:0;
    padding:0;
  }
  .list-item {
    padding: .5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: #FBFBFF;
    }
  }

  // .list-item-hover {
  //   background-color: #FBFBFF;
  // }
  .list-content {
    flex:1;
  }
  .title {
    color: #3B3C40;
    font-size: .9rem;
    height:20px;
    line-height: 20px;
  }
  .content{
    font-size: .8rem;
    color:#7D8195;
  }

  .more {
    font-size: .8rem;
    color:#A3A7B5;
  }
</style>