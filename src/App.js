import { defineComponent, h, reactive, toRefs, onMounted, onUnmounted} from '@vue/runtime-core';
import { getGame } from './Ball';
import hitTestRectangle from './utils';
const App = defineComponent({
  setup() {
    const ballInfo = reactive({
      x: 100,
      y: 100,
      radius: 50
    })

    const windowObj = {
      top: 0,
      left: 0,
      right: window.innerWidth,
      bottom: window.innerHeight
    }

    const speed = 10;
    let isRebound = false;
    const ballMove = () => {
      if (hitTestRectangle(ballInfo, windowObj)) {
        isRebound = !isRebound
      }
      if(!isRebound) {
        ballInfo.x += speed
      } else {
        ballInfo.x -= speed
      }
    }

    // 启动
    onMounted(()=>{
      getGame().ticker.add(ballMove)
    })

    // 注销
    // api文档上两个 一个是destroy  一个是remove
    onUnmounted(()=>{
      getGame().ticker.remove(ballMove)
    })

    // 我看destroy和remove的区别 官方文档没看懂 
    // destory 移出了很多东西 并将started 置为false/ _head 置为null, listener置为空 _requestId置为null
    // const ticker = getGame().ticker.add(ballMove)
    // setTimeout(()=>{
    //   // getGame().ticker.remove(ballMove)
    //   getGame().ticker.destroy(ballMove)
    //   console.log(ticker);
    // }, 2000)

    return {
      ...toRefs(ballInfo)
    }
  },
  render(ctx) {
    return h("circle", {x: ctx.x, y: ctx.y})
  }
});
export default App;
