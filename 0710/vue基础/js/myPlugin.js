(function (window) {
    // 自定义插件对象
    const myPlugin = {}

    // 1.必须定义install方法
    myPlugin.install = function (Vue, options) {
        console.log('install')

        //2. 添加全局属性或者全局方法
        Vue.myGlobalMethod = function () {

            console.log('myGlobalMethod')
        }

        // 2. 添加一个全局资源(asset)
        Vue.directive('my-directive', (el, binding) => {
            el.textContent = binding.value.toUpperCase()
        })

        // 4. 添加一个实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 一些逻辑……
            console.log('myMethod')
        }

        Vue.prototype.$http = function() {
            // 发送ajax请求
        }
        Vue.prototype.$axios = function() {
              // 发送ajax请求
        }
    }
    // 暴露给外部 
    window.myPlugin = myPlugin
})(window)