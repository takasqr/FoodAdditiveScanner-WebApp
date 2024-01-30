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
    template: '<Select :data="data"></Select>',
  }),
  args: {
    data: [
      { id: 1, name: 'SPY Cooper' },
      { id: 2, name: 'Arlene Mccoy' },
      { id: 3, name: 'Devon Webb' },
      { id: 4, name: 'Tom Cook' },
      { id: 5, name: 'Tanya Fox' },
      { id: 6, name: 'Hellen Schmidt' },
      { id: 7, name: 'Caroline Schultz' },
      { id: 8, name: 'Mason Heaney' },
      { id: 9, name: 'Claudie Smitham' },
      { id: 10, name: 'Emil Schaefer' },
    ],
  },
};