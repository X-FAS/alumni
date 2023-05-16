<script setup>
import { getImgUrl } from '@/assets/utils/public-img';
import { ref } from 'vue'

const haveData = ref(false)
</script>
<template>
    <div class="activity-layout" v-if="!haveData">
        <img class="null-icon" :src="getImgUrl('/I02.svg', '/Organization')" alt="">
        <p>暂无新闻</p>
    </div>
    <div v-else>
        新闻
    </div>
</template>
<style scoped lang="less">
.activity-layout {
    padding-top: 50px;
    text-align: center;

    .null-icon {
        width: 128px;
        height: 128px;
        margin-bottom: 22px;
    }

    > p {
        font-size: 18px;
        color: rgba(168, 170, 174, 1);
    }
}
</style>
