import { ref, onMounted, toRaw } from 'vue'
import http from 'axios'
import {
  DataType,
  listType,
  OperationType
} from '@/types'

const axios = http.create({
  baseURL: 'http://192.168.1.154:3000',
  timeout: 5000
})

export const compositionApi = (apiURL: string): any => {
  const currentIndex = ref<number | null>()
  const list = ref<Array<DataType>>([])

  // 去添加方法
  const add = (item: DataType) => {
    list.value.unshift(item)
    currentIndex.value = 0
  }
  const edit = (index: number | null) => {
    currentIndex.value = index
  }

  // 取消方法
  const cancel = (item: DataType) => {
    currentIndex.value = null
    if (!item.id) {
      list.value.splice(0, 1)
    }
  }

  const getList: listType = () => {
    axios.get(apiURL).then((res: any) => {
      list.value = res.data
      console.log('toRoW：', toRaw(list))
      console.log('res:', list.value)
    })
  }

  const delItem: OperationType = (item: DataType) => {
    axios.delete(apiURL + '/' + item.id).then(() => getList())
  }

  const saveItem: OperationType = (item: DataType) => {
    const prom = item.id ? axios.put(apiURL + '/' + item.id, item) : axios.post(apiURL, item)
    prom.then(() => {
      getList()
      cancel(item)
    })
  }

  onMounted(() => getList())

  console.log('list:', list)

  return {
    currentIndex,
    list,
    add,
    edit,
    cancel,
    delItem,
    saveItem
  }
}
