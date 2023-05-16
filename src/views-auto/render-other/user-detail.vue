<script>
export default {
    routerOptions: {
        meta: {
            indexTop: 2
        }
    },
    data () {
        return {
            // 所在地数据
            locationOptions: [
                {
                    text: '浙江省',
                    value: '浙江省',
                    children: [
                        {
                            text: '温州市',
                            value: '温州市',
                        },
                        {
                            text: '宁波市',
                            value: '宁波市',
                        },
                        {
                            text: '杭州市',
                            value: '杭州市',
                        },
                    ]
                },
                {
                    text: '湖北省',
                    value: '湖北省',
                    children: [
                        {
                            text: '武汉市',
                            value: '武汉市',
                        },
                        {
                            text: '黄石市',
                            value: '黄石市',
                        },
                        {
                            text: '襄阳市',
                            value: '襄阳市',
                        },
                    ]
                }
            ],
            modelData2: {
                // 区域
                region: '国内',
                // 所在地
                location: '',
                // 行业
                industry: '',
                // 单位
                unit: '温州捷点信息技术有限公司',
                // 职称
                professional: '商务主管',
                // 职务
                position: '商务代表',
            },
            cascadePicker: undefined
        }
    },
    mounted () {
        this.cascadePicker = this.$createCascadePicker({
            title: '选择所在地',
            data: this.locationOptions,
            selectedIndex: [0, 0],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
        })
    },
    methods: {
        showCascadePicker() {
          this.cascadePicker.show()
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
            this.modelData2.location = selectedVal.join('')
        },
        cancelHandle() {
            console.log('关闭所在地选择')
        }
    }
}
</script>
<script setup>
import { getBgUrl } from '@/assets/utils/public-img';
import { reactive, ref } from 'vue'

const modelData1 = reactive({
    // 在校经历
    experience: '专科',
    // 在校时间
    schoolTime: '2008-2012',
    // 院系
    department: '数字工程学院',
    // 专业
    major: '人工智能'
})

const regionOptions = ref([
    '国内',
    '国外'
])

const industryOptions = ref([
    '互联网',
    '金融',
    '会计',
])

const modelData3 = reactive({
    phone: '13658254852',
    email: '12345678@qq.com',
    wechat: 'wz1236856',
})
</script>
<template>
    <div style="display: flex;flex-direction: column;" id="user-detail">
        <div class="scroll-view">
            <div class="user-card" :style="{
                backgroundImage: getBgUrl('/B02.svg', '/Info')
            }">
                <div class="user-avatar">
                    <img src="@/assets/Info/avatar.png" alt="">
                    <p>孙婉茹</p>
                </div>
                <div class="progress-bar">
                    <span>资料完整度</span>
                    <p />
                    <span>33%</span>
                </div>
            </div>

            <div class="model-layout model1">
                <p class="model-title default-show">校友信息</p>

                <p class="info-row">
                    <span>在校经历</span>
                    <span>{{ modelData1.experience || '暂无' }}</span>
                </p>
                <p class="info-row">
                    <span>在校时间</span>
                    <span>{{ modelData1.schoolTime || '暂无' }}</span>
                </p>
                <p class="info-row">
                    <span>院系</span>
                    <span>{{ modelData1.department || '暂无' }}</span>
                </p>
                <p class="info-row">
                    <span>专业</span>
                    <span>{{ modelData1.major || '暂无' }}</span>
                </p>
            </div>
            <div class="model-layout model2">
                <p class="model-title default-show">职业信息</p>
                <div class="info-row">
                    <span>区域</span>
                    <div class="info-row-select">
                        <cube-select
                            v-model="modelData2.region"
                            :options="regionOptions"
                        />
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#1f1f1f"/>
                        </svg>
                    </div>
                </div>
                <div class="info-row">
                    <span>所在地</span>
                    <div class="info-row-select" @click="showCascadePicker">
                        <span :style="{
                            color: modelData2.location ? 'rgb(38, 38, 38)': '#ccc'
                        }">{{ modelData2.location || '请选择' }}</span>
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#1f1f1f"/>
                        </svg>
                    </div>
                </div>
                <div class="info-row">
                    <span>行业</span>
                    <div class="info-row-select">
                        <cube-select
                            v-model="modelData2.industry"
                            :options="industryOptions"
                        />
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6705 7.52827L4.39043 13.7825C4.09924 14.0725 3.62072 14.0725 3.32953 13.7825C3.03834 13.4925 3.03834 13.016 3.32953 12.726L9.07917 7L3.32953 1.27403C3.03834 0.984036 3.03834 0.507487 3.32953 0.217495C3.62072 -0.0724982 4.09924 -0.0724982 4.39043 0.217495L10.6705 6.47173C10.9617 6.76173 10.9617 7.23827 10.6705 7.52827Z" fill="#1f1f1f"/>
                        </svg>
                    </div>
                </div>
                <p class="info-row">
                    <span>单位</span>
                    <span>{{ modelData2.unit || '暂无' }}</span>
                </p>
                <p class="info-row">
                    <span>职称</span>
                    <span>{{ modelData2.professional || '暂无' }}</span>
                </p>
                <p class="info-row">
                    <span>职务</span>
                    <span>{{ modelData2.position || '暂无' }}</span>
                </p>
            </div>
            <div class="model-layout model3">
                <p class="model-title default-show">联系信息</p>
                <p class="info-row">
                    <span>手机号码</span>
                    <span>{{ modelData3.phone || '暂无' }}</span>
                </p>
                <p class="info-row">
                    <span>电子邮箱</span>
                    <span>{{ modelData3.email || '暂无' }}</span>
                </p>
                <p class="info-row">
                    <span>微信号</span>
                    <span>{{ modelData3.wechat || '暂无' }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="less">
#user-detail {
    // 取消默认箭头
    .cube-select-icon {
        visibility: hidden;
    }
    // 选择器文字
    .cube-select-text {
        color: rgb(38, 38, 38);
        font-size: 14px;
        letter-spacing: 1px;
    }
}
</style>
<style scoped lang="less">
.scroll-view {
    padding: 30px 20px 20px;
    flex: 1;
    min-height: 0;
    overflow-y: auto;

    .user-card {
        position: relative;
        height: 130px;
        border-radius: 10px;
        background-size: cover;
        margin-bottom: 15px;

        .user-avatar {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;

            >img {
                width: 64px;
                height: 64px;
                border-radius: 50%;
            }

            >p {
                margin-top: 7px;
                font-size: 16px;
                color: rgba(255, 255, 255, 1);
                font-weight: 600;
            }
        }

        .progress-bar {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 22px;
            box-sizing: border-box;

            span {
                font-size: 12px;
                color: rgba(255, 255, 255, 1);
            }

            p {
                position: relative;
                width: 180px;
                height: 8px;
                margin: 0 7px;
                background: rgba(255, 255, 255, .5);
                border-radius: 20px;
                margin-top: 2px;

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 33.33%;
                    height: 8px;
                    border-radius: 20px;
                    background: rgba(255, 210, 93, 1);
                    transition: 1s;
                }
            }
        }
    }

    .model-layout {
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        padding: 0 15px;

        .model-title {
            height: 50px;
            display: flex;
            align-items: center;
            color: rgba(38, 38, 38, 1);
            font-size: 16px;
            font-weight: 600;

            &::before {
                content: '';
                margin-right: 7px;
                width: 4px;
                height: 14px;
                border-radius: 3px;
                background: rgba(248, 166, 43, 1);
            }
        }

        .info-row {
            height: 50px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: rgba(86, 88, 93, 1);
            border-top: 0.5px solid rgba(232, 234, 236, 1);

            :last-child {
                margin-left: auto;
                color: rgba(38, 38, 38, 1);
            }
        }

        + .model-layout {
            margin-top: 10px;  
        }
    }

    .model1 {
        .default-show {
            &::after {
                margin-top: 3px;
                content: '（默认可见）';
                font-size: 12px;
                color: rgba(38, 38, 38, 1);
                font-weight: normal;
            }
        }
    }

    .model2 {
        .info-row {
            .info-row-select {
                position: relative;

                > span {
                    font-size: 14px;
                    padding: 0.267rem 0.533rem 0.267rem 0.267rem;
                }

                > svg {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
}

// 取消cube选择器的边框
.cube-select {
    &::after {
        border: none;
    }
}
.cube-select_active:after {
    border: none;
}
</style>
