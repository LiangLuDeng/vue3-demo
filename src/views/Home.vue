<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-23 14:57:54
 * @LastEditors: Please set LastEditors
 * @Description:  标签设置页
 * @FilePath: \vue3-ts-demo\src\views\Home.vue
-->

<template>
  <div class="home">
    <div class="labels_wrap">
      <div v-for="item in labels" :key="item.id">{{ item.value }}</div>
      <div class="add_btn" @click="handleModalVisible(true)">+ 新增标签</div>
    </div>
  </div>
  <van-dialog
    v-model:show="showItem"
    title="新的标签叫什麼呢"
    :show-cancel-button="false"
    :show-confirm-button="false"
  >
    <van-form @submit="onSubmit">
      <van-field
        input-align="center"
        v-model="state.username"
        name="label"
        label=""
        placeholder="在这里填写新的标签名吧"
      />
      <div class="footer" >
        <van-row justify="space-around">
          <van-col span="8">
            <van-button
              round
              size="small"
              block
              @click="handleModalVisible(false)"
            >
              取消
            </van-button>
          </van-col>
          <van-col span="8">
            <van-button
              round
              size="small"
              block
              type="primary"
              native-type="submit"
            >
              提交
            </van-button>
          </van-col>
        </van-row>
      </div>
    </van-form>
  </van-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from "vue";
import { getStorage, setStorage, guid } from "@/utils/utils";
import { Notify } from "vant";

export default defineComponent({
  name: "Home",
  setup () {
    const storeLabels = getStorage("label_store") || [];
    const labels = ref(storeLabels);
    const show = ref(false);
    const state = reactive({
      username: "",
      password: "",
    });
    const handleModalVisible = (p: boolean) => {
      show.value = p;
    };
    const showItem = computed(() => {
      return show.value;
    });

    const onSubmit = (value:any) => {
      const newLabel = {
        id: guid(),
        value: value.label,
      }
      const currentLabels = (storeLabels).concat(newLabel);
      setStorage("label_store", currentLabels)
      labels.value = currentLabels;
      show.value = false;
      Notify({ type: 'success', message: '新增成功' });
    };
    return { show, state, labels, showItem, handleModalVisible, onSubmit };
  },
  methods: {

  },
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
.footer {
  margin: 12px 0px;
}
</style>
