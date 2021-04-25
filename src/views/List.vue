<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-25 18:57:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\views\List.vue
-->
<template>
  <div class="wrapper">
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
    <div class="chart">
      chart
    </div>
    <div class="list">
      <div :key="item.id" v-for="item in recordsList" class="list_item">
        <div class="li_header">
          <div>{{item.date}}</div>
          <div>￥{{item.je}}</div>
        </div>
        <ul>
          <li v-for="it in item.records" :key="it.id">
            <div>{{it.label}}</div>
            <div>{{it.bz}}</div>
            <div>￥{{it.je}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { operator } from "@/utils/tools";
import { getStorage } from "@/utils/utils";
export default defineComponent({
  name: "List",
  setup () {
    const activeT = ref<number>(1);
    const storeLabels = getStorage("label_store") || [];
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
    const records = [
      {
        date: '2021-01-02',
        type: 1, // 支出
        je: 120,
        bz: '买上衣',
        label: '6ddc8719-be37-8bb7-ca78-a503991b8116',
        id: 1,
      },
      {
        date: '2021-01-02',
        type: 1, // 支出
        je: 12,
        bz: '零食',
        label: '6ddc8719-be37-8bb7-ca78-a503991b8116',
        id: 5,
      },
      {
        date: '2019-12-08',
        type: 2, // 支出
        je: 2300,
        bz: '换了佳能的相机',
        label: '49678d6d-4c29-48fb-b8b4-5dda398ee4ea',
        id: 2,
      },
      {
        date: '2019-12-08',
        type: 1, // 支出
        je: 2300,
        bz: 'webcom画板',
        label: '49678d6d-4c29-48fb-b8b4-5dda398ee4ea',
        id: 2,
      },
      {
        date: '2019-09-08',
        type: 2, // 支出
        je: 400,
        bz: '显示器',
        label: '49678d6d-4c29-48fb-b8b4-5dda398ee4ea',
        id: 2,
      },
      {
        date: '2019-10-08',
        type: 1, // 支出
        je: 700,
        bz: '云台',
        label: '49678d6d-4c29-48fb-b8b4-5dda398ee4ea',
        id: 2,
      },
    ]
    const activeTab = computed(() => {
      return activeT.value;
    });
    function pickTab (p: number) {
      activeT.value = p;
    }

    const mylabels = computed(() => {
      return storeLabels;
    });
    const recordsList = computed(() => {
      const result:any = [];
      const tempArr:any = [];
      records.forEach(item => {
        console.log('tempArr_for', activeT.value, item.type)
        const tempItem = item;
        tempItem.label = storeLabels.find((ci:any) => ci.id === item.label)?.value;
        console.log('tab_', activeT.value, item.type)
        if (activeT.value !== item.type) {
          return;
        }
        if ((tempArr.findIndex((it:any) => it === item.date) === -1)) {
          result.push({
            date: item.date,
            records: [tempItem],
          });
          tempArr.push(item.date);
        } else {
          result[tempArr.indexOf(item.date)].records.push(tempItem);
        }
      })
      console.log(result, 'result')
      return result || [];
    });
    return {
      tabsD,
      activeTab,
      pickTab,
      records,
      mylabels,
      recordsList,
    }
  },
});
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgb(46, 34, 114);
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
.chart {
  height: 150px;
  border: 1px solid pink;
  text-align: center;
}
.list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .list_item {
    // padding: 10px;
    border-radius: 10px;
    box-shadow: inset 0 -1px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
        0 1px 3px 1px rgba(30, 35, 90, 0.4);

    .li_header {
      color: #969faf;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 10px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 10px;
    }
    ul > li {
      display: flex;
      justify-content:  flex-start;
      font-size: 16px;
      gap: 12px;
      &> div:last-child {
        // align-self: flex-end;
        position: absolute;
        right: 12px;
      }
      &:last-child {
        text-align: left;

      }
    }
  }

}
</style>
