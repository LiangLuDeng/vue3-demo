<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-19 19:04:50
 * @LastEditors: Please set LastEditors
 * @Description:  标签设置页
 * @FilePath: \vue3-ts-demo\src\views\Home.vue
-->

<template>
  <div class="home">
    <div class="labels_wrap">
      <div v-for="item in labels" :key="item.id">{{ item.name }}</div>
      <div class="add_btn" @click="centerDialogVisible = true">+ 新增标签</div>
    </div>
  </div>
  <van-dialog v-model:show="show" title="标题" show-cancel-button>
    <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup () {
    const show = ref(false);
    return { show };
  },
  data () {
    return {
      labels: [
        {
          name: "服饰",
          id: 1,
        },
        {
          name: "出行",
          id: 2,
        },
        {
          name: "零食",
          id: 3,
        },
      ],
      centerDialogVisible: false,
    };
  },
  methods: {},
});
</script>

<style lang="less">
.home {
  // font-size: 60px;
  padding: 20px 16px;
  .btn_class {
    border-radius: 3px;
    font-size: 14px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    &:active {
      box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px rgb(221, 221, 221),
        0 1px 1px 1px rgba(30, 35, 90, 0.4);
    }
  }
  .labels_wrap {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px 20px;
    & > div {
      .btn_class;
      color: #969faf;
      box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
        0 1px 2px 1px rgba(30, 35, 90, 0.4);
    }

    .add_btn {
      .btn_class;
      border-radius: 15px;
      color: #3b6fc8;
      box-shadow: inset 0 -2px 0 0 #7e7ef5, inset 0 0 1px 1px #fff,
        0 1px 2px 1px rgba(13, 22, 119, 0.4);
    }
  }
}
</style>
