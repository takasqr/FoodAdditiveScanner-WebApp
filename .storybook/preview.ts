import { type Preview, setup }  from '@storybook/vue3';
import { type App } from 'vue';

// Tailwind を読み込む
import '../src/ui/assets/main.css'

import { createPinia } from 'pinia';

// Pinia をセットアップ
const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
