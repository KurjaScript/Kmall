import { createApp } from 'vue'
import vant from 'vant'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix (url) = {
  if (url && url.startWith('http')) {
    return url
  } else {
    url = `http://backend-api-01.newbee.ltd${url}`
    return url
  }
}
}

app.use(vant)
