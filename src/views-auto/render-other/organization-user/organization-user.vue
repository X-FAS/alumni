<script setup>
import { ref } from 'vue'

const userList = ref([
    {
        rule: '主管理员',
        user: [
            {
                name: '吴彦谦',
                avatar: undefined
            }
        ]
    },
    {
        rule: '其他成员',
        user: [
            {
                name: '李世斌',
                avatar: undefined
            },
            {
                name: '王海英',
                avatar: undefined
            },
            {
                name: '郑永兴',
                avatar: undefined
            },
            {
                name: '李莉颖',
                avatar: undefined
            },
            {
                name: '冯新玲',
                avatar: undefined
            },
            {
                name: '郑春晖',
                avatar: undefined
            },
            {
                name: '王云霞',
                avatar: undefined
            },
            {
                name: '李梓发',
                avatar: undefined
            },
            {
                name: '孙婉茹',
                avatar: undefined
            },
            {
                name: '李豫卓',
                avatar: undefined
            }
        ]
    },
])
// 随机rgb颜色
const randomBgColor = () => {
    // 暗色随机
    const getRandom = () => Math.round(Math.random() * 200)
    return `rgb(${getRandom()},${getRandom()},${getRandom()})`
}
</script>
<template>
    <div class="user-layout">
        <div class="user-scroll">
            <div v-for="userGroup in userList" :key="userGroup.rule">
                <p class="user-group-title">{{ userGroup.rule }}</p>
                <div v-for="user in userGroup.user" :key="user.name" class="user-row" @click="$router.push('/alumni-detail')">
                    <div class="user-avatar" :style="{
                        backgroundColor: randomBgColor()
                    }">
                        <img v-if="user.avatar" :src="user.avatar" alt="">
                        <p v-else>{{ user.name }}</p>
                    </div>
                    <span>{{ user.name }}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#A8AAAE"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="other-btn">
            <button v-ripple="'rgba(255,255,255,.5)'" @click="$router.push('/organization-data')">组织详情</button>
            <button v-ripple="'rgba(255,255,255,.5)'">邀请校友</button>
        </div>
    </div>
</template>
<style scoped lang="less">
.user-layout {
    display: flex;
    flex-direction: column;
    background: rgba(241, 243, 246, 1);

    .user-scroll {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
    }
}
.user-group-title {
    padding: 7.5px 20px;
    color: rgba(24, 75, 138, 1);
    font-size: 12px;
}
.user-row {
    padding: 9px 20px;
    display: flex;
    align-items: center;
    background-color: white;
    transition: .2s;
    
    &:active {
        background-color: rgb(244, 244, 244);
    }

    .user-avatar {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        > p {
            width: 100%;
            height: 100%;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;    
        }

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    > span {
        color: rgba(51, 51, 51, 1);
        font-size: 16px;
    }

    > svg {
        margin-left: auto;
    }

    + .user-row {
        border-top: 0.5px solid rgba(232, 234, 236, 1);
    }
}

.other-btn {
    height: 90px;
    padding: 12px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 0.5px solid rgba(232, 234, 236, 1);
    background: rgba(255, 255, 255, 1);

    > button {
        padding: 12px 44.3px;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        border: none;
        border-radius: 20px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    button:first-child {
        background: rgba(248, 166, 43, 1);
    }
    button:last-child {
        background: rgba(24, 75, 138, 1);
    }
}
</style>
