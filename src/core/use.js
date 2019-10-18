import Vue from 'vue'

// localstorage
import VueStorage from 'vue-ls'

// 默认设置
import config from '@/config/defaultSettings'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd)
Vue.use(VueStorage, config.storageOptions)