import type { Meta, StoryObj } from '@storybook/react';
import  shortBtn  from '.';

const meta: Meta<typeof shortBtn> = {
  title: 'atoms/shortBtn',
  component: shortBtn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof shortBtn>;

export const Primary: Story = {
  args: {
    text: 'Enter',
    activate: true
  },
};