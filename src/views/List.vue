<!--
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-23 18:53:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\views\List.vue
-->
<template>
  <div class="wrapper">
    <div class="content_body">
      <div class="content_button">
        <button class="add primary" @click="addItem" title="添加">添加</button>
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
                  <input v-model="item.name" title="name" />
                </div>
                <span :title="item.name" v-else>{{ item.name }}</span>
              </td>
              <td :title="item.sex">
                <div v-if="index === currentIndex">
                  <input v-model="item.sex" title="sex" />
                </div>
                <span :title="item.sex" v-else>{{
                  item.sex ? "男" : "女"
                }}</span>
              </td>
              <td :title="item.birth">
                <div v-if="index === currentIndex">
                  <input v-model="item.birth" title="birth" />
                </div>
                <span :title="item.birth" v-else>{{ item.birth }}</span>
              </td>
              <td :title="item.address">
                <div v-if="index === currentIndex">
                  <input v-model="item.address" title="birth" />
                </div>
                <span :title="item.address" v-else>{{ item.address }}</span>
              </td>
              <td>
                <div v-if="index === currentIndex">
                  <button class="primary confirm" @click="confirm(item)">
                    确定
                  </button>
                  <button @click="cancel(item)">取消</button>
                </div>
                <span v-else>
                  <span @click="editItem(index)"> edit </span>
                  <span @click="deleteItem(index, item)">delete</span>
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "List",
});
</script>
