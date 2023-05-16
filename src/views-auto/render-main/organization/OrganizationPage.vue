<script>
export default {
    routerOptions: {
        path: 'organization',
        parentName: 'render-main',
        meta: {
            indexTop: 1
        }
    }
}
</script>

<script setup>
import ListNav from '@/components/list-nav.vue'
import SearchInput from '@/components/search-input.vue'
import { getBgUrl } from '@/assets/utils/public-img'
import { ref } from 'vue'
import { pinyin } from 'pinyin-pro'

// 导航列表
const navList = [
    '推荐',
    '全部',
    '院系',
    '地方',
    '测试更多1',
    '测试更多2',
]
// 搜索值
const searchValue = ref('')
// 点击滑块导航栏，获取新数据
const clickNav = navName => {
    console.log(navName)
    getData(navName)
}
// 加载状态
const isLoading = ref(false)
// 加锁
let updateLock = 0
// 获取数据
const getData = navName => {
    updateLock++
    const num = updateLock
    isLoading.value = true
    setTimeout(() => {
        if (num !== updateLock) return
        const data = [
            {
                id: 1,
                avatar: undefined,
                nickname: '苍南校友：' + navName,
                state: '0' // 0 已加入 1未加入
            },
            {
                id: 2,
                avatar: undefined,
                nickname: '乐清校友：' + navName,
                state: '1'
            },
            {
                id: 3,
                avatar: undefined,
                nickname: '龙港校友：' + navName,
                state: '1'
            },
            {
                id: 4,
                avatar: undefined,
                nickname: '平阳校友：' + navName,
                state: '1'
            },
            {
                id: 5,
                avatar: undefined,
                nickname: '瑞安校友：' + navName,
                state: '1'
            },
            {
                id: 6,
                avatar: undefined,
                nickname: '数字工程学院：' + navName,
                state: '0'
            },
            {
                id: 7,
                avatar: undefined,
                nickname: '温州校友：' + navName,
                state: '1'
            },
            {
                id: 8,
                avatar: undefined,
                nickname: '文成校友：' + navName,
                state: '1'
            }
        ]
        // 整理数据
        const renderData = new Map()
        for (const item of data) {
            // 获取组织名称首字母大写拼音
            const pyIndex = pinyin(item.nickname[0], { pattern: 'first', toneType: 'none' }).toLocaleUpperCase()
            const cacheItem =
                renderData.has(pyIndex) ?
                [ ...renderData.get(pyIndex), item] :
                [item]
            renderData.set(pyIndex, cacheItem)
        }
        organizationData.value = renderData.entries()
        isLoading.value = false
    }, 1000)
}
// 组织数据
const organizationData = ref([])

// 加密
const encodeId = id => {
    const random = Math.round(Math.random() * 899 + 100)
    return (id + random) / random + random.toString()
}
</script>
<template>
    <div style="display:flex;flex-direction: column">
        <div class="header-bg" :style="{
            backgroundImage: getBgUrl('/B01.svg', '/Alumni'),
        }">
            <div class="search-header">
                <div class="search-input">
                    <search-input placeholder="搜索组织" :model.sync="searchValue" />
                </div>
            </div>
            <div class="list-nav">
                <ListNav @click="clickNav" :nav-list="navList" />
            </div>
        </div>
        <Transition mode="out-in" enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster">
            <div class="render-list" ref="watchDom" v-if="!isLoading">
                <div v-for="renderRow in organizationData" :key="renderRow[0]">
                    <p class="py-index">{{ renderRow[0] }}</p>
                    <div
                        class="render-row"
                        v-for="renderList in renderRow[1]"
                        :key="renderList.nickname"
                        @click="$router.push({
                            name: 'organization-main',
                            query: {
                                id: encodeId(renderList.id)
                            }
                        })"
                    >
                        <div class="avatar">
                            <img v-if="renderList.avatar" :src="renderList.avatar" alt="">
                            <span v-else>{{ renderList.nickname.substring(0,2) }}</span>
                        </div>
                        <p class="name">{{ renderList.nickname }}</p>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z"
                                fill="#A8AAAE" />
                        </svg>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style scoped lang="less">
.header-bg {
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    .search-header {
        display: flex;
        margin: 20px 20px 4px 20px;

        .search-input {
            flex: 1;
        }
    }

    .list-nav {
        height: 44px;
    }
}

.render-list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;

    .py-index {
        padding: 7.5px 20px;
        font-size: 12px;
        color: rgba(24, 75, 138, 1);
    }

    .render-row {
        display: flex;
        align-items: center;
        padding: 9px 20px;
        background-color: white;
        transition: .2s;

        &:active {
            background-color: rgb(238, 238, 238);
        }

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background: rgba(135, 172, 218, 1);

            >img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            >span {
                color: rgba(255, 255, 255, 1);
                font-size: 12px;
            }
        }

        .name {
            margin-left: 13px;
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
        }

        >svg {
            margin-left: auto;
        }
    }
}
</style>
