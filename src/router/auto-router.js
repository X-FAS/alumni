/**
 * 使用见文档
 */


import kebabCase from 'lodash/kebabCase';

/**
 * 获取路径中的文件名，仿 path.basename
 * @param {*} str 
 * @param {*} suffix 是否保留后缀
 * @returns 
 */
const basename = (str, suffix = true) => {
    // 找 / 分隔
    let index = str.lastIndexOf('/')
    // 如果没有就找 \\ 分隔
    index = index !== -1 ? index : str.lastIndexOf('\\')
    // 返回后一位到最后
    let fileName = str.substring(index + 1)
    if (suffix) return fileName
    // 需要去除后缀
    const suffixIndex = fileName.lastIndexOf('.')
    if (suffixIndex !== -1) return fileName.substring(0, suffixIndex)
    return fileName
}

// 例：
// basename('c:\\static\\pages\\index.html') => index.html
// basename('c:/static/pages/index.html') => index.html
// basename('c:/static/pages/index') => index
// basename('../index.vue') => index.vue
// basename('./../index.text.vue') => index.text.vue
// basename('./../index.text.vue', false) => index.text

// 文件路径转串形规范   ../demo/pages/hello-world-demo.vue HelloWorldDemo.vue
const getKebabCaseFileName = (fileName, suffix) => kebabCase(basename(fileName, suffix))

const initAutoRouter = router => {
    // 自动加载 pages
    const requireComponent = require.context(
        // 目录的相对路径
        '../views-auto',
        // 是否查询其子目录
        true,
        // 匹配基础组件文件名的正则表达式
        /\.vue$/
        // /Base[A-Z]\w+\.(vue|js)$/
    );

    // 配置默认值，如 DemoPage1.vue => { path: 'demo-page-1', name: 'demo-page-1' }
    const withDefault = (routerOptions, defaultResult) => ({
        ...routerOptions,
        path: routerOptions?.path || defaultResult,
        name: routerOptions?.name || defaultResult.substring(1)
    })

    // 处理路径
    const handlerJoinPath = routerOptions => {
        // 存在父路由 有根路径
        if (routerOptions?.parentName && routerOptions.path[0] === '/')
            routerOptions.path = routerOptions.path.substring(1)
        // 不存在父路由 没有根路径
        if (!routerOptions?.parentName && routerOptions.path[0] !== '/')
            routerOptions.path = '/' + routerOptions.path
        return routerOptions
    }

    // 创建轮询等待父元素
    const createAddChildren = () => {
        let time
        let count = 0
        return routerOptions => {
            time = setInterval(() => {
                if (hasRoutes(routerOptions.parentName, router.getRoutes())) {
                    router.addRoute(routerOptions.parentName, routerOptions)
                    clearInterval(time)
                }
                // 超时处理
                if (count >= 50) {
                    console.error('未知渲染错误');
                    clearInterval(time)
                }
                count++
            }, 50)
        }
    }

    // 判断是否存在对应名称的路由
    const hasRoutes = (name, routes) => routes.findIndex(v => v.name === name) !== -1

    // 遍历添加
    requireComponent.keys().forEach(componentName => {
        // 获取组件参数
        const component = requireComponent(componentName).default
        // 获取组件中的路由配置
        let routerOptions = handlerJoinPath(
            withDefault(
                component.routerOptions, '/' + getKebabCaseFileName(componentName, false)
            )
        )
        // 添加组件信息生成真实路由配置
        routerOptions = { ...routerOptions, component }
        // 已存在name
        if (hasRoutes(routerOptions.name, router.getRoutes())) return console.error('存在重复name');
        // 添加路由
        routerOptions.parentName ? createAddChildren()(routerOptions): router.addRoute(routerOptions)
    })
}

export default initAutoRouter