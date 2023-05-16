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
import { ref } from 'vue'
import ActivityItem from '@/components/activity-item.vue'
import { getImgUrl } from '@/assets/utils/public-img'

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
    {
        id: 4,
        title: '“不忘来时路一起向未来”——东方学院校友毅行活动2',
        location: '东方学院行政楼',
        date: '2023年4月28日',
        stateImg: getImgUrl('/S03.svg', '/Home'),
        tipImg: getImgUrl('/L03.svg', '/Home'),
        coverImg: '/A03.png'
    },
    {
        id: 5,
        title: '“不忘来时路一起向未来”——东方学院校友毅行活动3',
        location: '东方学院行政楼',
        date: '2023年4月28日',
        stateImg: getImgUrl('/S03.svg', '/Home'),
        tipImg: getImgUrl('/L03.svg', '/Home'),
        coverImg: '/A03.png'
    },
    {
        id: 6,
        title: '“不忘来时路一起向未来”——东方学院校友毅行活动4',
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
    <div class="render-layout">
        <ActivityItem @click="infoData => $router.push({
            name: 'activity-detail',
            query: {
                activityId: encodeId(infoData.id)
            }
        })" v-for="data in activityList" :key="data.title" :item-data="data" />
    </div>
</template>
<style scoped lang='less'>
.render-layout {
    padding: 20px;
    box-sizing: border-box;
}
</style>
