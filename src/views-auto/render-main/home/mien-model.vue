<script>
export default {
    routerOptions: {
        path: 'mien',
        parentName: 'home-page',
        meta: {
            indexTop: 1
        }
    }
}
</script>

<script setup>
import HomeModelTitle from '@/components/home-model-title.vue';
import { ref, onMounted } from 'vue'
import { getImgUrl } from '@/assets/utils/public-img'

// 当前新闻下标
const newsIndex = ref(1)
// 新闻数据
const newsList = ref([
    {
        title: '代言温州城！这个大学生获温州市青年学生网络直播创业大赛冠军1',
        img: '/banner2.png',
        date: '2023年4月28日',
        link: ''
    },
    {
        title: '代言温州城！这个大学生获温州市青年学生网络直播创业大赛冠军2',
        img: '/banner2.png',
        date: '2023年4月28日',
        link: ''
    },
    {
        title: '代言温州城！这个大学生获温州市青年学生网络直播创业大赛冠军3',
        img: '/banner2.png',
        date: '2023年4月28日',
        link: ''
    }
])

setInterval(() => {
    newsIndex.value = (newsIndex.value + 1) % newsList.value.length
}, 3000)


const bodyWidth = ref(0)
onMounted(() => {
    bodyWidth.value = document.documentElement.clientWidth * -1 + 'px'
})
</script>
<template>
    <div>
        <!-- 模块标题 -->
        <HomeModelTitle @more="$router.push('/home-mien')" title="校友风采" class="model-title" />
        <!-- 模块内容 -->
        <div class="model-news">
            <div style="display: flex;overflow: hidden;">
                <div class="model-content" v-for="news in newsList" :key="news.title">
                    <img class="model-banner-img" :src="require('@/assets/Home' + news.img)" alt="">
                    <div class="model-banner-info">
                        <p class="banner-info-text">{{ news.title }}</p>
                        <p class="banner-info-date">
                            <img :src="getImgUrl('/I01.svg', '/Home')" alt="">
                            <span>{{ news.date }}</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="model-news-nav">
                <span
                    :class="{
                        'selectedNew': newsIndex === index
                    }"
                    v-for="(news, index) in newsList"
                    :key="news.title + 'index'"
                />
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.model-title {
    padding: 0 20px;
}

.model-content {
    flex: 1 0 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .2s;
    margin-top: 2px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(24, 75, 138, 0.05);

    .model-banner-img {
        width: 335px;
        height: 224px;
    }

    .model-banner-info {
        padding: 12px 15px 15px;
        margin: 0 15px;
        background-color: white;


        .banner-info-text {
            color: rgba(38, 38, 38, 1);
            font-size: 16px;
            line-height: 22px;
        }

        .banner-info-date {
            display: flex;
            align-items: center;
            margin-top: 8px;

            >img {
                width: 14px;
                height: 14px;
                margin-right: 1.5px;
            }

            >span {
                color: rgba(151, 154, 158, 1);
                font-size: 12px;
            }
        }
    }
}

.model-content:first-child {
    margin-left: calc(v-bind(newsIndex) * v-bind(bodyWidth));
}

.model-news {
    position: relative;
    margin-bottom: 50px;

    .model-news-nav {
        display: flex;
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translate(-50%);

        > span {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(189, 198, 208, 1);
            transition: .2s;

            + span {
                margin-left: 10px;
            }
        }

        .selectedNew {
            background: rgba(24, 75, 138, 1);
        }
    }
}
</style>
