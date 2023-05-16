
<script>
export default {
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    props: {
        // 前缀图片地址
        prefixSrc: {
            type: String
        },
        // 双向绑定值
        inputValue: {
            type: String
        },
        placeholder: {
            type: String,
            default: '请输入...'
        },
        // 自定义校验函数
        validFn: {
            type: Function,
            default: () => Promise.resolve()
        },
        // 触发校验时机 blur or change
        trigger: {
            type: String,
            default: 'blur'
        }
    },
    data () {
        return {
            inputErrorText: ''
        }
    },
    methods: {
        onBlur () {
            if (this.$props.trigger === 'blur') this.toValid().catch(err=>err)
        },
        toValid () {
            return new Promise((resolve, reject) => {
                const value = this.$refs.inputRef.value
                this.$props.validFn(value)
                    .then(() => {
                        this.inputErrorText = ''
                        resolve()
                    })
                    .catch(err => {
                        this.inputErrorText = err
                        console.warn(value + '校验未通过！')
                        reject()
                    })
            })
        },
        onInput ({ target: { value } }) {
            this.$emit('change', value)
            if (this.$props.trigger === 'change') this.toValid().catch(err=>err)
        }
    }
}
</script>

<template>
    <div class="input-container">
        <img class="prefix-icon" :src="$props.prefixSrc" alt="">
        <input
            ref="inputRef"
            type="text"
            :value="inputValue"
            @input="onInput"
            :placeholder="$props.placeholder"
            @blur="onBlur"
            :class="{ 
                'error': inputErrorText
            }"
        />
        <div class="suffix">
            <slot name="suffix" />
        </div>
        <transition
            enter-active-class="error-enter"
            leave-active-class="error-leave">
            <span class="error-tip" v-if="inputErrorText">{{ inputErrorText }}</span>
        </transition>
    </div>
</template>

<style>
.input-container + .input-container {
    margin-top: 20px;
}
</style>
<style lang='less' scoped>

.input-container {
    position: relative;

    .prefix-icon {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
    }

    input {
        height: 44px;
        border-radius: 6px;
        background: rgba(249, 250, 253, 1);
        border: 0.5px solid rgba(232, 234, 236, 1);
        color: rgba(168, 170, 174, 1);
        font-family: PingFang SC;
        font-size: 14px;
        padding-left: 56px;
        width: 100%;
        box-sizing: border-box;
        outline: none;

        &::placeholder {
            color: rgba(168, 170, 174, 1);
            font-family: PingFang SC;
            font-size: 14px;
            letter-spacing: 1.5px;
        }
    }

    .error {
        border: 1px solid rgb(245, 108, 108);
    }

    .hasSuffix {
        padding-right: 102px;
    }

    .suffix {
        position: absolute;
        right: 0px;
        top: 0px;
        display: flex;
        height: 100%;
        padding: 0 20px;
        justify-content: center;
        align-items: center;
    }

    .error-enter {
        animation: enter .15s ease-in-out;
    }
    .error-leave {
        animation: enter .15s ease-in-out reverse;
    }

    .error-tip {
        position: absolute;
        bottom: -15px;
        left: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        color: rgb(245, 108, 108);
    }
}

@keyframes enter {
    0% {
        opacity: 0;
        transform: rotateX(-90deg);
    }
    
    100% {
        opacity: 1;
        transform: rotateX(0);
    }
}
</style>