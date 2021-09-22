<!--
 * @Author: 刘林
 * @Date: 2021-09-14 20:46:06
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-17 15:34:46
-->
<template>
  <el-container class="layout-warpper">
    <SideMenu />
    <el-container>
      <el-header height="3rem" class="layout-header">
        <Breadcrumn />
        <div class="layout-header-icon">
          <el-space>
            <el-space :size="20">
              <i class="el-icon-bell" style="color:#252D4E;font-size:18px;"></i>
              <el-tooltip content="全屏">
                <i class="el-icon-full-screen"></i>
              </el-tooltip>
            </el-space>
            <el-divider direction="vertical"></el-divider>
            <el-dropdown>
              <!-- <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span> -->
              <el-space>
                <el-avatar :size="28"></el-avatar>
                <span style="font-size:0.8rem;color:#7C8293;">admin</span>
              </el-space>
              <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
import Breadcrumn from './compoents/breadcrumn.vue';

</script>
<style lang="less">
  
  .layout-warpper {
    min-height: 100vh;

    .layout-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
