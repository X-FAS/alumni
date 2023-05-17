<script>
import miment from 'miment';
export default {
    routerOptions: {
        path: 'register-all',
        parentName: 'render-main'
    },
    data () {
        return {
            isAgree: false,
            nowSelectDateName: ''
        }
    },
    methods: {
        onSubmit() {
            const validTask = [];
            for (const child of this.$children) {
                const validFn = child?.toValid
                if (validFn) validTask.push(validFn());
            }
            Promise.all(validTask)
                .then(() => {
                    if(!this.isAgree) return this.$refs.tip.show()
                    // 通过表单验证
                    console.log('表单预验证通过！')
                })
                .catch(err => err);
        },
        showDatePicker(formItem) {
            this.nowSelectDateName = formItem
            if (!this.datePicker) {
                this.datePicker = this.$createDatePicker({
                    title: 'Date Picker',
                    min: new Date(2008, 7),
                    max: new Date(2020, 9),
                    value: new Date(),
                    columnCount: 2,
                    onSelect: this.selectHandle
                })
            }
            this.datePicker.show()
        },
        // 选中时间
        selectHandle(date, selectedVal, selectedText) {
            this._setupState.formData[this.nowSelectDateName] = miment(date).format('YYYY-MM-DD')
        },
        openSelect (refNode) {
            console.log(this.$refs[refNode].showPicker())
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
    schoolNum: '',
    schoolStart: '',
    schoolEnd: '',
    major: '',
    department: '',
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
// 学号校验
const schoolNumValid = value => {
    if (!value) return Promise.reject('学号不可为空！');
    return Promise.resolve();
}
// 院系校验
const departmentValid = value => {
    if (!value) return Promise.reject('请先选择院系！');
    return Promise.resolve();
}
// 专业校验
const majorValid = value => {
    if (!value) return Promise.reject('请先选择专业！');
    return Promise.resolve();
}
// 入校时间校验
const schoolStartValid = value => {
    if (!value) return Promise.reject('请先选择入校时间！');
    return Promise.resolve();
}
// 毕业时间校验
const schoolEndValid = value => {
    if (!value) return Promise.reject('请先选择毕业时间！');
    return Promise.resolve();
}
// 院系
const departmentOptions = ref([
    '人文学院',
    '财金学院',
    '数字工程学院',
    '马克思主义学院',
    '管理学院',
])

// 专业
const majorOptions = ref([
    '软件技术',
    '网络技术',
    '人工智能',
    '市场营销'
])

</script>
<template>
    <div
        :style="{
            backgroundImage: getBgUrl('/B03.svg', '/Info')
        }"
        class="register-layout"
        id="registerAll"
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
                v-model="formData.schoolNum"
                :prefix-src="getImgUrl('/F05.svg', '/Info')"
                :valid-fn="schoolNumValid"
                placeholder="学号"
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
                :readonly="true"
                @click="openSelect('departmentSelect')"
                class="form-input"
                v-model="formData.department"
                :prefix-src="getImgUrl('/F06.svg', '/Info')"
                :valid-fn="departmentValid"
                placeholder="院系"
            >
                <template #suffix>
                    <div class="cube-select">
                        <cube-select
                            ref="departmentSelect"
                            v-model="formData.department"
                            :options="departmentOptions"
                        />
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#979a9e"/>
                        </svg>
                    </div>
                </template>
            </FormInput>
            <FormInput
                :readonly="true"
                class="form-input"
                @click="openSelect('majorSelect')"
                v-model="formData.major"
                :prefix-src="getImgUrl('/F07.svg', '/Info')"
                :valid-fn="majorValid"
                placeholder="专业"
            >
                <template #suffix>
                    <div class="cube-select">
                        <cube-select
                            ref="majorSelect"
                            v-model="formData.major"
                            :options="majorOptions"
                        />
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#979a9e"/>
                        </svg>
                    </div>
                </template>
            </FormInput>
            <FormInput
                :readonly="true"
                @click="showDatePicker('schoolStart')"
                class="form-input"
                v-model="formData.schoolStart"
                :prefix-src="getImgUrl('/F08.svg', '/Info')"
                :valid-fn="schoolStartValid"
                placeholder="入校时间"
            >
                <template #suffix>
                    <div class="cube-select" @click="showDatePicker('schoolStart')">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#979a9e"/>
                        </svg>
                    </div>
                </template>
            </FormInput>
            <FormInput
                :readonly="true"
                @click="showDatePicker('schoolEnd')"
                class="form-input"
                v-model="formData.schoolEnd"
                :prefix-src="getImgUrl('/F08.svg', '/Info')"
                :valid-fn="schoolEndValid"
                placeholder="毕业时间"
            >
                <template #suffix>
                    <div class="cube-select" @click="showDatePicker('schoolEnd')">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#979a9e"/>
                        </svg>
                    </div>
                </template>
            </FormInput>
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
            <div style="position: relative">
                <div class="agree-text" ref="tip">
                    <input id="agree" type="checkbox" v-model="isAgree">
                    <label for="agree">
                        同意
                        <span>《浙江东方职业技术学院校友服务协议》</span>
                    </label>
                </div>
                <cube-tip ref="tip" direction="bottom" style="left:20px;top:-50px;">请先勾选同意协议！</cube-tip>
            </div>
            <button class="submit-btn" v-ripple="'#999'" @click="onSubmit">
                注册
            </button>
        </div>
    </div>
</template>
<style lang="less">
#registerAll {
    // 取消默认箭头
    .cube-select-icon {
        visibility: hidden;
    }
    // 选择器文字
    .cube-select-text, .cube-select-placeholder {
        color: transparent;
        visibility: hidden;
    }
}
</style>

<style scoped lang='less'>
.register-layout {
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;

    .logo {
        position: absolute;
        width: 64px;
        height: 64px;
        transform: translateX(-50%) scale(1.8);
        left: 50%;
        top: 41px;
    }
    
    .register-title {
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        font-size: 24px;
    }

    .register-form {
        position: relative;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        box-shadow: 0px 0px 15px rgba(24, 75, 138, 0.05);
        padding: 20px;
        margin-top: 179px;

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

.cube-select {
    position: relative;
    svg {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%) rotate(90deg);
    }
}
// 取消cube选择器的边框
.cube-select {
    padding: 0;
    margin-left: 5px;
    &::after {
        border: none;
    }

    + svg {
        pointer-events: none;
    }
}
.cube-select_active:after {
    border: none;
}
</style>
