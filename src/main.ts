import 'uno.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { setupAssets } from '@/plugins';

const app = createApp(App);

function setupPlugins() {
  // 引入静态资源
  setupAssets();
}

setupPlugins();

app.use(createPinia());

app.mount('#app');
