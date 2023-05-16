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
// 回到顶端
document.body.scrollTop = document.documentElement.scrollTop = 0
</script>
<template>
    <div class="layout-main">
        <div class="scroll-box">
            <img class="card-img" src="@/assets/Service/C01.png" alt="">
            <img class="card-img" src="@/assets/Service/C00.png" alt="">
            <p class="description-title">校友卡权益</p>
            <ol class="descriptions">
                <li>可以进入校园</li>
                <li>可以进入参加学校相关活动</li>
                <li>可以享受相关校园优惠折扣</li>
                <li>校友卡功能将不断增加完善，请关注“东方校友”</li>
            </ol>
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
        width: 100%;

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

    .scroll-box {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        padding: 20px 23px 0 20px;
    }
}
</style>
