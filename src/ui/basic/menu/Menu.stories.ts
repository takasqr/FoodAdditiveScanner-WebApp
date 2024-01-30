// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Menu from './Menu.vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { Menu, ChevronDownIcon },
    template: `
      <Menu>
        <span>Solutions</span>
        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
      </Menu>`,
  }),
};