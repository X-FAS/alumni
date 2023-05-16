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
import { getBgUrl } from '@/assets/utils/public-img';
import { ref } from 'vue'

const pictureGroup = ref([
    {
        groupId: 1,
        groupTitle: '浙江东方职业技术学院',
        groupCount: 16,
    },
    {
        groupId: 2,
        groupTitle: '浙江东方职业技术学院2',
        groupCount: 16,
    },
    {
        groupId: 3,
        groupTitle: '浙江东方职业技术学院3',
        groupCount: 16,
    },
    {
        groupId: 4,
        groupTitle: '浙江东方职业技术学院4',
        groupCount: 16,
    },
])
</script>
<template>
    <div>
        <div
            :style="{
                backgroundImage: getBgUrl('/B02.svg', '/Service')
            }"
            class="picture-group"
            v-for="group in pictureGroup"
            :key="group.groupId"
            @click="$router.push('picture-group-detail')"
        >
            <img src="" alt="">
            <div class="img-bottom">
                <p>{{ group.groupTitle }}</p>
                <span>{{ group.groupCount }}张</span>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.picture-group {
    height: 271px;
    background-size: 100%;
    background-position: center;
    margin-top: 7px;
    padding: 32px 40px;
    box-sizing: border-box;

    > img {
        width: 294px;
        height: 172px;
        object-fit: cover;
        display: block;
    }

    .img-bottom {
        margin-top: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        > p {
            font-size: 16px;
            color: rgba(38, 38, 38, 1);
            font-weight: bold;
            letter-spacing: .5px;
        }

        > span {
            font-size: 14px;
            color: rgba(136, 138, 145, 1);
        }
    }
}
</style>
