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
import { getImgUrl } from '@/assets/utils/public-img'

// 回到顶端
document.body.scrollTop = document.documentElement.scrollTop = 0
</script>
<template>
    <div class="layout-main">
        <div style="flex: 1;min-height: 0;overflow-y: auto;">
            <img class="card-img" :src="getImgUrl('/default-C02.png', '/Home')" alt="">
            <img class="card-img" :src="getImgUrl('/default-C01.png', '/Home')" alt="">
            <p class="description-title">浙江东方职业技术学院校友卡使用说明</p>
            <ol class="descriptions">
                <li>可以进入校园</li>
                <li>可以进入参加学校相关活动</li>
                <li>可以享受相关校园优惠折扣</li>
                <li>校友卡功能将不断增加完善，请关注“东方校友”</li>
            </ol>
            <p class="tip">
                温馨提示:请提前准备好<span>个人正面免冠证件照</span>(JPG格式)
            </p>
        </div>
        
        <div class="apply-card">
            <button v-ripple="'rgba(255,255,255,.5)'">申请校友卡</button>
        </div>
    </div>
</template>
<style scoped lang='less'>
.layout-main {
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
    background: rgba(245, 248, 254, 1);
    display: flex;
    flex-direction: column;

    .card-img {
        width: 275px;
        height: 173px;

        + .card-img {
            margin-top: 15px;
        }
    }

    .description-title {
        margin-top: 24px;
        text-align: left;
        color: rgba(24, 75, 138, 1);
        font-size: 16px;
        font-weight: 600;
        letter-spacing: .5px;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            width: 4px;
            height: 16px;
            background: rgba(248, 166, 43, 1);
            border-radius: 3px;
            margin-right: 5px;
        }
    }

    .descriptions {
        text-align: left;
        margin-top: 13px;

        > li {
            list-style: decimal;
            color: rgba(38, 38, 38, 1);
            font-size: 14px;
            line-height: 24px;
            list-style-position: inside;
        }
    }

    .tip {
        margin-top: 16px;
        text-align: left;
        font-weight: bold;
        color: rgba(38, 38, 38, 1);
        font-size: 13px;
        line-height: 24px;

        > span {
            color: rgba(255, 0, 0, 1);
            font-weight: 600;
        }
    }

    .apply-card {
        width: 100%;
        padding: 10px 20px 38px 20px;
        box-sizing: border-box;
        background-color: white;

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

    div:first-child {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        padding: 20px 23px 0 20px;
    }
}
</style>
