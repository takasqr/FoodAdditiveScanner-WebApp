// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import TextField from './TextField.vue';

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { TextField },
    template: '<TextField value="John"></TextField>',
  }),
};

export const WithLabel: Story = {
  render: () => ({
    components: { TextField },
    template: '<TextField label="Name"></TextField>',
  }),
};

export const WithPlaceholder: Story = {
  render: () => ({
    components: { TextField },
    template: '<TextField placeholder="入力してください"></TextField>',
  }),
};

export const WithError: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args,
      };
    },
    components: { TextField },
    template: '<TextField value="John Smith" :rules="rules"></TextField>',
  }),
  args: {
    rules: [
      (value: any) => value.length <= 5 || 'Max 5 characters',
    ],
  },
};