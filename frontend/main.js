import App from './App';
import { createSSRApp } from 'vue';

// 用一个函数来创建 SSRApp 可以避免夸请求状态交叉，每次请求都是一个单独的实例
export default function createApp() {
  let app = createSSRApp(App);
  return { app };
}
