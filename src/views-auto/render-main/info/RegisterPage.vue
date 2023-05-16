<script>
export default {
    routerOptions: {
        path: 'register',
        parentName: 'render-main',
        meta: {
            indexTop: 1
        }
    },
    methods: {
        onSubmit() {
            const validTask = [];
            for (const child of this.$children) {
                validTask.push(child.toValid());
            }
            Promise.all(validTask)
                .then(() => {
                    if(!isAgree) alert('请先同意协议！')
                    // 通过表单验证
                    console.log('表单预验证通过！')
                })
                .catch(err => err);
        }
    }
}
</script>

<script setup>
import { getBgUrl, getImgUrl } from '@/assets/utils/public-img';
import FormInput from './form-input.vue'
import { reactive, ref } from 'vue';

const phoneRef = ref()
const formData = reactive({
    username: '',
    ldCard: '',
    phone: '',
    code: '',
})
const sendByPhone = () => {
    return Promise.resolve()
}
const getCode = ({ target }) => {
    // 校验手机号
    this.$refs.phoneRef.toValid().then(() => {
        sendByPhone(this.formData.phone).then(()=>{
            // 发送手机号成功后开始倒计时
            this.startTimeOut(target, 60)
        })
    }).catch(err=>err)
}
// 手机号校验
const phoneValid = value => {
    if (!value) return Promise.reject('手机号不可为空！');
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if (!reg.test(value)) return Promise.reject('请填写正确的手机号！');
    return Promise.resolve();
}
// 身份证校验
const ldCordValid = value => {
    if (!value) return Promise.reject('身份证号不可为空！');
    const reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if (!reg.test(value)) return Promise.reject('请填写正确的身份证号！');
    return Promise.resolve();
}
// 姓名校验
const usernameValid = value => {
    if (!value) return Promise.reject('姓名不可为空！');
    return Promise.resolve();
}
// 验证码校验
const codeValid = value => {
    if (!value) return Promise.reject('验证码不可为空！');
    return Promise.resolve();
}

const isAgree = ref(false)
</script>
<template>
    <div
        :style="{
            backgroundImage: getBgUrl('/B03.svg', '/Info')
        }"
        class="register-layout"
    >
        <img class="logo" :src="getImgUrl('/footer_logo.svg', '/Footer')" alt="">
        <p class="register-title">校友注册认证</p>
        <div class="register-form">
            <FormInput
                class="form-input"
                v-model="formData.username"
                :prefix-src="getImgUrl('/F01.svg', '/Info')"
                :valid-fn="usernameValid"
                placeholder="姓名"
            />
            <FormInput
                class="form-input"
                v-model="formData.ldCard"
                :prefix-src="getImgUrl('/F02.svg', '/Info')"
                :valid-fn="ldCordValid"
                placeholder="身份证号"
            />
            <FormInput
                ref="phoneRef"
                class="form-input"
                v-model="formData.phone"
                :prefix-src="getImgUrl('/F03.svg', '/Info')"
                :valid-fn="phoneValid"
                placeholder="手机号"
            />
            <FormInput
                class="form-input"
                v-model="formData.code"
                :prefix-src="getImgUrl('/F04.svg', '/Info')"
                :valid-fn="codeValid"
                placeholder="验证码"
            >
                <template #suffix>
                    <span @click="getCode($event)" class="code-btn">获取验证码</span>
                </template>
            </FormInput>
            <div class="agree-text">
                <input id="agree" type="checkbox" v-model="isAgree">
                <label for="agree">
                    同意
                    <span>《浙江东方职业技术学院校友服务协议》</span>
                </label>
            </div>
            <button class="submit-btn" v-ripple="'#999'" @click="onSubmit">
                注册
            </button>
        </div>
    </div>
</template>
<style scoped lang='less'>
.register-layout {
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 41px 20px 0 20px;
    box-sizing: border-box;
    text-align: center;

    .logo {
        width: 64px;
        height: 64px;
        transform: scale(1.8);
    }
    
    .register-title {
        margin-top: 13px;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        font-size: 24px;
    }

    .register-form {
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        box-shadow: 0px 0px 15px rgba(24, 75, 138, 0.05);
        padding: 20px;
        margin-top: 27px;

        .form-input {
            .code-btn {
                color: rgba(24, 75, 138, 1);
                font-size: 14px;
            }
        }

        .agree-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 22px;
            margin-left: 3px;
            color: rgba(86, 88, 93, 1);

            > input {
                width: 17px;
                height: 17px;
            }
            > label {
                margin-left: 7px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 12px;

                > span {
                    color: rgba(24, 75, 138, 1);
                }
            }
        }

        .submit-btn {
            width: 100%;
            padding: 11px 0;
            font-size: 16px;
            color: rgba(255, 255, 255, 1);
            outline: none;
            border-radius: 6px;
            border: none;
            background: rgba(24, 75, 138, 1);
            margin-top: 18px;
        }
    }
}

</style>
