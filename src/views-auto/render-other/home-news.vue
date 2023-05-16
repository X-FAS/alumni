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
import { ref } from 'vue'

const listData = ref([
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '省赛一等奖！浙江东方职院在浙江省软件和信息技术人才人才人才人才人才人才人才',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '代言温州城！这个大学生获温州市青年学生网络直播创业...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '浙江东方职院开展非遗文化保护与传承工作调研',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '代言温州城！这个大学生获温州市青年学生网络直播创业2...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '温州市人民政府外事办公室副主任楼了凡一行到浙江东方...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '温州市人民政府外事办公室副主任楼了凡一行到浙江东方2...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '温州市人民政府外事办公室副主任楼了凡一行到浙江东方3...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '温州市人民政府外事办公室副主任楼了凡一行到浙江东方4...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '温州市人民政府外事办公室副主任楼了凡一行到浙江东方5...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '温州市人民政府外事办公室副主任楼了凡一行到浙江东方6...',
        date: '2023年4月28日'
    },
    {
        img: 'https://picsum.photos/seed/picsum/108/72',
        title: '温州市人民政府外事办公室副主任楼了凡一行到浙江东方7...',
        date: '2023年4月28日'
    },
])
</script>
<template>
    <div class="render-layout">
        <div class="mien-row" v-for="item in listData" :key="item.title">
            <img class="cover-img" src="https://picsum.photos/seed/picsum/108/72" alt="">
            <div class="row-content">
                <p>{{ item.title }}</p>
                <div>
                    <img :src="getImgUrl('/I01.svg', '/Home')" alt="">
                    <span>{{ item.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.render-layout {
    padding: 0 20px;
    background-color: white;
    box-sizing: border-box;
}
.mien-row {
    padding: 20px 0;
    display: flex;
    border-bottom: 0.5px solid rgba(232, 234, 236, 1);

    .cover-img {
        width: 108px;
        height: 72px;
        border-radius: 5px;
        flex-shrink: 0;
    }

    .row-content {
        padding: 2px 0;
        margin-left: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > p {
            color: rgba(38, 38, 38, 1);
            font-size: 15px;
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 18px;

            &:after {
                content: '1'
            }
        }

        > div {
            display: flex;
            align-items: center;
            margin-top: auto;

            > span {
                margin-left: 5px;
                font-size: 12px;
                color: rgba(136, 138, 145, 1);
            }
        }
    }
}
</style>


