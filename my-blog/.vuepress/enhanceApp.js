import WeChat from './components/wechat'
import QQ from './components/qq'
import BgRandom from './components/bgRandom'
import About from './components/about'

export default ({Vue}) => {
  Vue.component('WeChat', WeChat),
  Vue.component('QQ', QQ)
  Vue.component('BgRandom', BgRandom)
  Vue.component('About', About)
}

