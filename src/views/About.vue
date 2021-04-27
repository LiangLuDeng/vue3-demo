<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-27 16:27:06
 * @LastEditors: Please set LastEditors
 * @Description: 记一笔（计算器界面）
 * @FilePath: \vue3-ts-demo\src\views\About.vue
-->
<template>
  <div class="wrapper fce">
    <div>
      <div class="label_area">
        <div :class="['label_item', {active_label_item: item.id === activeLabel}]"
        @click="pickLabel(item.id)"
         v-for="item in labels" :key="item.id">{{ item.value }}</div>
      </div>
      <van-field
        v-model="formValue.bz"
        center
        clearable
        class="bz_input"
        label=""
        placeholder="可以顺便在这里备注一下哦"
      />
      <div class="tabs">
        <div
          v-for="item in tabsD"
          :key="item.value"
          :class="['', { active_tab: item.value === activeTab }]"
          @click="pickTab(item.value)"
        >
          {{ item.text }}
        </div>
      </div>
      <div class="calculate_container">
        <div class="text_input">{{ showStr }}</div>
        <div class="btn_table">
          <div
            :class="['btn_item', { double_item: item.value === 'enter' }]"
            v-for="item in operateBtn"
            :key="item.value"
            @click="clickItem(item)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { compositionApi } from "@/components/composables/index";
import { getStorage, setStorage } from "@/utils/utils";
import { operateBtn, operator } from "@/utils/tools";
export default defineComponent({
  name: "About",
  setup () {
    const thead = reactive(["id", "users", "date", "option", "bz"]);
    const formValue = reactive({ bz: "" });
    const storeLabels = getStorage("label_store") || [];
    const textArgs1 = ref<string[]>([]);
    const activeT = ref<number>(1);
    const activeL = ref<string>('');
    const tabsD: operator[] = [
      {
        text: "支出",
        value: 1,
      },
      {
        text: "收入",
        value: 2,
      },
    ];
    const showStr = computed(() => {
      return textArgs1.value.join(" ");
    });
    const activeTab = computed(() => {
      return activeT.value;
    });
    const activeLabel = computed(() => {
      return activeL.value || '';
    });
    function clickItem (item: operator) {
      // console.log(item, 'click')
      if (!["delete", "clear", "enter"].includes(`${item.value}`)) {
        textArgs1.value.push(`${item.text}`);
      }
      if (item.value === "enter") {
        // console.log("enter", formValue.bz);
      }
      if (item.value === "delete") {
        textArgs1.value.pop();
      }
      if (item.value === "clear") {
        textArgs1.value = [];
      }
    }
    function pickTab (p: number) {
      activeT.value = p;
    }
    function pickLabel (p: string) {
      activeL.value = p;
    }
    return {
      thead,
      labels: storeLabels,
      operateBtn,
      clickItem,
      showStr,
      formValue,
      tabsD,
      pickTab,
      activeTab,
      activeLabel,
      activeL,
      pickLabel
      // ...compositionApi("/abouts"),
    };
  },
});
</script>

<style lang="less" scoped>
.calculate_container {
  // border: 1px solid pink;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
}
.label_area {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;
  margin: 8px 0px;
  max-height: 100px;
  overflow-y: auto;
  border-bottom: 1px dashed #cdcde6;
  padding: 8px 0px;
  .label_item {
    border: 1px solid rgba(100, 91, 219, 0.65);
    border-radius: 4px;
    padding: 4px 8px;
    transition: .2s ease all;
    color: #333;
  }
  .active_label_item {
    background: rgba(94, 85, 214, 0.65);
    color: #fff;
  }
}

.tabs {
  display: flex;
  font-size: 14px;
  height: 60px;
  line-height: 60px;

  & > div {
    flex-grow: 1;
    text-align: center;
    border-radius: 4px;
    transition: 0.3s ease all;
  }
  & > div:last-child {
    border-radius: 0px 4px 4px 0px;
  }

  .active_tab {
    flex-grow: 4;
    color: rgb(46, 34, 114);
    font-weight: 600;
    font-size: 25px;
    letter-spacing: 5px;
    // background: #fff;
  }
}
.text_input {
  background: #fff;
  text-align: right;
  min-height: 64px;
  max-height: 128px;
  overflow: auto;
  font-size: 35px;
  line-height: 60px;
  padding: 2px 4px;
}
.btn_table {
  // border: 1px solid green;
  margin: 8px 0px;
  background: #e0ecffb6;
  border-right: none;
  border-bottom: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 50px 50px;
  grid-auto-flow: column;
  grid-gap: 4px;
  .btn_item {
    // border: 1px solid green;
    border-left: none;
    border-top: none;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #969faf;
    border-radius: 4px;
    box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
      0 1px 2px 1px rgba(30, 35, 90, 0.4);
    &:active {
      box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px rgb(172, 169, 169),
        0 1px 1px 1px rgba(30, 35, 90, 0.4);
    }
  }
  .double_item {
    text-align: center;
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 5;
  }
}
.bz_input {
  height: 64px;
  font-size: 15px;
}
</style>
