<!--
 * @Author: 刘林
 * @Date: 2021-09-17 11:20:15
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-17 15:07:29
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in state.list" :to="{path:item.path}" :key="item.path">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import {watch,reactive} from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter();

const getBreadcrumb =()=>{
  return router.currentRoute.value.matched.filter(route=>route.path != '/');
}
const state = reactive({
  list: getBreadcrumb(),
});

console.log(state.list);

watch(router,()=>{
  state.list = getBreadcrumb();
});

</script>