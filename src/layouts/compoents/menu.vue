<!--
 * @Author: 刘林
 * @Date: 2021-09-15 09:37:43
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-15 10:55:49
-->
<template>
  <el-menu
    class="layout-menu"
    :collapse="isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>导航二</span>
      </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <i class="el-icon-document"></i>
        <span>导航三</span>
      </template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
defineProps({
  isCollapse:Boolean,
})
</script>

<style lang="less">
  .layout-menu {
    border:none;
    max-height: 85%;
    height: 85%;
    overflow-y: scroll;
  }
</style>