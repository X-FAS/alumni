<script>
export default {
    routerOptions: {
        path: 'home',
        redirect: '/main/home/news',
        parentName: 'render-main'
    }
}
</script>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getBgUrl, getImgUrl } from '@/assets/utils/public-img'

// 轮播图
const nowIndex = ref(0)
const swiperImgs = ref([
    '/Home/banner.png',
    '/Home/banner2.png'
])
// 获取下一张banner index
const getNextIndex = () => {
    return (nowIndex.value + 1) % swiperImgs.value.length
}

let time
const startPlayBanner = () => {
    time = setInterval(() => {
        nowIndex.value = getNextIndex()
    }, 5000)
}

onMounted(() => {
    startPlayBanner()
})
onUnmounted(() => {
    clearInterval(time)
})
// 计算偏移
const handlerIndexLeft = computed(() => {
    return 375 * nowIndex.value
})
// menu 
const menuList = ref([
    {
        title: '新闻',
        icon: 'M01.svg',
        router: '/main/home/news'
    },
    {
        title: '校友风采',
        icon: 'M02.svg',
        router: '/main/home/mien'
    },
    {
        title: '校友卡',
        icon: 'M03.svg',
        router: '/home-card'
    },
    {
        title: '活动报名',
        icon: 'M04.svg',
        router: '/main/home/activity'
    },
])
</script>
<template>
    <div style="background-color: #f3f6fd">
        <div class="home-bg" :style="{
            backgroundImage: getBgUrl('/B01.svg', '/Home'),
        }">
            <!-- logo -->
            <img class="logo" :src="getImgUrl('/logo.png', '/Home')" alt="">
            <!-- banner -->
            <div class="banners">
                <div class="banners-img" :style="{
                    '--margin-left': handlerIndexLeft
                }">
                    <div v-for="img in swiperImgs">
                        <img :src="require(`@/assets${img}`)" :key="img" />
                    </div>
                </div>
                <div class="banners-nav">
                    <span v-for="(_, index) in swiperImgs" :class="{
                        'selected-banner-span': nowIndex === index
                    }"/>
                </div>
            </div>
        </div>
        <div class="menus">
            <div
                class="menu super-flex-center"
                v-for="menu in menuList"
                :key="menu.title"
                :class="{
                    'selected-menu': $route.path === menu.router
                }"
                @click="$route.path !== menu.router && $router.push(menu.router)"
            >
                <svg v-if="menu.icon==='M01.svg'" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 32H7.88939C5.18862 32 3 29.8513 3 27.1998V7.19592C3 5.43066 4.45724 4 6.2553 4H21.8907C23.6887 4 25.146 5.43066 25.146 7.19592V27.5254C25.146 31.8445 29 32 29 32Z" fill="#184B8A"/>
                    <path d="M22 32H29.455C31.412 32 33 30.4301 33 28.4911V13.2227C33 11.4438 31.5432 10 29.7441 10H22V32Z" fill="#FFD25E"/>
                    <path d="M17.4748 18.4733H10.527C9.68391 18.4733 9.00181 17.7939 9.00181 16.9581V11.5153C9.00181 10.6777 9.68572 10 10.527 10H17.4748C18.3179 10 19 10.6794 19 11.5153V16.9581C19 17.7957 18.3161 18.4733 17.4748 18.4733ZM17.7679 25H10.2321C9.55184 25 9 24.4518 9 23.7759V23.6968C9 23.021 9.55184 22.4727 10.2321 22.4727H17.7679C18.4482 22.4727 19 23.021 19 23.6968V23.7759C19 24.4536 18.4482 25 17.7679 25Z" fill="#FFD25E"/>
                </svg>
                <svg v-if="menu.icon==='M02.svg'" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.7205 11.3441L20.2907 4.59274C19.5727 4.20278 18.7689 3.99902 17.9523 4C17.1358 4.00098 16.3324 4.20668 15.6155 4.59835L3.27531 11.3478C1.5749 12.2767 1.5749 14.7226 3.27531 15.6533L15.6155 22.4009C16.3323 22.7931 17.1357 22.999 17.9523 23C18.769 23.001 19.5729 22.797 20.2907 22.4066L32.7205 15.6552C34.4265 14.7282 34.4265 12.273 32.7205 11.3441Z" fill="#184B8A"/>
                    <path d="M27.9594 28.7629C27.9594 29.3272 27.6631 29.8571 27.1647 30.1546C25.9489 30.8804 23.1209 32 17.2648 32C11.3105 32 9.22011 30.8423 7.86841 30.1183C7.32849 29.8298 7 29.2764 7 28.6831V16.5675H27.9594V28.7629ZM31.4897 26.7343C30.6553 26.7343 29.9794 26.0847 29.9794 25.2827V15.4516C29.9794 14.6496 30.6553 14 31.4897 14C32.3242 14 33 14.6496 33 15.4516V25.2827C33 26.0847 32.3242 26.7343 31.4897 26.7343Z" fill="#FFD25E"/>
                </svg>
                <svg v-if="menu.icon==='M03.svg'" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.0269 31H7.97496C4.67384 31 2 28.3795 2 25.1483V10.8517C2 7.61871 4.67572 5 7.97496 5H28.025C31.3262 5 34 7.62054 34 10.8517V25.1483C34.0019 28.3813 31.3262 31 28.0269 31Z" fill="#184B8A"/>
                    <path d="M15.5533 17.473C16.5223 16.8428 17.1624 15.7584 17.1624 14.5236C17.1624 12.5771 15.5727 11 13.6105 11C11.6483 11 10.0569 12.5787 10.0569 14.5236C10.0569 15.76 10.7003 16.8476 11.6709 17.4762C8.95573 18.3159 7 20.8734 7 23.8356C7 24.144 7.12349 24.4398 7.34332 24.6578C7.56314 24.8759 7.86128 24.9984 8.17215 24.9984H19.0424C19.3532 24.9984 19.6514 24.8759 19.8712 24.6578C20.091 24.4398 20.2145 24.144 20.2145 23.8356V23.738C20.2177 20.7902 18.2539 18.2967 15.5533 17.473ZM27.4522 14.1909H22.1686C21.3141 14.1909 20.6208 13.5031 20.6208 12.6554C20.6208 11.8077 21.3141 11.12 22.1686 11.12H27.4522C28.3067 11.12 29 11.8077 29 12.6554C29 13.5031 28.3067 14.1909 27.4522 14.1909ZM27.4522 19.5955H23.7165C22.8619 19.5955 22.1686 18.9077 22.1686 18.06C22.1686 17.2123 22.8619 16.5245 23.7165 16.5245H27.4522C28.3067 16.5245 29 17.2123 29 18.06C29 18.9077 28.3067 19.5955 27.4522 19.5955ZM27.4522 25H24.9547C24.1002 25 23.4069 24.3122 23.4069 23.4645C23.4069 22.6168 24.1002 21.9291 24.9547 21.9291H27.4522C28.3067 21.9291 29 22.6168 29 23.4645C29 24.3122 28.3067 25 27.4522 25Z" fill="#FFD25E"/>
                </svg>
                <svg v-if="menu.icon==='M04.svg'" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7948 32H10.2052C6.77851 32 4 29.2217 4 25.7952V10.2048C4 6.77834 6.77851 4 10.2052 4H25.7948C29.2215 4 32 6.77834 32 10.2048V25.7935C32.0017 29.2217 29.2232 32 25.7948 32Z" fill="#184B8A"/>
                    <path d="M20.3486 19.8007L17.1742 20.0519C16.4012 20.1133 15.683 19.4049 15.7451 18.6387L15.9991 15.4995C16.0229 15.2158 16.1398 14.9592 16.3317 14.7676L28.9051 2.33402C29.4022 1.84246 30.2648 1.90029 30.835 2.46234L33.5325 5.12978C34.1008 5.69182 34.1593 6.54663 33.6622 7.03819L21.0888 19.4718C20.8951 19.6633 20.6356 19.7772 20.3486 19.8007ZM25.0856 28H10.8275C9.81873 28 9 27.1904 9 26.1928C9 25.1952 9.81873 24.3856 10.8275 24.3856H25.0856C26.0944 24.3856 26.9131 25.1952 26.9131 26.1928C26.9131 27.1904 26.0944 28 25.0856 28Z" fill="#FFD25E"/>
                </svg>
                <p>{{ menu.title }}</p>
            </div>
        </div>
        <!-- 各模块 -->
        <Transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
        >
            <router-view class="more-model"/>
        </Transition>
    </div>
</template>
<style scoped lang='less'>
.home-bg {
    height: 220px;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 65px;

    .logo {
        width: 236px;
        height: 38px;
        margin: 22px 0 20px 22px;
    }

    .banners {
        position: relative;
        overflow: hidden;
        height: 185px;
        margin-bottom: 20px;
        border-radius: 8px;

        .banners-img {
            display: flex;
            height: 100%;

            > div:first-child {
                margin-left: calc(var(--margin-left) * -1px);
            }

            > div {
                transition: .2s;
                flex: 1 0 100%;
                text-align: center;

                > img {
                    flex-shrink: 0;
                    object-fit: cover;
                    height: 100%;
                    width: 335px;
                    border-radius: 8px;
                }
            }
        }

        .banners-nav {
            position: absolute;
            bottom: 11px;
            left: 50%;
            display: flex;
            transform: translateX(-50%);

            > span {
                width: 6px;
                height: 6px;
                border-radius: 3px;
                transition: .2s;
                background-color: #d6dbc3;

                + span {
                    margin-left: 4px;
                }
            }

            
            .selected-banner-span {
                width: 20px;
                background-color: #ffffff;
            }
        }
    }
}

.menus {
    margin: 0 20px 10px 20px;
    display: flex;

    .menu {
        width: 72px;
        height: 70px;
        transition: .2s;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        box-shadow: 0px 0px 15px rgba(24, 75, 138, 0.05);
        flex-direction: column;

        + .menu {
            margin-left: 16px;
        }

        > p {
            color: rgba(24, 75, 138, 1);
            font-weight: 500;
            font-size: 12px;
        }
    }

    .selected-menu {
        background: rgba(24, 75, 138, 1);
        > p {
            color: rgba(255, 255, 255, 1);
        }

        > svg {
            path:first-child {
                fill: white
            }
        }
    }
}

.more-model {
    // margin: 10px 20px;
}
</style>
