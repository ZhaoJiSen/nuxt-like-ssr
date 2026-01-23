import createApp from './main';
import { createWebHistory } from 'vue-router';
import { createRouterInstance } from './router';

const { app } = createApp();
// 客户端有真实的浏览器 history，需要用 createWebHistory 才能与地址栏同步
const router = createRouterInstance(createWebHistory());

// 客户端也要挂载 router，才能和服务端渲染的路由结果对齐并接管后续导航
app.use(router);

// 等路由准备好再挂载，避免首屏 hydration 时出现路由不一致
router.isReady().then(() => {
  app.mount('#app');
});
