import axios from 'axios';  
  
// 创建axios实例  
const instance = axios.create({  
  baseURL: '', // 设置基础URL  
  timeout: 5000, // 设置请求超时时间  
  headers: {  
    'Content-Type': 'application/json', // 设置默认请求头  
  },  
});  
  
// 请求拦截器  
instance.interceptors.request.use(  
  (config) => {  
    // 在发送请求之前做些什么，例如添加token到headers中  
    // config.headers['Authorization'] = `Bearer ${token}`;  
    return config;  
  },  
  (error) => {  
    // 对请求错误做些什么  
    return Promise.reject(error);  
  }  
);  
  
// 响应拦截器  
instance.interceptors.response.use(  
  (response) => {  
    // 对响应数据做点什么，例如统一处理错误状态码  
    if (response.data.error) {  
      throw new Error(response.data.error);  
    }  
    return response.data;  
  },  
  (error) => {  
    // 对响应错误做点什么  
    return Promise.reject(error);  
  }  
);  
  
export default instance;