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
import Masonry from "masonry-layout";
import { onMounted, onBeforeMount } from "vue";

let masonry
let gridNode
const updateLayout = () => {
    masonry.layout()
}
onMounted(() => {
    // 初始化瀑布流
    gridNode = document.querySelector('.no-grid-layout')
    masonry = new Masonry(gridNode, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-size",
        gutter: 10,
        horizontalOrder: true,
        percentPosition: true
    })
    moreImgs()
    setTimeout(() => {
        updateLayout()
    }, 1000)
})
const getRandomImg = () => 'https://picsum.photos/155/' + Math.round(Math.random() * 200 + 200)  + '?random=' + Math.round(Math.random() * 10000)
onBeforeMount(() => {
    // 回到顶端
    document.body.scrollTop = document.documentElement.scrollTop = 0
})
// 创建结构
const createItem = () => {
    const divNode = document.createElement('div')
    divNode.className = 'grid-item'
    const imgNode = document.createElement('img')
    imgNode.src = getRandomImg()
    imgNode.onload = updateLayout
    divNode.appendChild(imgNode)
    return divNode
}
// 创建加载更多
const createMoreNode = () => {
    const divNode = document.createElement('div')
    divNode.className = 'grid-item grid-size loading-more'
    divNode.onclick = moreImgs
    divNode.innerText = '加载更多'
    return divNode
}
const appendNode = elem => {
    gridNode.appendChild(elem);
    masonry.appended(elem)
    masonry.layout()
}
const removeNode = elem => {
    gridNode.removeChild(elem)
    masonry.remove(elem)
    masonry.layout()
}
// 加载更多图片
const moreImgs = event => {
    if (event) removeNode(event.target)
    // 加载十张
    for (let index = 0; index < 10; index++) {
        appendNode(createItem())
    }
    // 添加上加载
    setTimeout(() => {
        appendNode(createMoreNode())
    }, 1000);
}
</script>
<template>
    <div class="render-layout">
        <div class="no-grid-layout">
            <!-- <div class="grid-item" v-for="key in 10" :key="key">
                <img :src="getRandomImg()" @load="updateLayout" alt="">
            </div>
            <div class="grid-item grid-size loading-more" @click="moreImgs">
                加载更多
            </div> -->
        </div>

        <div class="bottom-btn">
            <button v-ripple="'rgba(255,255,255,.5)'">上传照片</button>
        </div>
    </div>
</template>
<style lang='less'>

.render-layout {
    padding: 0 4.8%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
.no-grid-layout {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    display: grid;

    .grid-item, .grid-size {
        width: 44%;
    }
    .grid-item {
        margin-bottom: 2.7%;
        height: auto;
        padding: 5px;
        background-color: white;

        > img {
            width: 100%;
        }
    }

    .loading-more {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        color: #333;
        height: 200px;
        transition: .2s;

        &:active {
            background-color: rgb(244, 244, 244);
        }
    }
}
.bottom-btn {
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
</style>
