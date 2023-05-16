<script>
export default {
    routerOptions: {
        path: 'info',
        parentName: 'render-main',
        meta: {
            indexTop: 1
        }
    }
}
</script>

<script setup>
import { getBgUrl, getImgUrl } from '@/assets/utils/public-img';
import { ref } from 'vue'

const navList = ref([
    {
        icon: '/N01.svg',
        title: '个人信息',
        router: '/user-detail'
    },
    {
        icon: '/N02.svg',
        title: '我的好友',
        router: ''
    },
    {
        icon: '/N03.svg',
        title: '我的校友卡',
        router: ''
    },
    {
        icon: '/N04.svg',
        title: '我的组织',
        router: ''
    },
    {
        icon: '/N05.svg',
        title: '我的活动',
        router: ''
    },
    {
        icon: '/N06.svg',
        title: '邀请校友',
        router: ''
    },
])
</script>
<template>
    <div class="layout-box">
        <div class="info-card" :style="{
            'background-image': getBgUrl('/B01.svg', '/Info')
        }">
            <div class="card-upper">
                <img class="upper-avatar" src="@/assets/Info/avatar.png" alt="">
                <div class="upper-user">
                    <p>你的名字</p>
                    <p>2016级数字工程学院 人工智能专业</p>
                </div>
            </div>
            <div class="card-lower">
                <div>
                    <p>2</p>
                    <p>我的活动</p>
                </div>
                <div>
                    <p>3</p>
                    <p>我的组织</p>
                </div>
                <div>
                    <p>33%</p>
                    <p>个人信息</p>
                </div>
            </div>
        </div>
        <div class="nav-box">
            <div class="nav-list" v-for="nav in navList" :key="nav.title" @click="$router.push(nav.router)">
                <img :src="getImgUrl(nav.icon, '/Info')" alt="">
                <span>{{ nav.title }}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#A8AAAE"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.layout-box {
    padding: 20px;
    box-sizing: border-box;

    .info-card {
        height: 170px;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 8px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        .card-upper {
            display: flex;
            align-items: center;
            margin-bottom: 14.5px;

            .upper-avatar {
                width: 64px;
                height: 64px;
                border-radius: 50%;
            }

            .upper-user {
                margin-left: 15px;

                p:first-child {
                    font-size: 18px;
                    font-weight: 500;
                    color: white;
                    margin-bottom: 10px;
                }

                p:last-child {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 12px;
                    letter-spacing: .5px;
                }
            }
        }

        .card-lower {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > div {
                text-align: center;
                padding: 5px 0;
                flex: 1;

                p:first-child {
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }

                p:last-child {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 12px;
                }

                + div {
                    border-left: 0.5px solid rgba(255, 255, 255, 0.15);
                }
            }
        }
    }

    .nav-box {
        background: white;
        border-radius: 10px;
        padding: 0 15px;
        
        .nav-list {
            padding: 15px 0;
            display: flex;
            align-items: center;

            > img {
                width: 28px;
                height: 28px;
            }

            > span {
                margin-left: 10px;
                font-size: 16px;
                color: rgba(38, 38, 38, 1);
            }

            > svg {
                margin-left: auto;
            }

            + .nav-list {
                border-top: 0.5px solid rgba(232, 234, 236, 1);
            }
        }
    }
}
</style>
