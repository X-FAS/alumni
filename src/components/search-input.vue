<script setup>
import { computed } from 'vue'
const props = defineProps(['placeholder', 'model'])

const emits = defineEmits(['update:model'])

// 搜索值
const iconPlaceholder = computed(() => {
    return '\ue651 ' + props.placeholder
})
const onInput = e => emits('update:model', e.target.value)
</script>
<template>
    <input type="text" :value="model" @input="onInput" :placeholder="iconPlaceholder" class="iconfont" />
</template>
<style scoped lang='less'>
@font-face {
  font-family: 'iconfont';  /* Project id 4061769 */
  src: url('//at.alicdn.com/t/c/font_4061769_jhpr0rzj2kq.woff2?t=1683774745281') format('woff2'),
       url('//at.alicdn.com/t/c/font_4061769_jhpr0rzj2kq.woff?t=1683774745281') format('woff'),
       url('//at.alicdn.com/t/c/font_4061769_jhpr0rzj2kq.ttf?t=1683774745281') format('truetype');
}

input {
    width: 100%;
    height: 32px;
    border-radius: 20px;
    font-size: 14px;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;
    vertical-align: bottom;

    &:focus {
        border: none;
        outline: none;
    }

    &::placeholder {
        color: rgba(168, 170, 174, 1);
        letter-spacing: .5px;
        opacity: 0.8;
    }
}
</style>
