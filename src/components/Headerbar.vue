<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-19 16:38:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\components\Headerbar.vue
-->
<template>
  <div class="header">
    <header>
      <router-link to="/">标签<IconSvg icon-class="iconhome" /></router-link> |
      <router-link to="/about">记一笔</router-link> |
      <router-link to="/list">统计</router-link>
    </header>
  </div>
</template>

<script lang="ts">
// 为什么要引入defineComponent?
import { defineComponent } from "vue";
import IconSvg from "@/components/Icon-svg.vue";

export default defineComponent({
  name: "Headerbar",
  components: {
    IconSvg,
  },
});
</script>

<style lang="less">
header {
  box-sizing: border-box;
  height: 60px;
  line-height: 60px;
  font-weight: 800;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  background-color: #ffffff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #f8f8f8;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-top: 2px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  a {
    margin: 0 20px;
    // color: #fff;
    text-decoration: none;
    .svg-icon {
      fill: blue;
    }
    &:active {
      color: skyblue;
    }
  }
}
</style>
