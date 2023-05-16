<script setup>
import { getImgUrl } from '@/assets/utils/public-img'

const props = defineProps(['itemData'])
const emits = defineEmits(['click'])

</script>
<template>
    <div class="activity-list" @click="emits('click', props.itemData)">
        <img class="cover-img" :src="require('@/assets/Home' + itemData.coverImg)" alt="">
        <div class="list-content">
            <p class="list-title">{{ itemData.title }}</p>
            <div class="icon-p">
                <img :src="getImgUrl('/I02.svg', '/Home')" alt="">
                <p>{{ itemData.location }}</p>
            </div>
            <div class="icon-p">
                <img :src="getImgUrl('/I01.svg', '/Home')" alt="">
                <p>{{ itemData.date }}</p>
            </div>
        </div>
        <img :src="itemData.stateImg" class="right-state" alt="">
        <img :src="itemData.tipImg" class="left-tip" alt="">
    </div>
</template>
<style scoped lang='less'>
.activity-list {
    position: relative;
    background: rgba(255, 255, 255, 1);
    transition: .2s;
    box-shadow: 0px 0px 15px rgba(24, 75, 138, 0.05);
    display: flex;
    padding: 10px;
    box-shadow: 0px 0px 15px rgba(24, 75, 138, 0.05);
    border-radius: 8px;

    &:active {
        background: rgb(228, 228, 228);
    }

    +.activity-list {
        margin-top: 10px;
    }

    .cover-img {
        width: 108px;
        height: 72px;
        border-radius: 5px;
    }

    .list-content {
        flex: 1;
        margin-left: 10px;

        .list-title {
            font-weight: 600;
            font-size: 12px;
            color: rgba(38, 38, 38, 1);
            margin-bottom: 15px;
            margin-top: 6px;
            letter-spacing: .5px;
            line-height: 16px;
        }

        .icon-p {
            display: flex;
            align-items: center;
            color: rgba(136, 138, 145, 1);
            font-size: 12px;

            >img {
                margin-right: 3px;
                width: 14px;
                height: 14px;
            }

            +.icon-p {
                margin-top: 6px;
            }
        }
    }

    .right-state {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 44px;
        height: 44px;
    }

    .left-tip {
        position: absolute;
        top: 16px;
        left: 0;
        width: 42px;
        height: 18px;
    }
}
</style>
