import Vue from 'vue'

import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'

Vue.use(VueRx, Rx)

// export default new Vue({
//     el: '#app',
//     router,
//     store,
//     render: h => h(App)
// })
export default cacheAPI({
  fetch (url) {
    Mock.mock(
      url, {
        'userName': '@name',
        'age|1-100': 100,
        'color': '@color',
        'date': "@date('yyyy-MM-dd')",
        'url': '@url()',
        'content': '@cparagraph()'
      }
    )
    axios.get(url).then((res) => {
      this.cache = res
      console.log(res)
      console.log(JSON.stringify(this.cache, null, 2))
    }).catch((err) => console.log(err))
  }
})
