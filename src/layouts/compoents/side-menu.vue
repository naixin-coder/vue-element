<!--
 * @Author: 刘林
 * @Date: 2021-09-15 16:10:22
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-15 19:57:21
-->
<template>
  <el-aside class="layout-aside" width="12.5rem" :class="{collapse: !isCollapse,uncollapse:isCollapse}">
    <div class="layout-aside-title">
      <img src="@/assets/image/logo.svg" alt="">
      <transition name="title-fade">
        <span v-if="isCollapse">智慧运营平台</span>
      </transition>
    </div>
    <Menu :isCollapse="!isCollapse" />
    <div>
      <ul class="layout-menu-footer">
        <li><i :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="collapse"></i></li>
      </ul>
    </div>
  </el-aside>
</template>
<script setup>
import {ref} from 'vue';
import Menu from './menu.vue';

const isCollapse = ref(false);
const collapse = ()=>{
  isCollapse.value= !isCollapse.value;
}

</script>
<style lang="less">
  .title-fade-enter-active {
    transition: opacity 0.1s linear .3s;
  }
  .title-fade-leave-active {
    transition: opacity 0s linear;
  }

  .title-fade-enter-from,
  .title-fade-leave-to {
    opacity: 0;
  }

   @keyframes x-scale {
      from {width: 12.5rem;}
      to {width: 4rem;}
    }

    @keyframes x-unscale {
      from {width: 4rem;}
      to {width: 12.5rem;}
    }

    .collapse {
      animation: x-scale .3s linear  forwards;
    }

    .uncollapse {
      animation: x-unscale .3s linear  forwards;
    }
    .layout-aside {
      box-shadow: 1px 0px 3px #EAEEFA;
      border-right: 1px solid #FFFFFF;
      .layout-aside-title{
        height: 3rem;
        display: flex;
        padding: 0 1rem;
        // justify-content: center;
        align-items: center;
        // color:#6B6C6F;
        color:#01618F;
        font-family: 'XIA XING KAI';
        font-size: 1.3rem;
        letter-spacing: -5px;

        & > img {
          height: 60%;
        }
      }

      .layout-menu-footer {
        list-style-type: none;
        padding-inline-start: 1rem;

        & >li> i {
          font-size: 1.5rem;
        }
      }
    }
</style>