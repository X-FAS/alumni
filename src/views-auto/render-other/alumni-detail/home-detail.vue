<script setup>
defineProps(['setSelectedIndex', 'setIsHidden'])
</script>
<template>
    <div>
        主页信息
        <button @click="setSelectedIndex(1)">组织信息</button>
        <button @click="setIsHidden(true)">开启隐藏</button>
    </div>
</template>
<style scoped lang='less'>

</style>
