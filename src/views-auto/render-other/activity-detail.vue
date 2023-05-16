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
import { onBeforeMount, onMounted } from 'vue';
import { useRoute } from '@/router/useComponent'
import { getImgUrl } from '@/assets/utils/public-img';

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
    console.log(decodeId(route.query.activityId), '!')
})
onBeforeMount(() => {
    // 回到顶端
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

</script>
<template>
    <div style="background-color: white;display: flex;height: 100vh;flex-direction: column;">
        <div style="flex: 1;min-height: 0;overflow-y: auto;">
            <div class="header-model">
                <img class="detail-head" src="@/assets/Home/B01.png" alt="">
                <div class="detail-info">
                    <p class="detail-info1">东方学院首届校友网球联谊赛</p>
                    <div class="detail-info2">
                        <span>计划报名50人，每位限报1人</span>
                        <img src="" alt="">
                    </div>
                    <div class="detail-info3">
                        <span>已报名：</span>
                        <span style="color: rgba(24, 75, 138, 1);">26人</span>
                        <div>
                            <span>活动费用：</span>
                            <span style="color: rgba(24, 75, 138, 1);">免费</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-content">
                <div class="detail-content-model">
                    <p class="detail-content-title">活动时间</p>
                    <p class="detail-content-text">2023-04-22 08:00 至 2023-04-22 14:00</p>
                </div>
                <div class="detail-content-model">
                    <p class="detail-content-title">报名时间</p>
                    <p class="detail-content-text">2023-03-30 00:00 至 2023-04-12 17:00</p>
                </div>
                <div class="detail-content-model">
                    <p class="detail-content-title">报名地点</p>
                    <p class="detail-content-text">浙江东方职业技术学院体育馆</p>
                </div>
                <div class="detail-content-model phone-model">
                    <p class="detail-content-title">联系电话</p>
                    <p class="detail-content-text">13668852585 陈老师</p>
                    <img :src="getImgUrl('/I01.svg', '/Activity')" alt="">
                </div>
                <div class="detail-content-model">
                    <p class="detail-content-title">活动详情</p>
                    <p class="detail-content-text">
                        很多校友都对这次的比赛给予高度赞赏和肯定，在全面健身、全民健康和全民小康的大背景下，希望母校能以体育比赛为平台，多举办这样的活动，凝聚更多的校友关心和支持母校的发展，在运动中共享健康、快乐和友谊。
                    </p>
                </div>
            </div>
        </div>
        <div class="sign-up">
            <button v-ripple="'rgba(255,255,255,.5)'">报名中</button>
        </div>
    </div>
</template>
<style scoped lang='less'>
.header-model {
    border-bottom: 0.5px solid rgba(232, 234, 236, 1);

    .detail-head {
        height: 220px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    .detail-info {
        padding: 20px;
        
        .detail-info1 {
            color: rgba(38, 38, 38, 1);
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 13px;
        }

        .detail-info2 {
            display: flex;
            align-items: center;
            font-size: 13px;
            margin-bottom: 13px;
            color: rgba(136, 138, 145, 1);

            > img {
                margin-left: auto;
                width: 42px;
                height: 18px;
            }
        }

        .detail-info3 {
            display: flex;
            align-items: center;
            font-size: 13px;
            color: rgba(136, 138, 145, 1);

            > div {
                margin-left: auto;
            }
        }
    }
}

.detail-content {
    padding: 0 20px;
    padding-bottom: 7px;

    .detail-content-model {
        padding: 15px 0;
        border-bottom: 0.5px solid rgba(232, 234, 236, 1);
        
        .detail-content-title {
            margin-bottom: 11px;
            display: flex;
            align-items: center;
            font-size: 16px;
            color: rgba(38, 38, 38, 1);
            font-weight: 600;

            &::before {
                content: '';
                width: 4px;
                height: 14px;
                background: rgba(248, 166, 43, 1);
                border-radius: 3px;
                margin-right: 6px;
            }
        }

        .detail-content-text {
            font-size: 14px;
            color: rgba(86, 88, 93, 1);
            line-height: 20px;
            text-align: justify;
        }
    }

    .phone-model {
        position: relative;

        > img {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
        }
    }

    .detail-content-model:last-child {
        border-bottom: none;
    }
}

.sign-up {
    height: 90px;
    padding: 12px 20px;
    box-sizing: border-box;
    border-top: 0.5px solid rgba(232, 234, 236, 1);

    > button {
        border: none;
        height: 40px;
        width: 100%;
        background: rgba(24, 75, 138, 1);
        border-radius: 20px;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
    }
}
</style>
