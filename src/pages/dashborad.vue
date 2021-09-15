<!--
 * @Author: 刘林
 * @Date: 2021-09-15 21:09:29
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-15 21:41:23
-->
<template>
  <el-row :gutter="8">
    <el-col :span="18">
      <el-row :gutter="8">
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
      </el-row>
        <el-row :gutter="8">
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:10rem;"></el-card></el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-card style="min-height:328px;"></el-card>
    </el-col>
  </el-row>
  
</template>

<script setup>
</script>

<style lang="less">
  .el-row {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>