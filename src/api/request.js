//二次封装axios
import store from "@/store";
import axios from "axios";
import nprogress from "nprogress"; //引入进度条  在发送请求时会显示
import 'nprogress/nprogress.css'; // 若要修改进度条样式 可在该css文件中修改

//利用create创建实例
const requests = axios.create({
    //基础路径 发请求时自带
    baseURL: '',
    //超时时间
    timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config) => {
    // 需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config //headers在config对象中
})

//响应拦截器
requests.interceptors.response.use(res => {
    //成功回调
    nprogress.done();
    return res.data
}, err => {
    console.log(err);
    //失败回调
    return Promise.reject(new Error('failed'))
})


export default requests