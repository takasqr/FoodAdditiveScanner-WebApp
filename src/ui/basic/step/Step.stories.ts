// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Step from './Step.vue';
import { type StepStatus } from './StepStatus';

const meta: Meta<typeof Step> = {
  component: Step,
};

interface Step {
  name: string
  href: string
  status: StepStatus
}

export default meta;
type Story = StoryObj<typeof Step>;

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
    components: { Step },
    template: '<Step :steps="steps"></Step>',
  }),
  args: {
    steps: [
      { name: 'Step 1', href: '#', status: 'Complete' },
      { name: 'Step 2', href: '#', status: 'Complete' },
      { name: 'Step 3', href: '#', status: 'Complete' },
      { name: 'Step 4', href: '#', status: 'Current' },
      { name: 'Step 5', href: '#', status: 'Upcoming' },
    ],
  },
};