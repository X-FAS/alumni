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
import { reactive } from 'vue'

// 随机rgb颜色
const randomBgColor = () => {
    // 暗色随机
    const getRandom = () => Math.round(Math.random() * 200)
    return `rgb(${getRandom()},${getRandom()},${getRandom()})`
}
const data = reactive({
    avatar: undefined,
    name: '苍南校友',
    type: '地区',
    location: '浙江省温州市',
})
</script>
<template>
    <div class="od-layout">
        <div class="od-scroll">
            <div class="row">
                <span class="row-text">组织图标</span>
                <div
                    class="avatar"
                    :style="{
                        backgroundColor: randomBgColor()
                    }"
                >
                    <img v-if="data.avatar" :src="data.avatar" alt="">
                    <p v-else>{{ data.name.substring(0, 2) }}</p>
                </div>
            </div>
            <div class="row">
                <span class="row-text">名称</span>
                <span class="row-text">苍南校友</span>
            </div>
            <div class="row">
                <span class="row-text">类型</span>
                <span class="row-text">地区</span>
            </div>
            <div class="row">
                <span class="row-text">地区</span>
                <span class="row-text">浙江省温州市</span>
            </div>
        </div>
        <div class="bottom-logout">
            <button v-ripple="'rgba(255,255,255,.5)'">退出组织</button>
        </div>
    </div>
</template>
<style scoped lang='less'>
.od-layout {
    display: flex;
    flex-direction: column;
    background-color: white;

    .od-scroll {
        flex: 1;
        min-height: 0;
        overflow-y: auto;

        .row {
            display: flex;
            align-items: center;
            padding: 17px 20px;
            border-bottom: 0.5px solid rgba(232, 234, 236, 1);

            .row-text {
                font-size: 14px;
                color: rgba(86, 88, 93, 1);

                + .row-text {
                    color: rgba(38, 38, 38, 1);
                    letter-spacing: 1px;
                }
            }
            
            .avatar {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                overflow: hidden;

                > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                > p {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    color: rgba(255, 255, 255, 1);
                }
            }

            :last-child {
                margin-left: auto;
            }
        }
    }

    .bottom-logout {
        width: 100%;
        padding: 10px 45px 38px 45px;
        box-sizing: border-box;
        background-color: white;

        > button {
            border: none;
            height: 44px;
            width: 100%;
            background: rgba(24, 75, 138, 1);
            border-radius: 20px;
            font-size: 16px;
            color: rgba(255, 255, 255, 1);
        }
    }
}
</style>
