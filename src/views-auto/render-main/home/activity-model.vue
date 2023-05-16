<script>
export default {
    routerOptions: {
        path: 'activity',
        parentName: 'home-page',
        meta: {
            indexTop: 1
        }
    }
}
</script>
<script setup>
import HomeModelTitle from '@/components/home-model-title.vue'
import { ref } from 'vue'
import { getImgUrl } from '@/assets/utils/public-img'
import ActivityItem from '@/components/activity-item.vue'

// 数据
const activityList = ref([
    {
        id: 1,
        title: '东方学院首届校友网球联谊赛',
        location: '东方学院网球场',
        date: '2023年4月28日',
        stateImg: getImgUrl('/S01.svg', '/Home'),
        tipImg: getImgUrl('/L01.svg', '/Home'),
        coverImg: '/A01.png'
    },
    {
        id: 2,
        title: '东方学院第二届校友乒乓球比赛',
        location: '东方学院体育馆',
        date: '2023年4月28日',
        stateImg: getImgUrl('/S02.svg', '/Home'),
        tipImg: getImgUrl('/L02.svg', '/Home'),
        coverImg: '/A02.png'
    },
    {
        id: 3,
        title: '“不忘来时路一起向未来”——东方学院校友毅行活动',
        location: '东方学院行政楼',
        date: '2023年4月28日',
        stateImg: getImgUrl('/S03.svg', '/Home'),
        tipImg: getImgUrl('/L03.svg', '/Home'),
        coverImg: '/A03.png'
    },
])

const encodeId = id => {
    const random = Math.round(Math.random() * 899 + 100)
    return (id + random) / random + random.toString()
}
</script>
<template>
   <div class="layout-main">
        <!-- 模块标题 -->
        <HomeModelTitle @more="$router.push('/home-activity')" title="活动报名" class="model-title" />
        <ActivityItem
            v-for="data in activityList"
            :key="data.title"
            :item-data="data"
            @click="itemData => $router.push({
                name: 'activity-detail',
                query: {
                    activityId: encodeId(itemData.id)
                }
            })"
        />
   </div>
</template>
<style scoped lang='less'>
.layout-main {
    padding: 20px;
    padding-top: 0;

    .model-title {
        margin-bottom: 2px;
    }
}
</style>
