// 自定义事件总线

// 事件总线是一个对象: $on $off $emit
const myEventBus = {}

// 设定事件总线监听函数对象集合
let listenerCollections = {}

myEventBus.$on = function (eventName, listener) {
  let listeners = listenerCollections[eventName]

  if (!listeners) {
    // 没有则创建并保存
    listenerCollections[eventName] = listeners = []
  }
  listeners.push(listener)
}

// 分发实现
myEventBus.$emit = function (eventName, data) {
  const listeners = listenerCollections[eventName]

  if (listeners && listeners.length) {
    // 说明有监听回调函数
    listeners.forEach(listener => { listener(data) })
  }
}

// 解除绑定实现
myEventBus.$off = function (eventName) {
  if (eventName === undefined || eventName === null) {
    // 将所有的绑定解除
    listenerCollections = {}
  } else {
    listenerCollections[eventName] = []
  }
}

export default myEventBus
