<script>
export default {
    routerOptions: {
        meta: {
            indexTop: 2
        }
    }
}
</script>
<script setup>
import { getBgUrl } from '@/assets/utils/public-img'
import { ref, watchEffect, nextTick, onBeforeMount, onMounted, reactive } from 'vue'
import { useRoute } from '@/router/useComponent'
import organizationNews from './organization-news.vue'
import organizationUser from './organization-user.vue'
import organizationActivity from './organization-activity.vue'

const sliderWidth = ref(0)
const sliderOffsetX = ref(0)
const selectIndex = ref(2)

const route = useRoute()
const decodeId = id => {
    const strId = id.toString()
    // 获取随机数
    const random = parseInt(strId.substring(strId.length - 3))
    // 获取除数
    const handlerId = parseFloat(strId.substring(0, strId.length - 3))
    return Math.round(random * handlerId - random)
}
onMounted(() => {
    console.log(decodeId(route.query.id), '!')
})
onBeforeMount(() => {
    // 回到顶端
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// 根据传递的元素跟随
const updateSlider = targetNode => {
    const targetWidth = targetNode.clientWidth
    const offsetX = targetNode.offsetLeft
    sliderWidth.value = targetWidth + 'px'
    sliderOffsetX.value = offsetX + 'px'
}

watchEffect(() => {
    const nowIndex = selectIndex.value
    nextTick(() => {
        const homeNavNodes = document.querySelectorAll('#organizationDetail .home-nav')
        updateSlider(homeNavNodes[nowIndex])
    })
})
// 渲染组件
const renderComponents = [
    organizationActivity,
    organizationNews,
    organizationUser
]
// 给渲染的组件修改当前选择
const setSelectedIndex = newIndex => selectIndex.value = newIndex
// 组织基础信息
const infoData = reactive({
    avatar: undefined,
    name: '苍南校友',
    createTime: '2020-06-08',
})
const getAvatarName = str => str.substring(0, 2)
</script>
<template>
    <div class="layout" id="organizationDetail">
        <div class="organization-card" :style="{
            backgroundImage: getBgUrl('/B01.svg', '/Organization'),
        }">
            <div class="top-data">
                <div class="avatar">
                    <img v-if="infoData.avatar" :src="infoData.avatar" alt="">
                    <p v-else>{{ getAvatarName(infoData.name) }}</p>
                </div>
                <p class="name">{{ infoData.name }}</p>
                <p class="time">{{ infoData.createTime }}</p>
            </div>
        </div>
        <div class="organization-home">
            <div class="home-nav-box">
                <p
                    class="home-nav"
                    @click="setSelectedIndex(0)"
                    :class="{
                        'active-nav': selectIndex === 0
                    }"
                >
                    活动
                </p>
                <p
                    class="home-nav"
                    @click="setSelectedIndex(1)"
                    :class="{
                        'active-nav': selectIndex === 1
                    }"
                >
                    新闻
                </p>
                <p
                    class="home-nav"
                    @click="setSelectedIndex(2)"
                    :class="{
                        'active-nav': selectIndex === 2
                    }"
                >
                    成员
                </p>
            </div>
            <Transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster"
            >
                <components
                    :is="renderComponents[selectIndex]"
                    :setSelectedIndex="setSelectedIndex"
                    style="flex: 1;min-height: 0;overflow-y: auto;"
                />
            </Transition>
        </div>
    </div>
</template>
<style scoped lang='less'>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .organization-card {
        height: 150px;
        background-size: cover;
        background-position: center;
        padding-bottom: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .top-data {
            display: flex;
            flex-direction: column;
            align-items: center;

            .avatar {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 8px;

                > img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }

                > p {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(135, 172, 218, 1);
                    color: rgba(255, 255, 255, 1);
                    font-size: 12px;
                    margin: 0 auto;
                }
            }

            .name {
                letter-spacing: 1px;
                color: rgba(255, 255, 255, 1);
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .time {
                letter-spacing: .5px;
                color: rgba(255, 255, 255, 0.8);
                font-size: 12px;
            }
        }
    }

    .organization-home {
        position: relative;
        flex: 1;
        min-height: 0;
        margin-top: -10px;
        border-radius: 10px 10px 0 0;
        background-color: white;
        padding-top: 10px;
        display: flex;
        flex-direction: column;

        .home-nav-box {
            position: relative;
            display: flex;
            justify-content: space-around;
            padding: 10px 35.5px 12px 35.5px;
            border-bottom: 0.5px solid rgba(232, 234, 236, 1);

            .home-nav {
                font-size: 16px;
                font-weight: 600;
                color: rgba(86, 88, 93, 1);
            }
            
            .active-nav {
                color: rgba(24, 75, 138, 1);
                font-size: 16px;
            }

            &::after {
                position: absolute;
                left: v-bind(sliderOffsetX);
                bottom: 0;
                transition: .2s;
                content: '';
                width: v-bind(sliderWidth);
                height: 3px;
                background: rgba(255, 210, 93, 1);
                border-radius: 1px 1px 0 0;
            }
        }
    }
}
</style>
