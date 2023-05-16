<script>
export default {
    data() {
        return {
            transitionName: 'slide-left',
            time: '.6s'
        }
    },
    watch: {
        '$route'(to, from) {
            const toDepth = to.meta.indexTop || to.path.split('/').length
            const fromDepth = from.meta.indexTop || from.path.split('/').length
            console.log(toDepth, fromDepth, to.meta, from.meta)
            let animateName
            animateName =
                toDepth === fromDepth ?
                    'fade' :
                    (toDepth > fromDepth ?
                        'slide-right' :
                        'slide-left')
            this.transitionName = animateName
        }
    }
}
</script>

<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="child-view" />
        </transition>
    </div>
</template>

<style lang="less">

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 4px;
    height: 4px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:#989898;
}

#app {
    overflow: hidden;
    height: 100vh;
    font-family: PingFang SC;
}

.child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background-color: #f3f6fd;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 300px 999px rgba(202, 202, 202, 0.9), 0 0 5px 10px rgba(61, 61, 61, 0.5);
        pointer-events: none;
    }
}

.slide-left-enter-active {
    animation: slide-left-in v-bind(time) cubic-bezier(.4, .6, .2, 1);
}

.slide-left-leave-active {
    z-index: 10;
    animation: slide-left-out v-bind(time) cubic-bezier(.4, .6, .2, 1);

    &::after {
        animation: showShadowOut v-bind(time) linear;
    }
}

.slide-right-enter-active {
    z-index: 10;
    animation: slide-right-in v-bind(time) cubic-bezier(.4, .6, .2, 1);

    &::after {
        z-index: 10;
        animation: showShadowIn v-bind(time) linear;
    }
}

.slide-right-leave-active {
    z-index: 10;
    animation: slide-right-out v-bind(time) cubic-bezier(.4, .6, .2, 1);
}

@keyframes slide-left-in {
    from {
        transform: translateX(-50%) translateZ(0);
    }

    70% {
        transform: translateX(0px) translateZ(0);
    }

    to {
        transform: translateX(0px) translateZ(0);
    }
}

@keyframes showShadowIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: .7;
    }
}

@keyframes showShadowOut {
    0% {
        opacity: .4;
    }

    100% {
        opacity: 0;
    }
}

@keyframes slide-left-out {
    from {
        transform: translateX(0) translateZ(0);
    }

    60% {
        transform: translateX(100%) translateZ(0);
    }

    to {
        transform: translateX(100%) translateZ(0);
    }
}

@keyframes slide-right-in {
    from {
        transform: translateX(100%) translateZ(0);
    }

    to {
        transform: translateX(0px) translateZ(0);
    }
}

@keyframes slide-right-out {
    from {
        transform: translateX(0) translateZ(0);
    }

    to {
        transform: translateX(-50%) translateZ(0);
    }
}

.fade-enter-active {
    animation: fadeIn;
    animation-duration: .9s
}
.fade-leave-active {
    animation: fadeOut;
    animation-duration: .9s
}

.super-flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.ripple {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    background-color: red;
    transform: translate3d(-50%, -50%, 0) scale(0);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    animation: rippleBg 0.6s ease-in-out;
}

@keyframes rippleBg {
    0% {
        transform: translate3d(-50%, -50%, 0) scale(0);
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: translate3d(-50%, -50%, 0) scale(1);
        opacity: 0;
    }
}
</style>