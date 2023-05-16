<script setup>
const emits = defineEmits(['more'])
const props = defineProps({
    title: String
})
</script>
<template>
    <div>
        <div class="model-header">
            <span>{{ title }}</span>
            <div class="header-right" @click="emits('more')">
                <span>更多</span>
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.14613 6.4528L3.7632 11.8136C3.51361 12.0621 3.10345 12.0621 2.85386 11.8136C2.60426 11.565 2.60426 11.1565 2.85386 10.908L7.78212 6L2.85386 1.09202C2.60426 0.843459 2.60426 0.434989 2.85386 0.186424C3.10345 -0.0621413 3.51361 -0.0621413 3.7632 0.186424L9.14613 5.5472C9.39573 5.79576 9.39573 6.20423 9.14613 6.4528Z" fill="#A8AAAE"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.model-header {
    display: flex;
    align-items: center;
    height: 44px;

    > span {
        font-size: 18px;
    }

    .header-right {
        display: flex;
        margin-left: auto;

        > span {
            font-size: 14px;
            margin-left: auto;
            margin-right: 3px;
            color: rgb(136, 139, 143);
        }

        > svg {
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            // margin-bottom: 2px;
        }   

        &:active {
            > span {
                color: rgb(90, 92, 95);
            }
            > svg {
                path {
                    fill: rgb(90, 92, 95);
                }
            }
        }
    }

    &::before {
        content: '';
        width: 4px;
        height: 19px;
        border-radius: 2px;
        background: rgba(24, 75, 138, 1);
        margin-right: 8px;
    }
}
</style>
