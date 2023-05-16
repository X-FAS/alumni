<script setup>
import { onMounted, ref } from 'vue'


const props = defineProps(['navList'])

const emits = defineEmits(['click'])
// 代理对象
const navBox = ref()
// 更新滑块位置
const updateSlider = targetNode => {
    // 获取元素宽度
    const spanWidth = targetNode.clientWidth
    // 文字宽度 = 盒子宽度 - padding
    navSliderWidth.value = spanWidth - 52 + 'px'
    // 移动距离 = 盒子距离左边滚动条距离 + padding / 2
    navSliderLeft.value = targetNode.offsetLeft + 26 + 'px'
}
onMounted(() => {
    // 如果有默认选中元素，更新滑块位置
    if (!selectedNavIndex.value) return
    const targetNode = document.querySelector('.isSelected')
    updateSlider(targetNode)
    emits('click', targetNode.innerText)
    
})
// 选中滑块，默认第二选中
const selectedNavIndex = ref(1)
// 滑块宽度
const navSliderWidth = ref()
// 滑块移动距离
const navSliderLeft = ref()
// 点击导航
const selectedNav = (e, index) => {
    if (selectedNavIndex.value === index) return
    selectedNavIndex.value = index
    const targetNode = e.target
    const targetNodeName = targetNode.nodeName.toLocaleLowerCase()
    if (targetNodeName !== 'span') return
    updateSlider(targetNode)
    emits('click', targetNode.innerText)
}
</script>
<template>
    <div class="list-nav-box" ref="navBox">
        <span
            v-for="(list,index) in navList"
            :key="list"
            :class="{
                'isSelected': selectedNavIndex === index
            }"
            @click="e => selectedNav(e, index)"
        >
            {{ list }}
        </span>
    </div>
</template>
<style scoped lang='less'>
.list-nav-box {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    > span {
        flex-shrink: 0;
        padding: 0 26px;
        font-size: 14px;
        height: 100%;
        display: flex;
        align-items: center;
        transition: .2s;
    }

    .isSelected {
        // 选中span，后续可能会添加，留着
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: v-bind(navSliderLeft);
        transition: .2s;
        width: v-bind(navSliderWidth);
        height: 3px;
        background: rgba(255, 210, 93, 1);
        border-radius: 1px 1px 0 0;
    }
}
</style>
