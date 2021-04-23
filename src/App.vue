<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-23 14:44:22
 * @LastEditors: Please set LastEditors
 * @Description: 收入支出的统计页
 * @FilePath: \vue3-ts-demo\src\App.vue
-->

<template>
  <div class="app">
    <headerbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Headerbar from '@/components/Headerbar.vue'

const VueCompo = defineComponent({
  name: 'App',
  components: {
    headerbar: Headerbar,
  }
})

export default VueCompo;
</script>

<style lang="less">

</style>
