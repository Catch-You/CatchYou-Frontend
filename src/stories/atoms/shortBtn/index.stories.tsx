import type { Meta, StoryObj } from '@storybook/react';
import  ShortBtn  from '.';

const meta: Meta<typeof ShortBtn> = {
  title: 'atoms/ShortBtn',
  component: ShortBtn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ShortBtn>;

export const Primary: Story = {
  args: {
    text: 'Enter',
    activate: true
  },
};