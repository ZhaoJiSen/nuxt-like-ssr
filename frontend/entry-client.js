import createApp from './main';
import { createWebHistory } from 'vue-router';
import { createPiniaInstance } from './store';
import { createRouterInstance } from './router';

const { app } = createApp();
const pinia = createPiniaInstance();
const router = createRouterInstance(createWebHistory());

app.use(router);
app.use(pinia);

if (window.__INITIAL_STATE__) {
  pinia.state.value = window.__INITIAL_STATE__;
}

router.isReady().then(() => {
  app.mount('#app');
});
