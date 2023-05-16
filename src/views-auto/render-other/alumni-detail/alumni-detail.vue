<script>
export default {
    routerOptions: {
        meta: {
            indexTop: 3
        }
    }
}
</script>

<script setup>
import { getBgUrl, getImgUrl } from '@/assets/utils/public-img'
import { ref, watchEffect, nextTick } from 'vue'
import homeDetail from './home-detail.vue'
import organizationDetail from './organization-detail.vue'

const sliderWidth = ref(0)
const sliderOffsetX = ref(0)
const selectIndex = ref(0)

// 根据传递的元素跟随
const updateSlider = targetNode => {
    const targetWidth = targetNode.clientWidth
    const offsetX = targetNode.offsetLeft
    sliderWidth.value = targetWidth + 'px'
    sliderOffsetX.value = offsetX + 'px'
}

const isHidden = ref(false)
watchEffect(() => {
    const nowIndex = selectIndex.value
    nextTick(() => {
        const homeNavNodes = document.querySelectorAll('#alumniDetail .home-nav')
        updateSlider(homeNavNodes[nowIndex])
    })
})

const renderComponents = [homeDetail, organizationDetail]
// 给渲染的组件修改当前选择
const setSelectedIndex = newIndex => selectIndex.value = newIndex
const setIsHidden = newState => isHidden.value = newState
</script>
<template>
    <div class="layout" id="alumniDetail">
        <div class="alumni-card" :style="{
            backgroundImage: getBgUrl('/B01.svg', '/Alumni'),
        }">
            <img class="alumni-avatar" src="@/assets/Alumni/avatar.png" alt="">
            <div class="alumni-user">
                <p class="user-name">张建伟</p>
                <p class="user-more">
                    <span>2016级数字工程学院</span>
                    <span>人工智能专业</span>
                </p>
                <p class="user-location">
                    <img :src="getImgUrl('/I03.svg', '/Alumni')" alt="">
                    <span>温州市</span>
                </p>
            </div>
            <img class="alumni-tip" :src="getImgUrl('/I04.svg', '/Alumni')" alt="">
        </div>
        <div class="alumni-home">
            <div class="home-nav-box">
                <p
                    class="home-nav"
                    @click="setSelectedIndex(0)"
                    :class="{
                        'active-nav': selectIndex === 0
                    }"
                >
                    主页
                </p>
                <p
                    class="home-nav"
                    @click="setSelectedIndex(1)"
                    :class="{
                        'active-nav': selectIndex === 1
                    }"
                >
                    组织
                </p>
            </div>
            <!-- 隐藏 -->
            <div class="home-hidden" v-if='isHidden'>
                <img :src="getImgUrl('/B02.svg', '/Alumni')" alt="">
                <p>对方隐藏了信息,</p>
                <p>快来和TA交换名片吧</p>
            </div>
            <div v-else>
                <Transition
                    mode="out-in"
                    enter-active-class="animate__animated animate__fadeIn animate__faster"
                    leave-active-class="animate__animated animate__fadeOut animate__faster"
                >
                    <components
                        :is="renderComponents[selectIndex]"
                        :setSelectedIndex="setSelectedIndex"
                        :setIsHidden="setIsHidden"
                    />
                </Transition>
            </div>
            <div class="exchange">
                <button v-ripple="'rgba(255,255,255,.5)'">交换名片</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.layout {
    display: flex;
    flex-direction: column;

    .alumni-card {
        height: 130px;
        background-size: cover;
        background-position: center;
        padding: 28px 20px 38px 20px;
        box-sizing: border-box;
        display: flex;
        position: relative;

        .alumni-avatar {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        .alumni-user {
            margin-left: 15px;
            letter-spacing: .5px;

            .user-name { 
                font-size: 16px;
                color: rgba(255, 255, 255, 1);
                margin-bottom: 8px;
            }
            .user-more {
                font-size: 12px;
                color: rgba(255, 255, 255, 0.8);
                margin-bottom: 8px;
                span:last-child {
                    margin-left: 8px;
                }
            }
            .user-location {
                display: flex;
                align-items: center;

                img {
                    width: 14px;
                    height: 14px;
                    margin-right: 3px;
                }

                span { 
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.8);
                }
            }
        }
        .alumni-tip {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 18px;
            height: 18px;
        }
    }

    .alumni-home {
        position: relative;
        flex: 1;
        min-height: 0;
        margin-top: -10px;
        border-radius: 10px 10px 0 0;
        background-color: white;
        padding-top: 10px;

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

        .home-hidden {
            padding-top: 52px;
            text-align: center;

            > img {
                width: 128px;
                height: 128px;
                margin-bottom: 20px;
            }

            > p {
                color: rgba(168, 170, 174, 1);
                font-size: 14px;
                height: 22px;
            }
        }

        .exchange {
            position: absolute;
            width: 100%;
            bottom: 38px;
            left: 0;
            padding: 0 45px;
            height: 44px;
            box-sizing: border-box;

            button {
                border: none;
                margin: 0 auto;
                background: rgba(24, 75, 138, 1);
                border-radius: 22px;
                font-size: 16px;
                color: rgba(255, 255, 255, 1);
                letter-spacing: 1px;
                font-weight: bold;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
