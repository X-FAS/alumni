
<script>
export default {
    routerOptions: {
        path: 'service',
        parentName: 'render-main',
        meta: {
            indexTop: 1
        }
    }
}
</script>
<script setup>
import { getBgUrl, getImgUrl } from '@/assets/utils/public-img'

const navMenus = [
    {
        text: '校友会介绍',
        bgColor: 'linear-gradient(45deg, rgba(106, 137, 238, 1) 0%, rgba(136, 165, 246, 1) 100%)',
        link: '',
        icon: '/N01.svg'
    },
    {
        text: '母校新闻',
        bgColor: 'linear-gradient(45deg, rgba(55, 182, 113, 1) 0%, rgba(107, 227, 165, 1) 100%)',
        link: '',
        icon: '/N02.svg'
    },
    {
        text: '通知公告',
        bgColor: 'linear-gradient(45deg, rgba(235, 120, 51, 1) 0%, rgba(244, 182, 88, 1) 100%)',
        link: '',
        icon: '/N03.svg'
    },
    {
        text: '校友组织',
        bgColor: 'linear-gradient(45deg, rgba(235, 120, 51, 1) 0%, rgba(244, 182, 88, 1) 100%)',
        link: '',
        icon: '/N04.svg'
    },
    {
        text: '校友风采',
        bgColor: 'linear-gradient(45deg, rgba(90, 150, 248, 1) 0%, rgba(127, 181, 253, 1) 100%)',
        link: '',
        icon: '/N05.svg'
    },
    {
        text: '校友企业',
        bgColor: 'linear-gradient(45deg, rgba(239, 98, 101, 1) 0%, rgba(246, 139, 145, 1) 100%)',
        link: '',
        icon: '/N06.svg'
    },
    {
        text: '活动报名',
        bgColor: 'linear-gradient(45deg, rgba(239, 98, 101, 1) 0%, rgba(246, 139, 145, 1) 100%)',
        link: '',
        icon: '/N07.svg'
    },
    {
        text: '时光记忆',
        bgColor: 'linear-gradient(45deg, rgba(106, 137, 238, 1) 0%, rgba(136, 165, 246, 1) 100%)',
        link: '/picture-group',
        icon: '/N08.svg'
    },
    {
        text: '名片交换',
        bgColor: 'linear-gradient(45deg, rgba(55, 182, 113, 1) 0%, rgba(107, 227, 165, 1) 100%)',
        link: '',
        icon: '/N09.svg'
    },
    {
        text: '班级返校申请',
        bgColor: 'linear-gradient(45deg, rgba(90, 150, 248, 1) 0%, rgba(127, 181, 253, 1) 100%)',
        link: '',
        icon: '/N10.svg'
    },
    {
        text: '联系我们',
        bgColor: 'linear-gradient(45deg, rgba(235, 120, 51, 1) 0%, rgba(244, 182, 88, 1) 100%)',
        link: '',
        icon: '/N11.svg'
    },
    {
        text: '',
        bgColor: 'linear-gradient(45deg, rgba(235, 120, 51, 1) 0%, rgba(244, 182, 88, 1) 100%)',
        link: '',
        icon: '/N11.svg'
    }
]
</script>
<template>
    <div class="render-main">
        <div class="upper-card" :style="{
            backgroundImage: getBgUrl('/B01.png', '/Service')
        }">
            <div class="upper-card-menu" @click="$router.push('/service-card')">
                <img :src="getImgUrl('/C01.svg', '/Service')" alt="">
                <p>校友卡</p>
            </div>
            <div class="upper-card-menu">
                <img :src="getImgUrl('/C02.svg', '/Service')" alt="">
                <p>活动</p>
            </div>
        </div>

        <div class="menus">
            <div
                class="menu"
                v-for="navItem in navMenus"
                :key="navItem.text"
                :class="{
                    isNotShow: !navItem.text
                }"
                @click="$router.push(navItem.link)"
            >
                <div :style="{
                    backgroundImage: navItem.bgColor
                }">
                    <img :src="getImgUrl(navItem.icon, '/Service')" alt="">
                </div>
                <p>{{ navItem.text }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.render-main {
    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 24px;

    .upper-card {
        height: 160px;
        background-size: 100%;
        border-radius: 10px;
        padding: 10px 27px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .upper-card-menu {
            text-align: center;

            > img {
                width: 54px;
                height: 54px;
            }

            > p {
                font-size: 16px;
                color: rgba(255, 255, 255, 1);
            }
        }
    }

    .menus {
        margin-top: 15px;
        background-color: white;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px 15px;

        .menu {
            padding-top: 8px;
            width: 90px;
            height: 90px;
            display: flex;
            transition: .2s;
            flex-direction: column;
            border-radius: 10px;
            align-items: center;

            > div {
                width: 56px;
                height: 56px;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;

                > img {
                    width: 38px;
                    margin-top: 5px;
                }
            }

            > p {
                margin-top: 7px;
                color: rgba(51, 51, 51, 1);
                font-size: 14px;
            }

            &:nth-child(n+4) {
                margin-top: 19px;
            }

            &:active {
                background-color: rgb(228, 228, 228);
            }
        }

        .isNotShow {
            visibility: hidden;
        }
    }
}
</style>
