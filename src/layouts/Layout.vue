<!--
 * @Author: 刘林
 * @Date: 2021-09-14 20:46:06
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-15 21:03:11
-->
<template>
  <el-container class="layout-warpper">
    <SideMenu />
    <el-container>
      <el-header height="3rem" class="layout-header">
        <div class="layout-header-icon">
          <el-space>
            <i class="el-icon-message-solid" style="color:#252D4E;font-size:18px;"></i>
            <el-divider direction="vertical"></el-divider>
            <el-avatar :size="28"></el-avatar>
            <span style="font-size:0.8rem;color:#7C8293;">admin</span>
          </el-space>
        </div>
      </el-header>
      <el-main class="layout-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SideMenu from './compoents/side-menu.vue';
</script>
<style lang="less">
  
  .layout-warpper {
    min-height: 100vh;

    .layout-header {
      .layout-header-icon {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: right;
      }
    }

    .layout-main {
      background: #ECEFF7;
      
    }
  }
</style>
