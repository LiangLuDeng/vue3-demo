<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-19 15:05:03
 * @LastEditors: Please set LastEditors
 * @Description: 记一笔（计算器界面）
 * @FilePath: \vue3-ts-demo\src\views\About.vue
-->
<template>
  <div class="content_page">
    <div class="content_body">
      <div class="content_button">
        <button class="add primary" @click="add" title="添加">添加</button>
      </div>
      <div class="content_table">
        <table>
          <thead>
            <tr>
              <th v-for="item in thead" :key="item">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="item.id">
              <td>
                <span :title="item.id">{{ item.id }}</span>
              </td>
              <td>
                <div v-if="index === currentIndex">
                  <input v-model="item.users" title="users" />
                </div>
                <span :title="item.users" v-else>{{ item.users }}</span>
              </td>
              <td :title="item.date">
                <div v-if="index === currentIndex">
                  <input v-model="item.date" title="sex" />
                </div>
                <span :title="item.date" v-else>{{ item.date }}</span>
              </td>
              <td>
                <div v-if="index === currentIndex">
                  <button class="primary confirm" @click="saveItem(item)">
                    确定
                  </button>
                  &nbsp;&nbsp;
                  <button @click="cancel(item)">取消</button>
                </div>
                <span v-else>
                  <span @click="edit(index)"> edit </span>
                  <span @click="delItem(item)">delete</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { compositionApi } from "@/components/composables/index";
export default defineComponent({
  name: "About",
  setup () {
    const thead = reactive(["id", "users", "date", "option"]);
    return {
      thead,
      ...compositionApi("/abouts"),
    };
  },
});
</script>
