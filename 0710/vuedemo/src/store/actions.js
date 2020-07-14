import {REQUESTS} from './mutation_type'
import axios from 'axios'

export default {
  async search ({commit}, searchData = 'vue') {
    // 更新状态数据
    commit(REQUESTS)

    // 进行异步交互
    const url = `https://github.com/search?q=${searchData}`

    const resData = await axios(url)

    console.log(resData)

    // commit(REQSUCCESS, resData)
  }
}
