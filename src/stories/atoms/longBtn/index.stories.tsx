import type { Meta, StoryObj } from '@storybook/react';
import  LongBtn  from '.';

const meta: Meta<typeof LongBtn> = {
  title: 'atoms/LongBtn',
  component: LongBtn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LongBtn>;

export const Primary: Story = {
  args: {
    text: '로그인',
    activate: true
  },
};