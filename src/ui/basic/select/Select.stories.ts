// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Select from './Select.vue';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args,
      };
    },
    components: { Select },
    template: '<Select :data="data" :title="title" v-model="selected"></Select>',
  }),
  args: {
    title: '飲み物',
    data: [
      { key: 'milk', name: 'ミルク' },
      { key: 'orange', name: 'オレンジジュース' },
      { key: 'coffee', name: 'コーヒー' }
    ],
    selected: { key: 'coffee', name: 'コーヒー' }
  },
};