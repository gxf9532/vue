
import {REQUESTS} from './mutation_type'

export default {
  [REQUESTS] (state) {
    // 这里是真正更新状态数据
    state.firstV = false
    state.loading = true
  }
}
