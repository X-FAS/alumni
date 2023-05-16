<script>
export default {
    routerOptions: {
        path: 'alumni',
        parentName: 'render-main',
        meta: {
            indexTop: 1
        }
    }
}
</script>

<script setup>
import { onMounted, ref } from 'vue'
import ListNav from '@/components/list-nav.vue'
import SearchInput from '@/components/search-input.vue'
import { getBgUrl, getImgUrl } from '@/assets/utils/public-img'

// 校友数据
const alumniData = ref()
// 点击滑块导航栏，获取新数据
const clickNav = navName => {
    console.log(navName)
    getAlumniData(navName)
}
// 委托对象
const watchDom = ref()
// 事件委托
onMounted(() => {
    watchDom.value.onclick = e => {
        const targetNode = e.target
        if (targetNode.className !== 'render-list') return
        console.log(targetNode)
    }
})
const isLoading = ref(false)
// 加锁
let updateLock = 0
// 获取数据
const getAlumniData = navName => {
    updateLock ++
    const num = updateLock
    isLoading.value = true
    setTimeout(() => {
        if (num!==updateLock) return
        const demo = [...new Array(10).keys()].map((v, index) => (
            {
                avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                name: '你的名字' + navName + index
            }
        ))
        alumniData.value = demo
        isLoading.value = false
    }, 1000)
}
// 列表
const navList = [
    '推荐',
    '全部',
    '长度测试长度测试',
    '同城',
    '长度测试2',
    '同行',
    '同院',
]
// 搜索值
const searchValue = ref('')
</script>
<template>
    <div style="display:flex;flex-direction: column">
        <div class="header-bg" :style="{
            backgroundImage: getBgUrl('/B01.svg', '/Alumni'),
        }">
            <div class="search-header">
                <img :src="getImgUrl('/I02.svg', '/Alumni')" alt="">
                <div class="search-input">
                    <search-input placeholder="搜索你的校友" :model.sync="searchValue"/>
                </div>
                <img :src="getImgUrl('/I01.svg', '/Alumni')" alt="">
            </div>
            <div class="list-nav">
                <ListNav @click="clickNav" :nav-list="navList"/>
            </div>
        </div>
        <Transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
        >
            <div class="alumni-data" ref="watchDom" v-if="!isLoading">
                <div
                    class="render-list"
                    v-for="item in alumniData"
                    :key="item.name"
                    @click="$router.push('/alumni-detail')"
                >
                    <img :src="item.avatar" alt="">
                    <span>{{ item.name }}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#A8AAAE"/>
                    </svg>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style scoped lang='less'>


.header-bg {
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    .search-header {
        display: flex;
        margin: 20px 20px 4px 20px;
        
        > img {
            width: 32px;
            height: 32px;
        }

        .search-input {
            flex: 1;
            padding: 0 10px;
        }
    }
    .list-nav {
        height: 44px;
    }
}

.alumni-data {
    padding: 6px 0;
    overflow-y: auto;
    flex: 1;
    min-height: 0;

    .render-list {
        padding: 12px 20px;
        display: flex;
        transition: .2s;
        align-items: center;

        > img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
            pointer-events: none;
            margin-right: 10px;
        }

        > span {
            color: rgba(51, 51, 51, 1);
            font-size: 16px;
            letter-spacing: .5px;
            pointer-events: none;
        }

        > svg {
            margin-left: auto;
            pointer-events: none;
        }

        &:active {
            background-color: rgb(238, 238, 238);
        }
    }
}
</style>
