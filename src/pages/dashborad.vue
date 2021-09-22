<!--
 * @Author: 刘林
 * @Date: 2021-09-15 21:09:29
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-17 17:08:30
-->
<template>
  <el-row :gutter="8">
    <el-col :span="19">
      <div class="dashborad-card-title">
        <span class="dashborad-card-title-left">待处理报名和名单</span>
        <span class="dashborad-card-title-right"><i class="el-icon-position" style="margin-right:2px;"></i>发布招募</span>
      </div>
      <el-row :gutter="8">
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
      </el-row>
      <div class="dashborad-card-title">
        <span class="dashborad-card-title-left">待处理招标</span>
        <span class="dashborad-card-title-right"><i class="el-icon-position" style="margin-right:2px;"></i>发布招标</span>
      </div>
      <el-row :gutter="8">
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
        <el-col :span="6"><el-card style="min-height:6rem;"></el-card></el-col>
      </el-row>
    </el-col>
    <el-col :span="5">
      <div class="dashborad-card-title">
        <span class="dashborad-card-title-left">我的业绩</span>
      </div>
      <el-card style="min-height:232px;"></el-card>
    </el-col>
  </el-row>
  <el-row :gutter="8">
    <el-col :span="19">
      <el-card>
        <div class="dashborad-card-title">
          <span class="dashborad-card-title-left">我的消息</span>
          <el-link style="font-size:0.8rem;">查看更多</el-link>
        </div>
        <el-tabs v-model="tab">
          <el-tab-pane label="用户管理" name="first">
            <div style="height:107px;"></div>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
            <div style="height:107px;"></div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
    <el-col :span="5">
      <el-card style="min-height:232px;"></el-card>
    </el-col>
  </el-row>
  <el-card>
    <div class="dashborad-card-title">
      <span class="dashborad-card-title-left">我的消息</span>
    </div>
    <div style="height:10px"></div>
  </el-card>
</template>

<script setup>
import {ref} from 'vue';
const tab = ref('first');
</script>

<style lang="less" scoped>
  .dashborad-card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    height: 2rem;

    .dashborad-card-title-left {
      font-weight: 500;
      color: #18191E;
    }
    .dashborad-card-title-right {
      border: 1px solid #f85300;
      padding: 2px 8px;
      border-radius: 16px;
      color: #f85300;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
  }

  :deep .el-tabs__item {
    font-size: 0.8rem;
  }

  :deep .el-tabs__item.is-active {
    color: #7E91FD;
  }

  :deep .el-tabs__active-bar {
    background:#7E91FD;
  }
  .el-row {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>